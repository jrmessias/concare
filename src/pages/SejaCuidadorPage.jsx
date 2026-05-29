import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { TrendingUp, Users, Calendar, CreditCard, Star, Heart, Shield, Clock } from "lucide-react"

export default function SejaCuidadorPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                            Seja um Cuidador CuidaCare
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 text-pretty">
                            Conecte-se com famílias que precisam do seu cuidado. Trabalhe com flexibilidade e receba de forma justa.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                Cadastre-se Grátis
                            </Button>
                            <Button variant="outline" size="lg">
                                Saiba Mais
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-16 bg-background">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Vantagens de ser um Cuidador CuidaCare</h2>
                            <p className="text-xl text-muted-foreground">Tudo que você precisa para fazer a diferença na vida de idosos</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="text-center border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Mais Famílias</h3>
                                    <p className="text-muted-foreground text-sm">
                                        Acesso a milhares de famílias procurando cuidadores em todo Brasil
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Flexibilidade</h3>
                                    <p className="text-muted-foreground text-sm">Escolha seus horários e trabalhe quando for melhor para você</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CreditCard className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Pagamento Justo</h3>
                                    <p className="text-muted-foreground text-sm">Defina seus próprios valores e receba de forma segura</p>
                                </CardContent>
                            </Card>

                            <Card className="text-center border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Construa Reputação</h3>
                                    <p className="text-muted-foreground text-sm">Sistema de avaliações para destacar a qualidade do seu trabalho</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Registration Form */}
                <section className="bg-muted/30 dark:bg-muted/10 py-16">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Card className="border-border bg-card">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Cadastre-se Agora</CardTitle>
                                <p className="text-muted-foreground text-center">
                                    Preencha os dados abaixo e comece a cuidar de quem precisa
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome">Nome Completo</Label>
                                        <Input id="nome" placeholder="Seu nome completo" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">E-mail</Label>
                                        <Input id="email" type="email" placeholder="seu@email.com" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                                        <Input id="telefone" placeholder="(11) 99999-9999" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cidade">Cidade</Label>
                                        <Input id="cidade" placeholder="Sua cidade" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="especialidade">Especialidade Principal</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione sua especialidade" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="idosos">Cuidado de Idosos</SelectItem>
                                            <SelectItem value="noturno">Cuidado Noturno</SelectItem>
                                            <SelectItem value="hospitalar">Cuidado Hospitalar</SelectItem>
                                            <SelectItem value="acamados">Cuidado de Acamados</SelectItem>
                                            <SelectItem value="alzheimer">Alzheimer e Demência</SelectItem>
                                            <SelectItem value="companhia">Companhia e Atividades</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="experiencia">Experiência Profissional</Label>
                                    <Textarea
                                        id="experiencia"
                                        placeholder="Conte um pouco sobre sua experiência cuidando de idosos, cursos realizados, certificações..."
                                        rows={4}
                                    />
                                </div>

                                <div className="flex items-start space-x-2">
                                    <Checkbox id="termos" />
                                    <Label htmlFor="termos" className="text-sm leading-relaxed">
                                        Aceito os <span className="text-primary underline cursor-pointer">termos de uso</span> e
                                        <span className="text-primary underline cursor-pointer"> política de privacidade</span>
                                    </Label>
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                                    Criar Minha Conta de Cuidador
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-16 bg-background">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Histórias de Sucesso</h2>
                            <p className="text-xl text-muted-foreground">
                                Veja como outros cuidadores encontraram famílias que precisam deles
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                            <Heart className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Ana Paula</h4>
                                            <p className="text-sm text-muted-foreground">Cuidadora de Idosos</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        &quot;Em 3 meses consegui uma agenda cheia de famílias maravilhosas. A plataforma me ajudou a encontrar trabalho digno.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                                            <Shield className="w-6 h-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Maria José</h4>
                                            <p className="text-sm text-muted-foreground">Técnica em Enfermagem</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        &quot;Finalmente posso escolher meus horários e trabalhar perto de casa. A CuidaCare mudou minha vida profissional.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <span className="ml-2 text-sm text-muted-foreground">4.9</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-border bg-card">
                                <CardContent className="pt-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Lucia Ferreira</h4>
                                            <p className="text-sm text-muted-foreground">Cuidadora Noturna</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        &quot;Consegui aumentar minha renda fazendo o que amo. As famílias são muito carinhosas e agradecem meu trabalho.&quot;
                                    </p>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <Star className="w-4 h-4 text-secondary fill-current" />
                                        <span className="ml-2 text-sm text-muted-foreground">5.0</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
