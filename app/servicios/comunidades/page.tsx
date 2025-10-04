import { ServiceLayout } from "@/components/service-layout"
import { Users } from "lucide-react"

export default function ComunidadesPage() {
  return (
    <ServiceLayout
      title="Comunidades de Vecinos"
      description="Mantenimiento y rehabilitación de zonas comunes y elementos estructurales. Trabajamos con comunidades de propietarios ofreciendo soluciones integrales para conservar y mejorar los edificios residenciales."
      icon={<Users className="h-8 w-8" />}
      features={[
        "Rehabilitación de fachadas y cubiertas",
        "Reparación de elementos comunes",
        "Impermeabilización de terrazas y azoteas",
        "Renovación de portales y escaleras",
        "Instalación de ascensores y accesibilidad",
        "Mejora de instalaciones comunes",
        "Pintura de zonas comunes",
        "Mantenimiento preventivo y correctivo",
      ]}
      process={[
        {
          step: "Reunión con la Comunidad",
          description: "Presentación y análisis de necesidades con administrador",
        },
        {
          step: "Estudio Técnico",
          description: "Evaluación del edificio y propuesta de actuaciones",
        },
        {
          step: "Aprobación y Planificación",
          description: "Presentación en junta y planificación de trabajos",
        },
        {
          step: "Ejecución Coordinada",
          description: "Obras con mínimas molestias para los vecinos",
        },
      ]}
      benefits={[
        "Experiencia con comunidades de propietarios",
        "Facilidades de pago y financiación",
        "Coordinación con administradores de fincas",
        "Comunicación transparente con vecinos",
        "Trabajos adaptados a horarios convenientes",
        "Documentación completa para la comunidad",
      ]}
    />
  )
}
