"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./Button"

interface Section {
    id: string
    title: string
    icon: React.ReactNode
    component: React.ReactNode
}

interface HorizontalNavigatorProps {
    sections: Section[]
}

export default function HorizontalNavigator({ sections }: HorizontalNavigatorProps) {
    const [currentSection, setCurrentSection] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const goToSection = useCallback((index: number) => {
        if (index === currentSection || isTransitioning) return
        setIsTransitioning(true)
        setCurrentSection(index)
        setTimeout(() => setIsTransitioning(false), 500)
    }, [currentSection, isTransitioning])

    const goToSectionById = useCallback((sectionId: string) => {
        const index = sections.findIndex(section => section.id === sectionId)
        if (index !== -1) {
            goToSection(index)
        }
    }, [sections, goToSection])

    const nextSection = useCallback(() => {
        if (currentSection < sections.length - 1) {
            goToSection(currentSection + 1)
        }
    }, [currentSection, sections.length, goToSection])

    const prevSection = useCallback(() => {
        if (currentSection > 0) {
            goToSection(currentSection - 1)
        }
    }, [currentSection, goToSection])

    // Keyboard navigation and external navigation events
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                nextSection()
            } else if (e.key === "ArrowLeft") {
                prevSection()
            }
        }

        const handleNavigateToSection = (e: CustomEvent) => {
            goToSectionById(e.detail.sectionId)
        }

        window.addEventListener("keydown", handleKeyPress)
        window.addEventListener("navigateToSection", handleNavigateToSection as EventListener)

        return () => {
            window.removeEventListener("keydown", handleKeyPress)
            window.removeEventListener("navigateToSection", handleNavigateToSection as EventListener)
        }
    }, [nextSection, prevSection, goToSectionById])

    // Sync with navbar when section changes
    useEffect(() => {
        const currentSectionId = sections[currentSection]?.id
        if (currentSectionId) {
            const event = new CustomEvent('sectionChanged', { detail: { sectionId: currentSectionId } })
            window.dispatchEvent(event)
        }
    }, [currentSection, sections])

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Main Content Area */}
            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSection}
                        className="absolute inset-0"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {sections[currentSection].component}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50">
                <div className="flex space-x-3">
                    {sections.map((section, index) => (
                        <button
                            key={section.id}
                            onClick={() => goToSection(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSection
                                ? "bg-blue-500 scale-125"
                                : "bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Arrow Navigation */}
            {/* <div className="absolute inset-y-0 left-4 flex items-center z-40">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSection}
                    disabled={currentSection === 0}
                    className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10"
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>
            </div>

            <div className="absolute inset-y-0 right-4 flex items-center z-40">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSection}
                    disabled={currentSection === sections.length - 1}
                    className="bg-black/50 backdrop-blur-sm border-white/20 hover:bg-white/10"
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div> */}

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/10 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            {/* Section Counter */}
            {/* <div className="absolute bottom-8 right-8 z-50">
                <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/20">
                    <span className="text-sm text-gray-300">
                        {currentSection + 1} / {sections.length}
                    </span>
                </div>
            </div> */}
        </div>
    )
} 