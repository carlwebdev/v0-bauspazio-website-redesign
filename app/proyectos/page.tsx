"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Phone, Mail, Building2 } from "lucide-react"

const categories = ["Todos", "Obra Nueva", "Reformas", "Fachadas", "Comunidades", "Locales"]

const projects = [
  {
    id: 1,
    title: "Edificio Residencial Centro",
    category: "Fachadas",
    location: "Barberà del Vallès",
    description: "Rehabilitación completa de fachada con aislamiento térmico SATE y acabados modernos.",
    image: "/modern-building-facade-renovation.jpg",
    beforeImage: "/old-building-facade-before-renovation.jpg",
    year: "2024",
  },
  {
    id: 2,
    title: "Vivienda Familiar Moderna",
    category: "Reformas",
    location: "Sabadell",
    description: "Reforma integral de vivienda de 120m² con redistribución de espacios y diseño contemporáneo.",
    image: "/modern-apartment-renovation.png",
    beforeImage: "/old-apartment-interior.png",
    year: "2024",
  },
  {
    id: 3,
    title: "Edificio de Viviendas Plurifamiliar",
    category: "Obra Nueva",
    location: "Cerdanyola del Vallès",
    description: "Construcción de edificio residencial de 8 viviendas con garaje y zonas comunes.",
    image: "/new-residential-building-construction.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "Restaurante Gastronómico",
    category: "Locales",
    location: "Barcelona",
    description: "Reforma completa de local comercial de 200m² para restaurante de alta cocina.",
    image: "/modern-restaurant-interior.png",
    beforeImage: "/empty-commercial-space-before-renovation.jpg",
    year: "2024",
  },
  {
    id: 5,
    title: "Comunidad Residencial Les Fonts",
    category: "Comunidades",
    location: "Terrassa",
    description: "Rehabilitación de portal, escaleras y pintura de zonas comunes en edificio de 24 viviendas.",
    image: "/renovated-building-entrance-hall.jpg",
    beforeImage: "/old-building-entrance-hall.jpg",
    year: "2023",
  },
  {
    id: 6,
    title: "Ático con Terraza",
    category: "Reformas",
    location: "Sant Cugat",
    description: "Reforma integral de ático de 150m² con ampliación de terraza y acabados de lujo.",
    image: "/luxury-penthouse-terrace-renovation.jpg",
    beforeImage: "/old-penthouse-before-renovation.jpg",
    year: "2023",
  },
]

export default function ProyectosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">Nuestros Proyectos</h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              Descubre algunos de los proyectos que hemos realizado con éxito para nuestros clientes
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-transparent"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                    Ver detalles
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No hay proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur z-50 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="container mx-auto px-4 py-20 lg:py-32">
            <div className="max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
              <Button variant="outline" onClick={() => setSelectedProject(null)} className="mb-6 bg-transparent">
                ← Volver a proyectos
              </Button>

              {projects
                .filter((p) => p.id === selectedProject)
                .map((project) => (
                  <div key={project.id}>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded">
                          {project.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">{project.title}</h2>
                      <p className="text-lg text-muted-foreground">{project.location}</p>
                    </div>

                    {project.beforeImage && (
                      <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6">Antes y Después</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-3">
                              <img
                                src={project.beforeImage || "/placeholder.svg"}
                                alt={`${project.title} - Antes`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center font-medium text-muted-foreground">Antes</p>
                          </div>
                          <div>
                            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-3">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={`${project.title} - Después`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-center font-medium text-accent">Después</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {!project.beforeImage && (
                      <div className="mb-12">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    <div className="prose prose-lg max-w-none mb-12">
                      <h3 className="text-2xl font-bold mb-4">Descripción del Proyecto</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <Card className="bg-accent text-accent-foreground">
                      <CardContent className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">¿Te gustaría un proyecto similar?</h3>
                        <p className="text-accent-foreground/90 mb-6">
                          Solicita un presupuesto personalizado sin compromiso
                        </p>
                        <Button asChild size="lg" variant="secondary">
                          <Link href="/contacto#presupuesto">
                            Solicitar Presupuesto
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance mb-6">
              ¿Listo para tu próximo proyecto?
            </h2>
            <p className="text-lg text-accent-foreground/90 text-pretty mb-8">
              Cuéntanos tu idea y te ayudaremos a hacerla realidad
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
