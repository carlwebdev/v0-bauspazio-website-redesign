import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Phone, Mail, Building2, Award, Users, Target, Heart, Shield, Lightbulb } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">Sobre Bauspazio</h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
              Más de 20 años transformando espacios y construyendo confianza en Barberà del Vallès y alrededores
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">Nuestra Historia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Bauspazio nació en 2003 con una visión clara: ofrecer servicios de construcción y rehabilitación de
                    la más alta calidad en el Vallès. Lo que comenzó como un pequeño equipo de profesionales
                    apasionados, se ha convertido en una empresa de referencia en la zona.
                  </p>
                  <p>
                    A lo largo de estos años, hemos completado cientos de proyectos, desde pequeñas reformas hasta
                    grandes rehabilitaciones de edificios completos. Cada proyecto es único y lo abordamos con la misma
                    dedicación y profesionalidad.
                  </p>
                  <p>
                    Nuestro compromiso con la excelencia, la transparencia y el trato personalizado nos ha permitido
                    construir relaciones duraderas con nuestros clientes, muchos de los cuales nos recomiendan a sus
                    familiares y amigos.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src="/construction-team-at-work.jpg"
                  alt="Equipo Bauspazio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Nuestros Valores</h2>
            <p className="text-lg text-muted-foreground">Los principios que guían nuestro trabajo cada día</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-muted-foreground">
              Profesionales cualificados y comprometidos con la excelencia
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Nuestro equipo está formado por arquitectos técnicos, maestros de obra, albañiles, electricistas,
                    fontaneros y especialistas en diferentes áreas de la construcción. Todos ellos cuentan con amplia
                    experiencia y las certificaciones necesarias para garantizar trabajos de la máxima calidad.
                  </p>
                  <p>
                    Trabajamos con una red de colaboradores de confianza que comparten nuestros valores de calidad,
                    puntualidad y profesionalidad. Esta colaboración nos permite abordar proyectos de cualquier
                    envergadura con total garantía.
                  </p>
                  <p>
                    La formación continua es fundamental para nosotros. Nos mantenemos actualizados en las últimas
                    técnicas constructivas, normativas y materiales para ofrecer siempre las mejores soluciones a
                    nuestros clientes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Certificaciones y Garantías</h2>
            <p className="text-lg text-muted-foreground">Trabajamos con todas las garantías y certificaciones</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 inline-flex p-2 rounded-lg bg-accent/10 text-accent">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
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
              ¿Quieres trabajar con nosotros?
            </h2>
            <p className="text-lg text-accent-foreground/90 text-pretty mb-8">
              Cuéntanos tu proyecto y descubre por qué somos la mejor opción
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

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Calidad",
    description: "Utilizamos materiales de primera calidad y técnicas profesionales en cada proyecto.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Compromiso",
    description: "Nos comprometemos con los plazos y presupuestos acordados desde el primer día.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Transparencia",
    description: "Comunicación clara y honesta en todas las fases del proyecto.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Profesionalidad",
    description: "Equipo cualificado con amplia experiencia en el sector de la construcción.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovación",
    description: "Aplicamos las últimas técnicas y materiales para resultados óptimos.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excelencia",
    description: "Buscamos la perfección en cada detalle de nuestros trabajos.",
  },
]

const stats = [
  { value: "+20", label: "Años de experiencia" },
  { value: "+500", label: "Proyectos completados" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "+30", label: "Profesionales" },
]

const certifications = [
  {
    title: "Licencias y Permisos",
    description: "Todas las licencias necesarias para operar en el sector de la construcción",
  },
  {
    title: "Seguros",
    description: "Seguro de responsabilidad civil y garantías sobre todos nuestros trabajos",
  },
  {
    title: "Certificaciones",
    description: "Certificados de calidad y cumplimiento de normativa técnica vigente",
  },
]
