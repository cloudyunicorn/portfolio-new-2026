"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useState } from "react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROFESSIONAL_PROJECTS, INDEPENDENT_PROJECTS } from "@/data/portfolio"

import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"
import SpotlightCard from "@/components/SpotlightCard"

type Project = {
    title: string
    type: string
    summary: string
    tech: string
    img: string
    link: string
    caseStudy?: {
        challenge: string
        solution: string
        technology: string
    }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [expanded, setExpanded] = useState(false)

    return (
        <AnimatedContent
            distance={40}
            duration={0.6}
            delay={index * 0.1}
        >
            <SpotlightCard
                className="h-full !rounded-xl !p-0 !border-border/60 !bg-card/50 backdrop-blur-sm hover:!border-foreground/20 transition-all duration-300"
                spotlightColor="rgba(120, 119, 198, 0.15)"
            >
                <Card className="group h-full flex flex-col overflow-hidden border-0 bg-transparent shadow-none">
                    <div className="relative aspect-video w-full overflow-hidden bg-muted rounded-t-xl">
                        <Image
                            src={project.img}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                    </div>
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start gap-2">
                            <CardTitle className="line-clamp-1 text-base font-semibold">{project.title}</CardTitle>
                            <Badge variant="outline" className="text-[10px] shrink-0 rounded-full">
                                {project.type}
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1 pt-0">
                        <CardDescription className="text-sm leading-relaxed mb-2">
                            {project.summary}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.tech.split(",").map((t) => {
                                const techItem = t.trim();
                                return (
                                    <Badge
                                        key={techItem}
                                        variant="secondary"
                                        className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted/60 text-muted-foreground border border-border/40"
                                    >
                                        {techItem}
                                    </Badge>
                                );
                            })}
                        </div>

                        {/* Expandable Case Study */}
                        {project.caseStudy && (
                            <div className="mt-3">
                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
                                    {expanded ? "Hide Details" : "View Details"}
                                </button>
                                {expanded && (
                                    <div className="mt-3 space-y-2 text-xs text-muted-foreground border-t border-border/40 pt-3">
                                        <div>
                                            <span className="font-semibold text-foreground/80">Challenge: </span>
                                            {project.caseStudy.challenge}
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground/80">Solution: </span>
                                            {project.caseStudy.solution}
                                        </div>
                                        <div>
                                            <span className="font-semibold text-foreground/80">Technology: </span>
                                            {project.caseStudy.technology}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="gap-2 pt-0">
                        <Button asChild size="sm" className="flex-1 text-xs">
                            <Link href={project.link} target="_blank">
                                <ArrowUpRight className="mr-1.5 h-3.5 w-3.5" /> View Project
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </SpotlightCard>
        </AnimatedContent>
    )
}

export function Projects() {
    return (
        <section id="projects" className="py-20 sm:py-24">
            <div className="container">
                <div className="text-center mb-14">
                    <AnimatedContent distance={30} duration={0.6}>
                        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                            Portfolio
                        </Badge>
                    </AnimatedContent>
                    <SplitText
                        text="Featured Projects"
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
                    <AnimatedContent distance={20} duration={0.5} delay={0.3}>
                        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                            Real-world projects built for businesses and independent products demonstrating full-stack expertise.
                        </p>
                    </AnimatedContent>
                </div>

                {/* Professional & Client Work */}
                <AnimatedContent distance={20} duration={0.5}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <span className="h-1 w-6 rounded-full bg-foreground inline-block" />
                        Professional &amp; Client Work
                    </h3>
                </AnimatedContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
                    {PROFESSIONAL_PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* Independent Products */}
                <AnimatedContent distance={20} duration={0.5}>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <span className="h-1 w-6 rounded-full bg-foreground inline-block" />
                        Independent Products
                    </h3>
                </AnimatedContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {INDEPENDENT_PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
