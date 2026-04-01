"use client"

import { MapPin, GraduationCap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EDUCATION } from "@/data/portfolio"

import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"

export function Education() {
    return (
        <section id="education" className="py-20 sm:py-24 bg-muted/30">
            <div className="container">
                <div className="text-center mb-14">
                    <AnimatedContent distance={30} duration={0.6}>
                        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                            Academics
                        </Badge>
                    </AnimatedContent>
                    <SplitText
                        text="Education"
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

                <div className="max-w-3xl mx-auto">
                    {EDUCATION.map((edu, index) => (
                        <AnimatedContent
                            key={index}
                            distance={40}
                            duration={0.6}
                            delay={0.1}
                            direction="vertical"
                            className="w-full"
                        >
                            <Card className="border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors duration-300 shadow-lg">
                                <CardContent className="p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
                                    <div className="flex flex-col items-center gap-2 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                            <GraduationCap className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold leading-snug">{edu.degree}</h3>
                                        <span className="text-base sm:text-lg font-medium text-foreground">
                                            {edu.institution}
                                        </span>
                                    </div>
                                    
                                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                                        {edu.time && (
                                            <span className="inline-flex items-center gap-1.5">
                                                <GraduationCap className="h-4 w-4" /> {edu.time}
                                            </span>
                                        )}
                                        {edu.address && (
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin className="h-4 w-4" /> {edu.address}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {edu.info && (
                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                            {edu.info}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    )
}
