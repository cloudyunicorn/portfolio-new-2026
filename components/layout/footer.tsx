import Link from "next/link"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Separator } from "@/components/ui/separator"
import { PERSONAL_INFO } from "@/data/portfolio"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/20">
            <div className="container py-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-foreground flex items-center justify-center">
                            <span className="text-background font-bold text-xs">R</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Rajat. All rights reserved.
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href={PERSONAL_INFO.social.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <FaGithub className="h-4 w-4" />
                        </Link>
                        <Link href={PERSONAL_INFO.social.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <FaLinkedin className="h-4 w-4" />
                        </Link>
                        <Link href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                            <Mail className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
