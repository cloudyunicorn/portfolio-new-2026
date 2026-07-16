"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, ArrowUpRight, Check, Download, Calendar } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { PERSONAL_INFO, AVAILABILITY_SERVICES } from "@/data/portfolio"

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
                        <span className="inline-block rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
                            <ShinyText
                                text="React • Next.js • FastAPI • AI Agents"
                                speed={3}
                                color="var(--muted-foreground)"
                                shineColor="var(--foreground)"
                            />
                        </span>
                    </motion.div>

                    <div className="mb-4">
                        <BlurText
                            text="Full-Stack & AI Developer for Startups"
                            delay={100}
                            animateBy="words"
                            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-glow justify-center md:justify-start"
                        />
                    </div>

                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-lg text-base sm:text-lg leading-relaxed text-foreground/80 mb-2 text-glow"
                    >
                        <strong className="font-semibold text-foreground">
                            I build modern websites, SaaS platforms, internal tools, and AI-powered applications
                        </strong>{" "}
                        that help businesses launch faster and scale with confidence.
                    </motion.p>

                    <motion.p
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground mb-6"
                    >
                        {PERSONAL_INFO.description}
                    </motion.p>

                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6 w-full md:w-auto"
                    >
                        <Button asChild size="lg" className="rounded-full px-6 transition-all duration-200 hover:scale-[1.03] active:scale-95">
                            <a href={PERSONAL_INFO.calendly} target="_blank" rel="noopener noreferrer">
                                <Calendar className="mr-2 h-4 w-4" /> Book a Free Consultation
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-6 transition-all duration-200 hover:scale-[1.03] active:scale-95">
                            <a href={PERSONAL_INFO.resume} target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 h-4 w-4" /> Download Resume
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-6 transition-all duration-200 hover:scale-[1.03] active:scale-95">
                            <Link href="#projects">
                                <ArrowUpRight className="mr-2 h-4 w-4" /> View Projects
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Availability Banner */}
                    <motion.div
                        custom={5}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-lg rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-4 mb-6"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm font-semibold tracking-wide uppercase text-foreground/90">
                                Available For Freelance Projects
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                            {AVAILABILITY_SERVICES.map((service) => (
                                <div key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        custom={6}
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
