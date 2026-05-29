import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Moon,
  Activity,
  Brain,
  Users,
  Stethoscope,
} from "lucide-react"

const careTypes = [
  { 
    name: "Cuidado de Idosos", 
    icon: Heart, 
    count: "450+ cuidadores",
    description: "Acompanhamento e assistência no dia a dia"
  },
  { 
    name: "Cuidado Noturno", 
    icon: Moon, 
    count: "280+ cuidadores",
    description: "Supervisão e cuidados durante a noite"
  },
  { 
    name: "Cuidado Hospitalar", 
    icon: Stethoscope, 
    count: "320+ cuidadores",
    description: "Acompanhamento em internações e pós-operatório"
  },
  { 
    name: "Cuidado de Acamados", 
    icon: Activity, 
    count: "180+ cuidadores",
    description: "Assistência especializada para pacientes acamados"
  },
  { 
    name: "Alzheimer e Demência", 
    icon: Brain, 
    count: "150+ cuidadores",
    description: "Cuidadores especializados em doenças neurológicas"
  },
  { 
    name: "Companhia", 
    icon: Users, 
    count: "350+ cuidadores",
    description: "Acompanhamento social e atividades recreativas"
  },
]

export function CareTypes() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Tipos de Cuidado</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre o cuidador especializado para cada necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careTypes.map((careType) => {
            const IconComponent = careType.icon
            return (
              // <Link key={careType.name} to={`/encontrar-cuidador?tipo=${encodeURIComponent(careType.name.toLowerCase())}`}>
              <Link key={careType.name} to={`/tipos-de-cuidado`}>
                <Card className="hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group h-full border-border hover:border-accent/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 text-lg">{careType.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{careType.description}</p>
                        <p className="text-sm font-medium text-primary">{careType.count}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
