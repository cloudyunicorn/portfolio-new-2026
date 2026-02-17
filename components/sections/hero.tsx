"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PERSONAL_INFO } from "@/data/portfolio"

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
}

export function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden">
            {/* Subtle bg pattern */}
            <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-50" />

            <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col-reverse items-center justify-center gap-12 py-16 md:flex-row md:gap-16">
                {/* Text Content */}
                <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mb-4"
                    >
                        <span className="inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide uppercase">
                            Available for work
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4 leading-[1.1]"
                    >
                        Hi, I&apos;m{" "}
                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                            Rajat
                        </span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium"
                    >
                        {PERSONAL_INFO.title}
                    </motion.p>

                    <motion.p
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-lg leading-relaxed text-muted-foreground mb-8"
                    >
                        I turn ideas into polished, high-performance web applications using React, Next.js, and modern frontend technologies.
                    </motion.p>

                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-3 mb-8"
                    >
                        <Button asChild size="lg" className="rounded-full px-6">
                            <Link href={PERSONAL_INFO.resume} target="_blank">
                                <Download className="mr-2 h-4 w-4" /> Resume
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                            <Link href="#contact">
                                <Mail className="mr-2 h-4 w-4" /> Contact Me
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        custom={5}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-3"
                    >
                        <Link href={PERSONAL_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <FaGithub className="h-5 w-5" />
                        </Link>
                        <Separator orientation="vertical" className="h-5" />
                        <Link href={PERSONAL_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <FaLinkedin className="h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    className="relative flex flex-1 justify-center"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                >
                    <div className="relative">
                        {/* Glow behind image */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-muted to-accent blur-2xl opacity-60 dark:opacity-40 dark:from-primary/20 dark:to-secondary/20" />
                        <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-2 border-border shadow-2xl dark:bg-muted/10">
                            <Image
                                src="/images/profile/developer-pic-1.png"
                                alt={PERSONAL_INFO.name}
                                fill
                                sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
