import { Card, CardContent } from "@/components/ui/card"
import { Search, Users, Heart } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "1. Busque o Cuidador",
    description: "Informe o tipo de cuidado que precisa e sua localização para encontrar cuidadores na sua região",
  },
  {
    icon: Users,
    title: "2. Conheça os Perfis",
    description: "Veja perfis detalhados, experiências, especializações e avaliações de outros familiares",
  },
  {
    icon: Heart,
    title: "3. Converse e Escolha",
    description: "Entre em contato, tire suas dúvidas e escolha o cuidador ideal para seu familiar",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Como Funciona</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontrar o cuidador perfeito para seu familiar nunca foi tão simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="text-center relative border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
