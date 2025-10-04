import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Phone, Mail, Building2 } from "lucide-react"
import type { ReactNode } from "react"

interface ServiceLayoutProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  process: { step: string; description: string }[]
  benefits: string[]
  children?: ReactNode
}

export function ServiceLayout({ title, description, icon, features, process, benefits, children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-flex p-4 rounded-lg bg-accent/10 text-accent">{icon}</div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">{title}</h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-8">¿Qué incluye este servicio?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-12 text-center">Nuestro Proceso</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-accent/20 mb-3">{String(index + 1).padStart(2, "0")}</div>
                    <h3 className="text-lg font-bold mb-2">{step.step}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tight mb-8">Ventajas de trabajar con nosotros</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-accent/5 border-accent/20">
                  <CardContent className="p-6">
                    <p className="font-medium leading-relaxed">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-balance mb-6">
              ¿Interesado en este servicio?
            </h2>
            <p className="text-lg text-accent-foreground/90 text-pretty mb-8">
              Solicita un presupuesto personalizado sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contacto#presupuesto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent"
              >
                <Link href="tel:+34123456789">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">BAUSPAZIO</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Especialistas en rehabilitaciones integrales y construcción en Barberà del Vallès.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/servicios/obra-nueva" className="hover:text-primary-foreground transition-colors">
                    Obra Nueva
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/reformas" className="hover:text-primary-foreground transition-colors">
                    Reformas Integrales
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/rehabilitaciones" className="hover:text-primary-foreground transition-colors">
                    Rehabilitaciones
                  </Link>
                </li>
                <li>
                  <Link href="/servicios/fachadas" className="hover:text-primary-foreground transition-colors">
                    Fachadas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-primary-foreground transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos" className="hover:text-primary-foreground transition-colors">
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/trabaja-con-nosotros" className="hover:text-primary-foreground transition-colors">
                    Trabaja con Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-primary-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+34 123 456 789</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>info@bauspazio.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Building2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Barberà del Vallès, Barcelona</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2025 Bauspazio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/aviso-legal" className="hover:text-primary-foreground transition-colors">
                Aviso Legal
              </Link>
              <Link href="/privacidad" className="hover:text-primary-foreground transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="hover:text-primary-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
