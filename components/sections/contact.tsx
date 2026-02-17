"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PERSONAL_INFO } from "@/data/portfolio"

export function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                        Get in Touch
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                        Interested in collaborating or have a project in mind? Feel free to reach out.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto"
                >
                    <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-8 flex flex-col items-center gap-6">
                            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                                <Mail className="h-7 w-7 text-muted-foreground" />
                            </div>
                            <div className="text-center">
                                <p className="font-medium mb-1">Email me at</p>
                                <a
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                                >
                                    {PERSONAL_INFO.email}
                                </a>
                            </div>
                            <div className="flex gap-3 w-full">
                                <Button asChild variant="outline" className="flex-1 rounded-full" size="lg">
                                    <Link href={PERSONAL_INFO.social.github} target="_blank">
                                        <FaGithub className="mr-2 h-4 w-4" /> GitHub
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" className="flex-1 rounded-full" size="lg">
                                    <Link href={PERSONAL_INFO.social.linkedin} target="_blank">
                                        <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                                    </Link>
                                </Button>
                            </div>
                            <Button asChild className="w-full rounded-full" size="lg">
                                <Link href={`mailto:${PERSONAL_INFO.email}`}>
                                    Send Email <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
