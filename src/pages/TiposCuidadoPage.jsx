import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {WhatsAppButton} from "@/components/whatsapp-button"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Activity, ArrowRight, Brain, Heart, Moon, Stethoscope, Users} from "lucide-react"
import {Link} from "react-router-dom"

const careTypes = [
    {
        name: "Cuidado de Idosos",
        icon: Heart,
        count: "450+ cuidadores",
        description: "Acompanhamento e assistência nas atividades do dia a dia, garantindo conforto e bem-estar para o idoso.",
        details: [
            "Auxílio na higiene pessoal",
            "Acompanhamento em refeições",
            "Administração de medicamentos",
            "Companhia e conversas",
            "Atividades de lazer"
        ],
        slug: "idosos"
    },
    {
        name: "Cuidado Noturno",
        icon: Moon,
        count: "280+ cuidadores",
        description: "Supervisão e cuidados durante a noite, garantindo segurança e tranquilidade para toda a família.",
        details: [
            "Monitoramento durante o sono",
            "Auxílio para ir ao banheiro",
            "Administração de medicação noturna",
            "Atendimento em emergências",
            "Troca de posição para acamados"
        ],
        slug: "noturno"
    },
    {
        name: "Cuidado Hospitalar",
        icon: Stethoscope,
        count: "320+ cuidadores",
        description: "Acompanhamento profissional em internações hospitalares e durante o período pós-operatório.",
        details: [
            "Acompanhamento em internações",
            "Cuidados pós-operatórios",
            "Comunicação com equipe médica",
            "Auxílio na alimentação",
            "Suporte emocional"
        ],
        slug: "hospitalar"
    },
    {
        name: "Cuidado de Acamados",
        icon: Activity,
        count: "180+ cuidadores",
        description: "Assistência especializada para pacientes com mobilidade reduzida ou totalmente acamados.",
        details: [
            "Banho no leito",
            "Prevenção de escaras",
            "Mobilização e mudança de posição",
            "Troca de fraldas",
            "Fisioterapia passiva"
        ],
        slug: "acamados"
    },
    {
        name: "Alzheimer e Demência",
        icon: Brain,
        count: "150+ cuidadores",
        description: "Cuidadores especializados em doenças neurológicas, com paciência e técnicas adequadas.",
        details: [
            "Estimulação cognitiva",
            "Orientação temporal e espacial",
            "Prevenção de quedas",
            "Rotina estruturada",
            "Comunicação terapêutica"
        ],
        slug: "alzheimer"
    },
    {
        name: "Companhia",
        icon: Users,
        count: "350+ cuidadores",
        description: "Acompanhamento social e atividades recreativas para idosos que precisam de companhia.",
        details: [
            "Passeios e caminhadas",
            "Jogos e atividades",
            "Acompanhamento em consultas",
            "Compras e atividades externas",
            "Leitura e conversas"
        ],
        slug: "companhia"
    },
]

export default function TiposDeCuidadoPage() {
    return <>
        <div className="min-h-screen bg-background">
            <Header/>
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            Tipos de Cuidado
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            Encontre o tipo de cuidado ideal para as necessidades do seu familiar.
                            Nossa plataforma oferece cuidadores especializados em diversas áreas.
                        </p>
                    </div>
                </section>

                {/* Care Types Grid */}
                <section className="py-16 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {careTypes.map((careType) => {
                                const IconComponent = careType.icon
                                return (
                                    <Card key={careType.name}
                                          className="border-border bg-card hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                                    <IconComponent className="w-7 h-7 text-primary"/>
                                                </div>
                                                <div className="flex-1">
                                                    <h2 className="font-semibold text-foreground text-xl mb-1">{careType.name}</h2>
                                                    <p className="text-sm font-medium text-primary">{careType.count}</p>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground text-pretty">{careType.description}</p>

                                            <ul className="space-y-2">
                                                {careType.details.map((detail, index) => (
                                                    <li key={index}
                                                        className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <div
                                                            className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"/>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link to={`/encontrar-cuidador?tipo=${careType.slug}`}
                                                  className="w-full mt-4 block">
                                                <Button
                                                    className="w-full bg-primary hover:bg-primary/90 cursor-pointer transition-colors duration-300 text-sm font-medium flex items-center justify-center">
                                                    Encontrar Cuidadores
                                                    <ArrowRight className="w-4 ml-2"/>
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-primary/5 dark:bg-primary/10 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Não encontrou o que procura?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Entre em contato conosco e ajudaremos a encontrar o cuidador perfeito para sua necessidade
                            específica.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/encontrar-cuidador">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">
                                    Ver Todos os Cuidadores
                                </Button>
                            </Link>
                            <Link to="/como-funciona">
                                <Button variant="outline" size="lg"
                                        className="border-primary hover:bg-primary/10 cursor-pointer">
                                    Como Funciona
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
            <WhatsAppButton/>
        </div>
    </>
}
