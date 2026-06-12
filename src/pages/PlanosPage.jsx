import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Sparkles, TrendingUp, Search, Award, ArrowUp } from "lucide-react"

const planoMensal = {
    nome: "Plano ConCare",
    preco: "XX,XX",
    periodo: "mês",
    descricao: "Assinatura mensal para cuidadores que desejam maximizar sua visibilidade e atrair mais famílias.",
    destaque: true,
    beneficios: [
        "Perfil com fotos e depoimentos",
        "Avaliação e feedback das famílias",
        "Suporte prioritário 24h para assinantes",
    ],
}

const planoOnDemand = {
    nome: "Plano Flex",
    preco: "XX,XX",
    periodo: "serviço",
    descricao: "Pagamento por serviço realizado. Ideal para cuidadores que querem divulgação sob demanda.",
    destaque: false,
    beneficios: [
        "Pagamento apenas por serviço realizado",
        "Sem fidelidade ou vínculo mensal",
        "Avaliação e feedback das famílias",
    ],
}

const planoStar = {
    nome: "Plano Star",
    preco: "XX,00",
    periodo: "mês",
    descricao: "Apareça por primeiro. Ganhe destaque nas buscas e tenha mais visibilidade.",
    destaque: false,
    beneficios: [
        "Pagamento mensal",
        "Somente para quem está ativo em algum plano",
        "Avaliação e feedback das famílias",
    ],
}

const assinantes = [
    {
        nome: "Ana Paula",
        especialidade: "Cuidadora de Idosos",
        avaliacao: 5.0,
        destaque: true,
    },
    {
        nome: "Maria José",
        especialidade: "Técnica em Enfermagem",
        avaliacao: 4.9,
        destaque: true,
    },
    {
        nome: "Lúcia Ferreira",
        especialidade: "Cuidadora Noturna",
        avaliacao: 5.0,
        destaque: true,
    },
    {
        nome: "Carlos Mendes",
        especialidade: "Cuidador de Idosos",
        avaliacao: 4.8,
        destaque: false,
    },
]

export default function PlanosPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            Nossos Planos
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            Escolha o plano ideal para divulgar seu trabalho e ser encontrado por famílias de toda região
                        </p>
                    </div>
                </section>

                <section className="py-16 bg-background">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className={`relative border-2 overflow-visible ${planoMensal.destaque ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}`}>
                                {planoMensal.destaque && (
                                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm">
                                        <Sparkles className="w-4 h-4 mr-1" />
                                        Mais Popular
                                    </Badge>
                                )}
                                <CardHeader className="text-center pt-8">
                                    <CardTitle className="text-2xl font-bold">{planoMensal.nome}</CardTitle>
                                    <CardDescription className="text-base">{planoMensal.descricao}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-foreground">R$ {planoMensal.preco}</span>
                                        <span className="text-muted-foreground text-md ml-1">/{planoMensal.periodo}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {planoMensal.beneficios.map((beneficio, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-muted-foreground">{beneficio}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                                        Assinar Agora
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="border-border border-2">
                                <CardHeader className="text-center pt-8">
                                    <CardTitle className="text-2xl font-bold">{planoOnDemand.nome}</CardTitle>
                                    <CardDescription className="text-base">{planoOnDemand.descricao}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-foreground">R$ {planoOnDemand.preco}</span>
                                        <span className="text-muted-foreground text-md ml-2">/{planoOnDemand.periodo}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {planoOnDemand.beneficios.map((beneficio, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-4 h-4 text-secondary" />
                                                </div>
                                                <span className="text-muted-foreground">{beneficio}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full border-accent/20" size="lg">
                                        Contratar Agora
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="border-border border-2">
                                <CardHeader className="text-center pt-8">
                                    <CardTitle className="text-2xl font-bold">{planoStar.nome}</CardTitle>
                                    <CardDescription className="text-base">{planoStar.descricao}</CardDescription>
                                    <div className="mt-4">
                                        <span className="text-4xl font-bold text-foreground">R$ {planoStar.preco}</span>
                                        <span className="text-muted-foreground text-md ml-1">/{planoStar.periodo}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <ul className="space-y-3">
                                        {planoStar.beneficios.map((beneficio, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <Check className="w-4 h-4 text-secondary" />
                                                </div>
                                                <span className="text-muted-foreground">{beneficio}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button variant="outline" className="w-full border-accent/20" size="lg">
                                        Contratar Agora
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-muted/30 dark:bg-muted/10 py-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-foreground mb-4">Assinantes em Destaque</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                 Cuidadores que assinam nossos planos ganham nome em destaque e aparecem primeiro nos resultados de pesquisa, ordenados pela avaliação
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <Card className="border-primary/30 bg-primary/5">
                                <CardContent className="p-3 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Nome em Destaque</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Seu nome aparece com um selo especial de destaque, chamando a atenção das famílias
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-secondary/30 bg-secondary/5">
                                <CardContent className="p-3 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Search className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">Primeiro nas Buscas</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Aparece antes dos demais cuidadores nas pesquisas, garantindo mais visibilidade e contratações
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                            Cuidadores em Destaque
                        </h3>

                        <div className="space-y-4">
                            {assinantes.map((assinante, index) => (
                                <Card
                                    key={index}
                                    className={`border-2 ${assinante.destaque ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent' : 'border-border'}`}
                                >
                                    <CardContent className="py-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {assinante.destaque && (
                                                <div className="relative">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                        <span className="text-primary font-bold text-lg">
                                                            {assinante.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                                        </span>
                                                    </div>
                                                    <div className="absolute -top-1 -right-1">
                                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                                    </div>
                                                </div>
                                            )}
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-foreground">{assinante.nome}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">{assinante.especialidade}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            <span className="font-semibold text-foreground">{assinante.avaliacao.toFixed(1)}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <p className="text-muted-foreground mb-4">
                                Assine um plano e tenha seu nome em destaque nas buscas
                            </p>
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <ArrowUp className="w-5 h-5 mr-2" />
                                Quero Destaque
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
