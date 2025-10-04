"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send, Building2 } from "lucide-react"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te contactaremos pronto.")
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-6">Contacta con Nosotros</h1>
            <p className="text-lg lg:text-xl text-muted-foreground text-pretty">
              Estamos aquí para ayudarte con tu proyecto. Cuéntanos qué necesitas y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Teléfono</h3>
                <a href="tel:+34123456789" className="text-muted-foreground hover:text-accent transition-colors">
                  +34 123 456 789
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href="mailto:info@bauspazio.com"
                  className="text-muted-foreground hover:text-accent transition-colors break-all"
                >
                  info@bauspazio.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-muted-foreground">Barberà del Vallès, Barcelona</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Horario</h3>
                <p className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8 lg:p-12">
                <div id="presupuesto" className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-3">Solicita tu Presupuesto</h2>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo *</Label>
                      <Input
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="+34 123 456 789"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servicio">Servicio de interés</Label>
                    <select
                      id="servicio"
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="obra-nueva">Obra Nueva</option>
                      <option value="reformas">Reformas Integrales</option>
                      <option value="fachadas">Rehabilitación de Fachadas</option>
                      <option value="comunidades">Comunidades de Vecinos</option>
                      <option value="locales">Reformas de Locales</option>
                      <option value="pequenas-reformas">Pequeñas Reformas</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Cuéntanos sobre tu proyecto *</Label>
                    <Textarea
                      id="mensaje"
                      required
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Describe tu proyecto, ubicación, plazos, etc."
                      rows={6}
                    />
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <p>* Campos obligatorios</p>
                    <p className="mt-2">
                      Al enviar este formulario, aceptas nuestra{" "}
                      <Link href="/privacidad" className="text-accent hover:underline">
                        política de privacidad
                      </Link>
                      .
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8 text-center">Nuestra Ubicación</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47616.89134576489!2d2.0847!3d41.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496f5b1c5c5c5%3A0x1234567890abcdef!2sBarber%C3%A0%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890123!5m2!1ses!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
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
