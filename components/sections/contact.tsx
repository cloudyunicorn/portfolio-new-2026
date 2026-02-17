"use client"

import Link from "next/link"
import { Mail, ArrowUpRight } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { PERSONAL_INFO } from "@/data/portfolio"

import SplitText from "@/components/SplitText"
import AnimatedContent from "@/components/AnimatedContent"
import Magnet from "@/components/Magnet"
import StarBorder from "@/components/StarBorder"
import DecryptedText from "@/components/DecryptedText"

export function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-24">
            <div className="container">
                <div className="text-center mb-14">
                    <AnimatedContent distance={30} duration={0.6}>
                        <Badge variant="secondary" className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider">
                            Get in Touch
                        </Badge>
                    </AnimatedContent>
                    <SplitText
                        text="Let's Work Together"
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
                            Interested in collaborating or have a project in mind? Feel free to reach out.
                        </p>
                    </AnimatedContent>
                </div>

                <AnimatedContent distance={30} duration={0.6} delay={0.2}>
                    <div className="max-w-md mx-auto">
                        <Card className="border-border/60 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-8 flex flex-col items-center gap-6">
                                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                                    <Mail className="h-7 w-7 text-muted-foreground" />
                                </div>
                                <div className="text-center">
                                    <p className="font-medium mb-1">Email me at</p>
                                    <a
                                        href={`mailto:${PERSONAL_INFO.email}`}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <DecryptedText
                                            text={PERSONAL_INFO.email}
                                            speed={60}
                                            maxIterations={15}
                                            sequential
                                            revealDirection="start"
                                            animateOn="view"
                                            className="underline underline-offset-4"
                                            encryptedClassName="underline underline-offset-4 text-muted-foreground/60"
                                        />
                                    </a>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <Magnet padding={30} magnetStrength={2}>
                                        <Button asChild variant="outline" className="rounded-full" size="lg">
                                            <Link href={PERSONAL_INFO.social.github} target="_blank">
                                                <FaGithub className="mr-2 h-4 w-4" /> GitHub
                                            </Link>
                                        </Button>
                                    </Magnet>
                                    <Magnet padding={30} magnetStrength={2}>
                                        <Button asChild variant="outline" className="rounded-full" size="lg">
                                            <Link href={PERSONAL_INFO.social.linkedin} target="_blank">
                                                <FaLinkedin className="mr-2 h-4 w-4" /> LinkedIn
                                            </Link>
                                        </Button>
                                    </Magnet>
                                </div>
                                <StarBorder
                                    as="a"
                                    href={`mailto:${PERSONAL_INFO.email}`}
                                    className="w-full"
                                    color="hsl(250 60% 60%)"
                                    speed="5s"
                                >
                                    Send Email <ArrowUpRight className="ml-2 h-4 w-4 inline-block" />
                                </StarBorder>
                            </CardContent>
                        </Card>
                    </div>
                </AnimatedContent>
            </div>
        </section>
    )
}
