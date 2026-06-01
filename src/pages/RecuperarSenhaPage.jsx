import { Link } from "react-router-dom"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RecuperarSenhaPage() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-border">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-2xl">Recuperar senha</CardTitle>
              <CardDescription>Informe seu e-mail para receber as instruções de redefinição.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recovery-email">E-mail</Label>
                  <Input id="recovery-email" type="email" placeholder="seu@email.com" required />
                </div>
                <Button type="submit" className="w-full">
                  Enviar instruções
                </Button>
              </form>
              <div className="text-center text-sm text-muted-foreground">
                <Link to="/entrar" className="text-primary hover:underline font-medium">
                  Voltar para entrar
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
