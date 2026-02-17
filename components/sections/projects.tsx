"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

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

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
}

export function Projects() {
    return (
        <section id="projects" className="py-20 sm:py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                        Portfolio
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                        A selection of projects showcasing my expertise in modern web development.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                        >
                            <Card className="group h-full flex flex-col overflow-hidden border-border/60 bg-card/50 backdrop-blur-sm hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                                <div className="relative aspect-video w-full overflow-hidden bg-muted">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
