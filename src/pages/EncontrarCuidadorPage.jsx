"use client"

import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {WhatsAppButton} from "@/components/whatsapp-button"
import {Card, CardContent} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Badge} from "@/components/ui/badge"
import {CheckCircle, Clock, Heart, MapPin, MessageCircle, Search, Shield, Star} from "lucide-react"
import {AdBanner} from "@/components/ad-banner"
import {useState} from "react"

const caregivers = [
    {
        id: 1,
        name: "Ana Paula Silva",
        specialty: "Cuidadora de Idosos",
        rating: 4.9,
        reviews: 127,
        location: "São Paulo, SP",
        avatar: "/caregiver-woman-smiling-1.jpg",
        responseTime: "Responde em 2h",
        completedJobs: 245,
        verified: true,
        price: "R$ 150/dia",
        specialties: ["Cuidado de Idosos", "Alzheimer", "Medicação"],
        description: "Cuidadora experiente com mais de 8 anos de experiência. Especializada em cuidados com idosos e pacientes com Alzheimer.",
        experience: "8 anos",
    },
    {
        id: 2,
        name: "Maria Fernanda Costa",
        specialty: "Técnica em Enfermagem",
        rating: 4.8,
        reviews: 89,
        location: "Rio de Janeiro, RJ",
        avatar: "/caregiver-woman-smiling-2.jpg",
        responseTime: "Responde em 1h",
        completedJobs: 156,
        verified: true,
        price: "R$ 180/dia",
        specialties: ["Cuidado Hospitalar", "Pós-operatório", "Curativos"],
        description: "Técnica em enfermagem com especialização em cuidados pós-operatórios e acompanhamento hospitalar.",
        experience: "6 anos",
    },
    {
        id: 3,
        name: "Joana Santos",
        specialty: "Cuidadora Noturna",
        rating: 4.7,
        reviews: 156,
        location: "Belo Horizonte, MG",
        avatar: "/caregiver-woman-smiling-3.jpg",
        responseTime: "Responde em 3h",
        completedJobs: 203,
        verified: true,
        price: "R$ 200/noite",
        specialties: ["Plantão Noturno", "Acamados", "Monitoramento"],
        description: "Especialista em plantões noturnos com experiência em cuidados de pacientes acamados.",
        experience: "5 anos",
    },
    {
        id: 4,
        name: "Lucia Oliveira",
        specialty: "Cuidadora de Acamados",
        rating: 4.9,
        reviews: 203,
        location: "Porto Alegre, RS",
        avatar: "/caregiver-woman-smiling-4.jpg",
        responseTime: "Responde em 1h",
        completedJobs: 189,
        verified: true,
        price: "R$ 170/dia",
        specialties: ["Acamados", "Higiene", "Mobilização"],
        description: "Cuidadora certificada com experiência em pacientes acamados, banho no leito e mobilização.",
        experience: "7 anos",
    },
    {
        id: 5,
        name: "Teresa Almeida",
        specialty: "Especialista em Demência",
        rating: 4.8,
        reviews: 74,
        location: "Curitiba, PR",
        avatar: "/caregiver-woman-smiling-5.jpg",
        responseTime: "Responde em 2h",
        completedJobs: 98,
        verified: true,
        price: "R$ 190/dia",
        specialties: ["Alzheimer", "Demência", "Estimulação Cognitiva"],
        description: "Formação em gerontologia com foco em cuidados de pacientes com Alzheimer e outras demências.",
        experience: "10 anos",
    },
    {
        id: 6,
        name: "Carmen Rodrigues",
        specialty: "Companhia para Idosos",
        rating: 4.6,
        reviews: 112,
        location: "Salvador, BA",
        avatar: "/caregiver-woman-smiling-6.jpg",
        responseTime: "Responde em 2h",
        completedJobs: 167,
        verified: true,
        price: "R$ 120/dia",
        specialties: ["Companhia", "Passeios", "Atividades"],
        description: "Acompanhante para idosos ativos. Companhia para passeios, consultas e atividades recreativas.",
        experience: "4 anos",
    },
]

const specialtyFilters = ["Todos", "Cuidado de Idosos", "Cuidado Noturno", "Cuidado Hospitalar", "Alzheimer", "Acamados", "Companhia"]

