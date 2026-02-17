"use client"

import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/data/portfolio"
import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"

export function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-24 bg-muted/30">
            <div className="container">
                <div className="text-center mb-14">
                    <AnimatedContent distance={30} duration={0.6}>
                        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                            Expertise
                        </Badge>
                    </AnimatedContent>
                    <SplitText
                        text="Skills & Technologies"
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
                            Technologies I work with to build modern, performant web applications.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <AnimatedContent
                            key={skill}
                            distance={30}
                            duration={0.5}
                            delay={index * 0.06}
                            scale={0.9}
                        >
                            <div className="group relative">
                                <Badge
                                    variant="outline"
                                    className="text-sm py-2.5 px-5 rounded-full border-border/60 bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default font-medium"
                                >
                                    {skill}
                                </Badge>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}
