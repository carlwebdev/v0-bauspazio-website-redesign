import { ServiceLayout } from "@/components/service-layout"
import { Paintbrush } from "lucide-react"

export default function FachadasPage() {
  return (
    <ServiceLayout
      title="Rehabilitación de Fachadas"
      description="Restauración y modernización de fachadas con técnicas avanzadas. Mejoramos la estética, eficiencia energética y durabilidad de tu edificio, utilizando materiales de última generación y cumpliendo con toda la normativa."
      icon={<Paintbrush className="h-8 w-8" />}
      features={[
        "Inspección técnica del estado de la fachada",
        "Reparación de grietas y patologías",
        "Impermeabilización y tratamiento de humedades",
        "Aislamiento térmico por el exterior (SATE)",
        "Revestimientos y acabados modernos",
        "Pintura con productos de alta durabilidad",
        "Renovación de balcones y elementos decorativos",
        "Cumplimiento del CTE y normativa energética",
      ]}
      process={[
        {
          step: "Inspección Técnica",
          description: "Evaluación del estado actual y detección de patologías",
        },
        {
          step: "Proyecto de Rehabilitación",
          description: "Diseño de la solución técnica y estética más adecuada",
        },
        {
          step: "Ejecución de Obras",
          description: "Trabajos con andamios certificados y medidas de seguridad",
        },
        {
          step: "Control de Calidad",
          description: "Verificación de acabados y entrega con garantías",
        },
      ]}
      benefits={[
        "Mejora del valor del inmueble",
        "Ahorro energético significativo",
        "Eliminación de humedades y filtraciones",
        "Renovación estética del edificio",
        "Cumplimiento normativo actualizado",
        "Garantías sobre materiales y ejecución",
      ]}
    />
  )
}
