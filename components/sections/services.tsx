"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent";
import SpotlightCard from "@/components/SpotlightCard";
import { Globe, Rocket, Brain, LayoutDashboard, Plug, Smartphone } from "lucide-react";
import { SERVICES } from "@/data/portfolio";

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <AnimatedContent distance={30} duration={0.6}>
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-wider"
          >
            Services
          </Badge>
          </AnimatedContent>
          <SplitText
            text="What I Can Build"
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
              Solutions tailored to your business needs.
            </p>
          </AnimatedContent>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <AnimatedContent
              key={index}
              distance={40}
              duration={0.6}
              delay={index * 0.15}
            >
              <SpotlightCard
                className="h-full !rounded-xl !p-0 !border-border/60 !bg-card/50 backdrop-blur-sm hover:!border-foreground/20 transition-all duration-300"
                spotlightColor="rgba(120, 119, 198, 0.15)"
              >
                <Card className="group h-full flex flex-col border-0 bg-transparent shadow-none">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      {service.icon === "globe" ? (
                        <Globe className="h-6 w-6 text-primary" />
                      ) : service.icon === "rocket" ? (
                        <Rocket className="h-6 w-6 text-primary" />
                      ) : service.icon === "brain" ? (
                        <Brain className="h-6 w-6 text-primary" />
                      ) : service.icon === "dashboard" ? (
                        <LayoutDashboard className="h-6 w-6 text-primary" />
                      ) : service.icon === "plug" ? (
                        <Plug className="h-6 w-6 text-primary" />
                      ) : (
                        <Smartphone className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
