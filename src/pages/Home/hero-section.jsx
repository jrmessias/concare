import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Heart, Shield, Clock } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")

  return (
    <section className="bg-linear-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Encontre o <span className="text-primary">cuidador ideal</span> para quem você ama
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Conectamos famílias a cuidadores de idosos qualificados e verificados em todo o Brasil. 
                Cuidado humanizado com segurança e confiança.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg shadow-accent/20 border border-border">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Que tipo de cuidado você precisa?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-lg border-accent/20 border-2 focus:right-0"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Em qual cidade?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 h-12 text-lg border-accent/20 border-2"
                  />
                </div>
                <Button size="lg" className="w-full h-12 text-lg bg-primary hover:bg-primary/90">
                  <Search className="w-5 h-5 mr-2" />
                  Buscar Cuidadores
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-secondary" />
                <span className="text-sm">Cuidadores Verificados</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-sm">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-sm">Disponível 24h</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-lg shadow-accent/20">
              <img
                src="/caregiver-elderly-care.jpg"
                alt="Cuidadora atenciosa cuidando de idoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg shadow-accent/20 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1.500+</div>
                <div className="text-sm text-muted-foreground">Cuidadores</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-lg shadow-secondary/20 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">4.9</div>
                <div className="text-sm text-muted-foreground">Avaliação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
