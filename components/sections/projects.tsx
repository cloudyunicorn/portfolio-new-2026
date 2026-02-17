"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"

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
import { PROJECTS } from "@/data/portfolio"

import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"
import SpotlightCard from "@/components/SpotlightCard"

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
                            A selection of projects showcasing my expertise in modern web development.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <AnimatedContent
                            key={index}
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
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-1 pt-0">
                                        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                                            {project.summary || "A web application built with modern technologies."}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-2 pt-0">
                                        <Button asChild variant="ghost" size="sm" className="flex-1 text-xs">
                                            <Link href={project.github} target="_blank">
                                                <FaGithub className="mr-1.5 h-3.5 w-3.5" /> Code
                                            </Link>
                                        </Button>
                                        <Button asChild size="sm" className="flex-1 text-xs">
                                            <Link href={project.link} target="_blank">
                                                <ArrowUpRight className="mr-1.5 h-3.5 w-3.5" /> Live Demo
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </SpotlightCard>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}
