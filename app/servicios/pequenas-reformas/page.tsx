import { ServiceLayout } from "@/components/service-layout"
import { Wrench } from "lucide-react"

export default function PequenasReformasPage() {
  return (
    <ServiceLayout
      title="Pequeñas Reformas"
      description="Trabajos de mantenimiento, reparación y mejoras puntuales con la misma calidad profesional. Atendemos todo tipo de necesidades de reforma, por pequeñas que sean, con rapidez y eficiencia."
      icon={<Wrench className="h-8 w-8" />}
      features={[
        "Pintura de habitaciones o vivienda completa",
        "Cambio de suelos y alicatados",
        "Reforma de baños y cocinas",
        "Reparación de humedades",
        "Instalación de carpintería",
        "Trabajos de albañilería",
        "Reparaciones eléctricas y fontanería",
        "Mantenimiento general del hogar",
      ]}
      process={[
        {
          step: "Contacto Rápido",
          description: "Nos cuentas qué necesitas por teléfono o email",
        },
        {
          step: "Presupuesto Ágil",
          description: "Valoración rápida y presupuesto sin compromiso",
        },
        {
          step: "Ejecución Inmediata",
          description: "Realizamos el trabajo en el menor tiempo posible",
        },
        {
          step: "Satisfacción Garantizada",
          description: "Revisión final y garantía sobre el trabajo realizado",
        },
      ]}
      benefits={[
        "Atención rápida y personalizada",
        "Sin mínimos de presupuesto",
        "Profesionales cualificados",
        "Precios transparentes y competitivos",
        "Flexibilidad horaria",
        "Misma calidad que en grandes proyectos",
      ]}
    />
  )
}
