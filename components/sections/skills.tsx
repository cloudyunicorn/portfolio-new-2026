"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/data/portfolio"

const skillVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, delay: i * 0.06, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
}

export function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-24 bg-muted/30">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                        Expertise
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
                        Technologies I work with to build modern, performant web applications.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill}
                            custom={index}
                            variants={skillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="group relative">
                                <Badge
                                    variant="outline"
                                    className="text-sm py-2.5 px-5 rounded-full border-border/60 bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default font-medium"
                                >
                                    {skill}
                                </Badge>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
