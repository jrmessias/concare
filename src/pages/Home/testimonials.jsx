import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mariana Oliveira",
    relation: "Filha de paciente",
    rating: 5,
    comment: "Encontramos a cuidadora perfeita para minha mãe. Ela é atenciosa, carinhosa e muito profissional. Nossa família finalmente tem paz de espírito.",
  },
  {
    name: "Roberto Almeida",
    relation: "Filho de paciente",
    rating: 5,
    comment: "Depois de meses procurando, achamos a CuidaCare. O processo foi simples e a cuidadora que contratamos superou todas as expectativas.",
  },
  {
    name: "Fernanda Santos",
    relation: "Neta de paciente",
    rating: 5,
    comment: "Minha avó adora a cuidadora! Ela tem paciência infinita e sempre está de bom humor. Recomendo muito a plataforma.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">O Que as Famílias Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de famílias que encontraram o cuidador ideal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg hover:shadow-accent/20 transition-shadow border-border">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-muted-foreground italic text-pretty">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
