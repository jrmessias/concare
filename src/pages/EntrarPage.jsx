import { Link } from "react-router-dom"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Briefcase, Mail, Lock, Eye, EyeOff } from "lucide-react"

function LoginForm({ userType }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`email-${userType}`}>E-mail</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id={`email-${userType}`} type="email" placeholder="seu@email.com" className="pl-10" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`password-${userType}`}>Senha</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id={`password-${userType}`}
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha"
            className="pl-10 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground cursor-pointer"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <input id={`remember-${userType}`} type="checkbox" className="h-4 w-4 rounded border-gray-300" />
          <Label htmlFor={`remember-${userType}`} className="text-sm">
            Lembrar de mim
          </Label>
        </div>
        <Link to="/recuperar-senha" className="text-sm text-primary hover:underline">
          Esqueceu a senha?
        </Link>
      </div>

      <Button type="submit" className="w-full">
        Entrar
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </Button>
        <Button variant="outline" type="button">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>
    </form>
  )
}

function EntrarPage() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-2xl font-bold text-primary">CuidaCare</h1>
            </Link>
            <p className="text-muted-foreground mt-2">Acesse sua conta para continuar</p>
          </div>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Entrar</CardTitle>
              <CardDescription className="text-center">Escolha como você deseja acessar a plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cliente" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="cliente" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Cliente
                  </TabsTrigger>
                  <TabsTrigger value="profissional" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Profissional
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="cliente" className="mt-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold">Área do Cliente</h3>
                      <p className="text-sm text-muted-foreground">Encontre e contrate profissionais qualificados</p>
                    </div>
                    <LoginForm userType="cliente" />
                  </div>
                </TabsContent>

                <TabsContent value="profissional" className="mt-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold">Área do Profissional</h3>
                      <p className="text-sm text-muted-foreground">Gerencie seus serviços e encontre novos clientes</p>
                    </div>
                    <LoginForm userType="profissional" />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link to="/seja-um-cuidador" className="text-primary hover:underline font-medium">
                    Cadastre-se aqui
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <Link to="/termos" className="hover:underline">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link to="/privacidade" className="hover:underline">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default EntrarPage
