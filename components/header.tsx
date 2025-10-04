"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
            BAUSPAZIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/#servicios"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contacto
            </Link>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contacto#presupuesto">Presupuesto Gratuito</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#servicios"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/proyectos"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <Link href="/contacto#presupuesto" onClick={() => setMobileMenuOpen(false)}>
                  Presupuesto Gratuito
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
