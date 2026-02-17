"use client"

import { MapPin, Calendar, ExternalLink } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCE } from "@/data/portfolio"

import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"

export function Experience() {
    return (
        <section id="experience" className="py-20 sm:py-24">
            <div className="container">
                <div className="text-center mb-14">
                    <AnimatedContent distance={30} duration={0.6}>
                        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                            Career
                        </Badge>
                    </AnimatedContent>
                    <SplitText
                        text="Work Experience"
                        className="text-3xl font-bold tracking-tight sm:text-4xl"
                        delay={30}
                        duration={0.6}
                        ease="power2.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.2}
                        tag="h2"
                        textAlign="center"
                    />
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                    {EXPERIENCE.map((job, index) => (
                        <AnimatedContent
                            key={index}
                            distance={40}
                            duration={0.6}
                            delay={index * 0.12}
                            direction={index % 2 === 0 ? "horizontal" : "horizontal"}
                            reverse={index % 2 !== 0}
                            className="mb-12 md:mb-10 last:mb-0"
                        >
                            <div
                                className={`relative flex items-start gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}
