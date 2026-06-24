"use client"

import { Badge } from "@/components/ui/badge"
import { SKILLS_GROUPED } from "@/data/portfolio"
import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"

const categoryIcons: Record<string, string> = {
    Frontend: "🎨",
    Backend: "⚙️",
    AI: "🤖",
    Tools: "🛠️",
}

export function Skills() {
    const categories = Object.entries(SKILLS_GROUPED)

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
                            Technologies I use to build modern web applications and AI-powered products.
                        </p>
                    </AnimatedContent>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
                    {categories.map(([category, skills], catIndex) => (
                        <AnimatedContent
                            key={category}
                            distance={30}
                            duration={0.5}
                            delay={catIndex * 0.1}
                        >
                            <div className="rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm p-5 hover:border-foreground/20 transition-colors duration-300">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-lg">{categoryIcons[category]}</span>
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="outline"
                                            className="text-xs py-1.5 px-3 rounded-full border-border/60 bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default font-medium"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}
