import { ServiceLayout } from "@/components/service-layout"
import { Building2 } from "lucide-react"

export default function ObraNuevaPage() {
  return (
    <ServiceLayout
      title="Obra Nueva"
      description="Construcción de edificios residenciales y comerciales desde cero. Gestionamos todo el proceso constructivo con los más altos estándares de calidad, cumpliendo con toda la normativa vigente y utilizando materiales de primera calidad."
      icon={<Building2 className="h-8 w-8" />}
      features={[
        "Gestión integral del proyecto desde el diseño hasta la entrega",
        "Coordinación con arquitectos y técnicos especializados",
        "Construcción de estructuras con materiales certificados",
        "Instalaciones eléctricas, fontanería y climatización",
        "Acabados interiores y exteriores de alta calidad",
        "Cumplimiento de normativa técnica y urbanística",
        "Control de calidad en todas las fases",
        "Garantías sobre la construcción y materiales",
      ]}
      process={[
        {
          step: "Consulta Inicial",
          description: "Reunión para entender tus necesidades y objetivos del proyecto",
        },
        {
          step: "Proyecto y Licencias",
          description: "Desarrollo del proyecto técnico y tramitación de permisos",
        },
        {
          step: "Construcción",
          description: "Ejecución de la obra con seguimiento continuo y control de calidad",
        },
        {
          step: "Entrega",
          description: "Inspección final y entrega de llaves con toda la documentación",
        },
      ]}
      benefits={[
        "Experiencia en proyectos residenciales y comerciales",
        "Equipo técnico cualificado y certificado",
        "Materiales de primera calidad con garantía",
        "Cumplimiento de plazos establecidos",
        "Transparencia en costes y seguimiento",
        "Atención personalizada durante todo el proceso",
      ]}
    />
  )
}
