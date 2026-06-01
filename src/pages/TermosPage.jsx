import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermosPage() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-4rem)] bg-background p-4 py-10">
        <div className="mx-auto w-full max-w-3xl">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-3xl">Termos de Uso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Esta pagina placeholder registra os termos de uso da plataforma ConCare.</p>
              <p>O conteudo definitivo podera detalhar condicoes de acesso, responsabilidades e regras de utilizacao da plataforma.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
