import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Building2, Home, Paintbrush, Users, Hammer, Wrench, ArrowRight, CheckCircle2, Phone, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance mb-6">
              Construyendo espacios que transforman vidas
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
              Especialistas en rehabilitaciones integrales, reformas y obra nueva en Barberà del Vallès y alrededores.
              Calidad, experiencia y compromiso en cada proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                <Link href="/contacto#presupuesto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Soluciones integrales para todo tipo de proyectos de construcción y rehabilitación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Más información
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-muted-foreground text-pretty">Transformamos espacios con calidad y dedicación</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/proyectos">
                Ver Todos los Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
              ¿Por qué elegir Bauspazio?
            </h2>
            <p className="text-lg text-primary-foreground/80 text-pretty">
              Compromiso con la excelencia en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex p-4 rounded-full bg-primary-foreground/10">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-lg text-accent-foreground/90 text-pretty mb-8">
              Solicita un presupuesto sin compromiso y descubre cómo podemos transformar tu espacio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contacto#presupuesto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-accent-foreground/20 hover:bg-accent-foreground/10 bg-transparent"
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

const services = [
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Obra Nueva",
    description:
      "Construcción de edificios residenciales y comerciales desde cero con los más altos estándares de calidad.",
    link: "/servicios/obra-nueva",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Reformas Integrales",
    description: "Transformación completa de viviendas y locales adaptados a tus necesidades y estilo.",
    link: "/servicios/reformas",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Rehabilitación de Fachadas",
    description: "Restauración y modernización de fachadas con técnicas avanzadas y materiales de primera calidad.",
    link: "/servicios/fachadas",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Comunidades de Vecinos",
    description: "Mantenimiento y rehabilitación de zonas comunes y elementos estructurales de edificios.",
    link: "/servicios/comunidades",
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "Reformas de Locales",
    description: "Adaptación y renovación de espacios comerciales para maximizar su potencial.",
    link: "/servicios/locales",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Pequeñas Reformas",
    description: "Trabajos de mantenimiento, reparación y mejoras puntuales con la misma calidad profesional.",
    link: "/servicios/pequenas-reformas",
  },
]

const featuredProjects = [
  {
    image: "/modern-building-facade-renovation.jpg",
    category: "Rehabilitación de Fachada",
    title: "Edificio Residencial Centro",
    description: "Rehabilitación completa de fachada con aislamiento térmico y acabados modernos.",
  },
  {
    image: "/modern-apartment-renovation.png",
    category: "Reforma Integral",
    title: "Vivienda Familiar",
    description: "Transformación completa de vivienda de 120m² con diseño contemporáneo y funcional.",
  },
]

const benefits = [
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "+20 Años",
    description: "De experiencia en el sector de la construcción y rehabilitación",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Calidad Garantizada",
    description: "Materiales de primera calidad y acabados profesionales",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Cumplimiento",
    description: "Respetamos plazos y presupuestos acordados",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Transparencia",
    description: "Comunicación clara y presupuestos detallados",
  },
]

const testimonials = [
  {
    quote:
      "Profesionales excepcionales. Reformaron nuestra vivienda completa y el resultado superó nuestras expectativas. Muy recomendables.",
    name: "María García",
    project: "Reforma Integral",
  },
  {
    quote:
      "Excelente trabajo en la rehabilitación de la fachada de nuestro edificio. Cumplieron los plazos y el presupuesto acordado.",
    name: "Juan Martínez",
    project: "Rehabilitación de Fachada",
  },
  {
    quote:
      "Muy satisfechos con la reforma de nuestro local comercial. Atención personalizada y gran calidad en los acabados.",
    name: "Laura Sánchez",
    project: "Reforma de Local",
  },
]
