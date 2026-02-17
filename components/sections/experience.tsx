"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCE } from "@/data/portfolio"

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
}

export function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                        Career
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                    {EXPERIENCE.map((job, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className={`relative flex items-start gap-6 mb-10 last:mb-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                                <div className="h-3 w-3 rounded-full bg-foreground ring-4 ring-background" />
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />

                            <Card className="ml-10 md:ml-0 md:w-1/2 border-border/60 bg-card/50 backdrop-blur-sm hover:border-foreground/20 transition-colors duration-300">
                                <CardContent className="p-5">
                                    <div className="flex flex-col gap-1 mb-3">
                                        <h3 className="text-lg font-semibold leading-snug">{job.position}</h3>
                                        <a
                                            href={job.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 w-fit"
                                        >
                                            {job.company} <ExternalLink className="h-3 w-3" />
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                                        <span className="inline-flex items-center gap-1">
                                            <Calendar className="h-3 w-3" /> {job.time}
                                        </span>
                                        <span className="inline-flex items-center gap-1">
                                            <MapPin className="h-3 w-3" /> {job.address}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {job.work}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
