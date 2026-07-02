"use client"

import Link from "next/link"
import { Mail, Download } from "lucide-react"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { PERSONAL_INFO } from "@/data/portfolio"
import ShinyText from "@/components/ShinyText"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/20">
            <div className="container py-10">
                <div className="flex flex-col gap-6">
                    {/* Top Row: Availability + Response Time */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-muted-foreground">
                                <span className="font-medium text-foreground/80">Current Availability:</span>{" "}
                                Open for Freelance Projects
                            </span>
                        </div>
                        <Separator orientation="vertical" className="h-4 hidden sm:block" />
                        <div className="text-muted-foreground">
                            <span className="font-medium text-foreground/80">Response Time:</span>{" "}
                            Usually within 24 hours
                        </div>
                    </div>

                    <Separator />

                    {/* Bottom Row: Logo, Resume link, Socials */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <Link
                                href={PERSONAL_INFO.resume}
                                target="_blank"
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 sm:order-3"
                            >
                                <Download className="h-3 w-3" /> Resume
                            </Link>

                            <div className="flex items-center gap-3 sm:order-1">
                                <div className="h-6 w-6 rounded-md bg-foreground flex items-center justify-center">
                                    <span className="text-background font-bold text-xs">R</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    <ShinyText
                                        text={`© ${new Date().getFullYear()} Rajat Singh. All rights reserved.`}
                                        speed={4}
                                        color="var(--muted-foreground)"
                                        shineColor="var(--foreground)"
                                    />
                                </span>
                            </div>

                            <Separator orientation="vertical" className="h-4 hidden sm:block sm:order-2" />
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href={PERSONAL_INFO.whatsapp} target="_blank" className="text-muted-foreground hover:text-green-500 transition-colors">
                                <FaWhatsapp className="h-4 w-4" />
                            </Link>
                            <Link href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="h-4 w-4" />
                            </Link>
                            <Link href={PERSONAL_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaLinkedin className="h-4 w-4" />
                            </Link>
                            <Link href={PERSONAL_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaGithub className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
