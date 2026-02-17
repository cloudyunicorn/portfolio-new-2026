"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import BubbleMenu from "@/components/BubbleMenu"
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
        <header
            className="fixed top-0 left-0 right-0 z-50 w-full h-16 border-b border-border/40 bg-background/80 backdrop-blur-xl"
        >
            <div className="container flex h-full items-center justify-between">
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
                    <div className="md:hidden">
                        <BubbleMenu
                            className="relative top-0 right-0 px-0"
                            menuBg="var(--background)"
                            menuContentColor="var(--foreground)"
                            itemMenuBg="color-mix(in srgb, var(--background), transparent 60%)"
                            fixedOverlay={true}
                            items={navItems.map(item => ({
                                label: item.name,
                                href: item.href,
                                rotation: (Math.random() * 20 - 10), // Random rotation for effect
                                hoverStyles: {
                                    bgColor: "var(--foreground)",
                                    textColor: "var(--background)"
                                }
                            }))}
                            onMenuClick={(open) => {
                                setIsOpen(open);
                                if (open) {
                                    document.body.style.overflow = "hidden";
                                } else {
                                    document.body.style.overflow = "";
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

