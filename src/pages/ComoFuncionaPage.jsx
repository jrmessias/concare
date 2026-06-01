import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MessageCircle, Heart, Star, CheckCircle, Shield, Clock, Users } from "lucide-react"
import { Link } from "react-router-dom"

export default function ComoFuncionaPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            Como Funciona a ConCare
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            Conectamos famílias a cuidadores qualificados de forma simples, segura e humanizada.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16 bg-background">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center p-6 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Search className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">1. Busque o Cuidador</h3>
                                    <p className="text-muted-foreground">
                                        Informe o tipo de cuidado necessário e sua localização para encontrar cuidadores na sua região.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center p-6 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">2. Conheça os Perfis</h3>
                                    <p className="text-muted-foreground">
                                        Veja perfis completos, experiências, especializações e avaliações de outros familiares.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center p-6 border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Heart className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">3. Escolha com Confiança</h3>
                                    <p className="text-muted-foreground">
                                        Entre em contato, tire suas dúvidas e escolha o cuidador ideal para seu familiar.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-muted/30 dark:bg-muted/10 py-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Por que escolher a ConCare?</h2>
                            <p className="text-xl text-muted-foreground">Garantimos a melhor experiência para sua família</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Cuidadores Verificados</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Todos os cuidadores passam por verificação de identidade, referências e qualificações.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Star className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Avaliações Reais</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Sistema de avaliações transparente com comentários de famílias reais.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Cuidado Humanizado</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Cuidadores treinados para oferecer atenção e carinho ao seu familiar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Disponibilidade 24h</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Encontre cuidadores para plantões diurnos, noturnos ou acompanhamento integral.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Suporte Completo</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Nossa equipe está disponível para ajudar em todas as etapas do processo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Comunicação Direta</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Converse diretamente com os cuidadores antes de tomar sua decisão.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-background">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Pronto para encontrar o cuidador ideal?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Milhares de cuidadores qualificados esperando para ajudar sua família
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/encontrar-cuidador">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 cursor-pointer">
                                    Buscar Cuidadores
                                </Button>
                            </Link>
                            <Link to="/tipos-de-cuidado">
                                <Button variant="outline" size="lg" className="cursor-pointer">
                                    Tipos de Cuidado
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
