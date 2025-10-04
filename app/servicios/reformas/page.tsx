import { ServiceLayout } from "@/components/service-layout"
import { Home } from "lucide-react"

export default function ReformasPage() {
  return (
    <ServiceLayout
      title="Reformas Integrales"
      description="Transformación completa de viviendas y locales adaptados a tus necesidades. Renovamos espacios para mejorar su funcionalidad, estética y eficiencia energética, creando ambientes modernos y confortables."
      icon={<Home className="h-8 w-8" />}
      features={[
        "Redistribución de espacios y derribos",
        "Renovación completa de instalaciones",
        "Cambio de suelos, paredes y techos",
        "Reforma de cocinas y baños",
        "Carpintería interior y exterior",
        "Pintura y acabados decorativos",
        "Mejora de aislamiento térmico y acústico",
        "Adaptación a normativa actual",
      ]}
      process={[
        {
          step: "Visita y Medición",
          description: "Evaluamos el espacio y escuchamos tus ideas y necesidades",
        },
        {
          step: "Diseño y Presupuesto",
          description: "Creamos un proyecto detallado con presupuesto cerrado",
        },
        {
          step: "Ejecución",
          description: "Realizamos la reforma con mínimas molestias y máxima eficiencia",
        },
        {
          step: "Acabados Finales",
          description: "Detalles finales y limpieza para entrega impecable",
        },
      ]}
      benefits={[
        "Diseño personalizado según tu estilo",
        "Presupuesto cerrado sin sorpresas",
        "Coordinación de todos los gremios",
        "Limpieza diaria de la obra",
        "Respeto por los plazos acordados",
        "Garantía en todos los trabajos realizados",
      ]}
    />
  )
}
