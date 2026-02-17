"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import DecryptedText from "@/components/DecryptedText"
import Magnet from "@/components/Magnet"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <motion.header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                        <span className="text-background font-bold text-sm">R</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
                        <DecryptedText
                            text="Rajat"
                            speed={80}
                            maxIterations={8}
                            animateOn="hover"
                            sequential
                            revealDirection="start"
                        />
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Magnet key={item.href} padding={30} magnetStrength={1.5}>
                            <Link
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent/60"
                            >
                                {item.name}
                            </Link>
                        </Magnet>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72" aria-describedby={undefined}>
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-6 mt-8">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="h-8 w-8 rounded-lg bg-foreground flex items-center justify-center">
                                        <span className="text-background font-bold text-sm">R</span>
                                    </div>
                                    <span className="font-bold text-lg">Rajat</span>
                                </Link>
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <button
                                            key={item.href}
                                            onClick={() => {
                                                const targetId = item.href.replace("#", "")
                                                setIsOpen(false)
                                                setTimeout(() => {
                                                    document.body.style.overflow = ""
                                                    document.body.style.pointerEvents = ""
                                                    document.body.style.removeProperty("overflow")
                                                    document.body.style.removeProperty("pointer-events")
                                                    document.body.style.removeProperty("padding-right")

                                                    if (targetId === "hero") {
                                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                                    } else {
                                                        const el = document.getElementById(targetId)
                                                        if (el) {
                                                            el.scrollIntoView({ behavior: "smooth" })
                                                        }
                                                    }
                                                }, 500)
                                            }}
                                            className="px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent text-left"
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}
