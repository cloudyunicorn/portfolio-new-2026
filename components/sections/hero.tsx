"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PERSONAL_INFO } from "@/data/portfolio"

import BlurText from "@/components/BlurText"
import ShinyText from "@/components/ShinyText"
import RotatingText from "@/components/RotatingText"
import Magnet from "@/components/Magnet"
import GradientText from "@/components/GradientText"

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
            {/* Subtle bg pattern and mask for readability */}
            <div className="absolute inset-0 bg-grid dark:bg-grid-dark opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/0 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

            <div className="container relative flex min-h-[calc(100vh-4rem)] flex-col-reverse items-center justify-center gap-10 py-12 md:flex-row md:gap-14 lg:gap-20">
                {/* Text Content */}
                <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left gap-1">
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mb-3"
                    >
                        {/* <span className="inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
                            <ShinyText
                                text="Available for work"
                                speed={3}
                                color="hsl(var(--muted-foreground))"
                                shineColor="hsl(var(--foreground))"
                            />
                        </span> */}
                    </motion.div>

                    <div className="mb-2">
                        <BlurText
                            text="Hi, I'm"
                            delay={100}
                            animateBy="words"
                            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-glow"
                        />
                        <GradientText
                            colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                            animationSpeed={4}
                            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-glow"
                        >
                            Rajat
                        </GradientText>
                    </div>

                    <motion.div
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-base sm:text-lg text-muted-foreground mb-3 font-medium flex items-center gap-2 flex-wrap"
                    >
                        <span>I&apos;m a</span>
                        <RotatingText
                            texts={["Full-Stack Developer", "Software Engineer", "React/Next.js Specialist", "UI/UX Enthusiast"]}
                            mainClassName="px-2 sm:px-3 py-0.5 bg-accent/80 backdrop-blur-sm text-accent-foreground border border-border rounded-lg overflow-hidden"
                            staggerFrom="last"
                            staggerDuration={0.025}
                            rotationInterval={2500}
                            splitBy="characters"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        />
                    </motion.div>

                    <motion.p
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-lg text-sm sm:text-base leading-relaxed text-foreground/90 mb-6 text-glow"
                    >
                        I turn ideas into polished, high-performance web applications using React, Next.js, and modern frontend technologies.
                    </motion.p>

                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-3 mb-6"
                    >
                        <Magnet padding={50} magnetStrength={3}>
                            <Button asChild size="lg" className="rounded-full px-6">
                                <Link href={PERSONAL_INFO.resume} target="_blank">
                                    <Download className="mr-2 h-4 w-4" /> Resume
                                </Link>
                            </Button>
                        </Magnet>
                        <Magnet padding={50} magnetStrength={3}>
                            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                                <Link href="#contact">
                                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                                </Link>
                            </Button>
                        </Magnet>
                    </motion.div>

                    <motion.div
                        custom={5}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-3"
                    >
                        <Magnet padding={40} magnetStrength={2}>
                            <Link href={PERSONAL_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaGithub className="h-5 w-5" />
                            </Link>
                        </Magnet>
                        <Separator orientation="vertical" className="h-5" />
                        <Magnet padding={40} magnetStrength={2}>
                            <Link href={PERSONAL_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                <FaLinkedin className="h-5 w-5" />
                            </Link>
                        </Magnet>
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
