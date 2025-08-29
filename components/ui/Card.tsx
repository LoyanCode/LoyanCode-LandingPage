import type React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children: React.ReactNode
  hoverEffect?: boolean
  onClick?: () => void
}

export function Card({ className, children, hoverEffect = false, onClick }: CardProps) {
  return (
    <div
      className={cn(
        "bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden",
        hoverEffect && "transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20",
        onClick && "cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  className?: string
  children: React.ReactNode
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return <div className={cn("p-6", className)}>{children}</div>
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}

interface CardFooterProps {
  className?: string
  children: React.ReactNode
}

export function CardFooter({ className, children }: CardFooterProps) {
  return <div className={cn("p-6 pt-0 flex items-center", className)}>{children}</div>
}
