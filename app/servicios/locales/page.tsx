import { ServiceLayout } from "@/components/service-layout"
import { Hammer } from "lucide-react"

export default function LocalesPage() {
  return (
    <ServiceLayout
      title="Reformas de Locales"
      description="Adaptación y renovación de espacios comerciales para maximizar su potencial. Transformamos locales comerciales en espacios funcionales y atractivos que impulsan tu negocio."
      icon={<Hammer className="h-8 w-8" />}
      features={[
        "Diseño de espacios comerciales funcionales",
        "Redistribución según necesidades del negocio",
        "Instalaciones adaptadas a la actividad",
        "Escaparates y fachadas comerciales",
        "Iluminación profesional y decorativa",
        "Climatización y ventilación",
        "Acabados resistentes y de fácil mantenimiento",
        "Cumplimiento de normativa de actividades",
      ]}
      process={[
        {
          step: "Análisis del Negocio",
          description: "Entendemos tu actividad y requisitos específicos",
        },
        {
          step: "Diseño Funcional",
          description: "Creamos un espacio optimizado para tu negocio",
        },
        {
          step: "Reforma Express",
          description: "Ejecución rápida para minimizar cierre del negocio",
        },
        {
          step: "Apertura",
          description: "Entrega lista para iniciar actividad comercial",
        },
      ]}
      benefits={[
        "Especialización en locales comerciales",
        "Plazos de ejecución reducidos",
        "Diseño orientado a rentabilidad",
        "Asesoramiento en licencias de actividad",
        "Trabajos en horarios flexibles",
        "Relación calidad-precio competitiva",
      ]}
    />
  )
}