export default function CuidadoresPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedSpecialty, setSelectedSpecialty] = useState("Todos")
    const [filteredCaregivers, setFilteredCaregivers] = useState(caregivers)

    const handleSearch = () => {
        let filtered = caregivers

        if (searchTerm) {
            filtered = filtered.filter(
                (caregiver) =>
                    caregiver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    caregiver.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    caregiver.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase())),
            )
        }

        if (selectedSpecialty !== "Todos") {
            filtered = filtered.filter((caregiver) =>
                caregiver.specialties.some((s) => s.toLowerCase().includes(selectedSpecialty.toLowerCase()))
            )
        }

        setFilteredCaregivers(filtered)
    }

    return <div className="min-h-screen bg-background">
        <Header/>
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Encontre seu Cuidador</h1>
                    <p className="text-xl text-muted-foreground">Cuidadores qualificados e verificados em todo o
                        Brasil</p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <div
                        className="flex items-center gap-2 text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
                        <Shield className="w-4 h-4 text-secondary"/>
                        <span className="text-sm">Cuidadores Verificados</span>
                    </div>
                    <div
                        className="flex items-center gap-2 text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
                        <Heart className="w-4 h-4 text-secondary"/>
                        <span className="text-sm">Atendimento Humanizado</span>
                    </div>
                    <div
                        className="flex items-center gap-2 text-muted-foreground bg-card px-4 py-2 rounded-full border border-border">
                        <Clock className="w-4 h-4 text-secondary"/>
                        <span className="text-sm">Disponível 24h</span>
                    </div>
                </div>

                {/* Search */}
                <div className="bg-card p-6 rounded-xl border border-border mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5"/>
                            <Input
                                placeholder="Buscar cuidadores por nome ou especialidade..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 border-accent/20 border-2 focus:right-0"
                            />
                        </div>
                        <Button onClick={handleSearch} className="lg:w-auto bg-primary hover:bg-primary/90">
                            <Search className="w-4 h-4 mr-2"/>
                            Buscar
                        </Button>
                    </div>

                    {/* Specialty Filters */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {specialtyFilters.map((specialty) => (
                            <Button
                                key={specialty}
                                variant={selectedSpecialty === specialty ? "default" : "outline"}
                                size="sm"
                                onClick={() => {
                                    setSelectedSpecialty(specialty)
                                    handleSearch()
                                }}
                                className="rounded-full"
                            >
                                {specialty}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Caregivers Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCaregivers.map((caregiver) => (
                        <Card key={caregiver.id} className="bg-card hover:shadow-lg hover:shadow-accent/20 transition-shadow border-border">
                            <CardContent className="p-6 space-y-4">
                                {/* Profile Header */}
                                <div className="flex items-start space-x-4">
                                    <div className="relative">
                                        <div
                                            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Heart className="w-8 h-8 text-primary"/>
                                        </div>
                                        {caregiver.verified && (
                                            <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1">
                                                <CheckCircle className="w-4 h-4 text-secondary-foreground"/>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg text-foreground truncate">{caregiver.name}</h3>
                                        <p className="text-muted-foreground text-sm">{caregiver.specialty}</p>
                                        <div className="flex items-center space-x-1 mt-1">
                                            <Star className="w-4 h-4 fill-secondary text-secondary"/>
                                            <span className="text-sm font-medium">{caregiver.rating}</span>
                                            <span
                                                className="text-sm text-muted-foreground">({caregiver.reviews} avaliações)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Specialties */}
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-1">
                                        {caregiver.specialties.map((specialty, index) => (
                                            <Badge key={index} variant="outline"
                                                   className="text-xs border-primary/30 text-primary">
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-muted-foreground text-pretty line-clamp-2">{caregiver.description}</p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="w-4 h-4 mr-1"/>
                                        <span className="truncate">{caregiver.location}</span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Clock className="w-4 h-4 mr-1"/>
                                        <span className="truncate">{caregiver.experience} exp.</span>
                                    </div>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    <span
                                        className="font-medium text-secondary">{caregiver.completedJobs}</span> famílias
                                    atendidas
                                </div>

                                {/* Price and Actions */}
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <span className="font-semibold text-lg text-foreground">{caregiver.price}</span>
                                    <div className="flex space-x-2">
                                        <Button variant="outline" size="sm" className="border-accent/30 cursor-pointer">
                                            <MessageCircle className="w-4 h-4 mr-1"/>
                                            Contato
                                        </Button>
                                        <Button size="sm" className="bg-accent hover:bg-accent/90 cursor-pointer">Ver Perfil</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredCaregivers.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-muted-foreground">Nenhum cuidador encontrado com os critérios de
                            busca.</p>
                    </div>
                )}

                <AdBanner columns={4}/>
            </div>
        </main>

        <Footer/>
        <WhatsAppButton/>
    </div>
}
