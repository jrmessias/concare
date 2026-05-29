import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-foreground">CuidaCare</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Início
            </Link>
            <Link to="/tipos-de-cuidado" className="text-muted-foreground hover:text-foreground transition-colors">
              Tipos de Cuidado
            </Link>
            <Link to="/encontrar-cuidador" className="text-muted-foreground hover:text-foreground transition-colors">
              Encontrar Cuidador
            </Link>
            <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/seja-um-cuidador">
              <Button variant="ghost" size="sm" className="cursor-pointer">Seja um Cuidador</Button>
            </Link>
            <Link to="/entrar">
              <Button variant="outline" size="sm" className="border-accent/20 cursor-pointer">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
            </Link>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/tipos-de-cuidado" className="text-muted-foreground hover:text-foreground transition-colors">
                Tipos de Cuidado
              </Link>
              <Link to="/encontrar-cuidador" className="text-muted-foreground hover:text-foreground transition-colors">
                Encontrar Cuidador
              </Link>
              <Link to="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>
                <Link to="/seja-um-cuidador">
                  <Button variant="ghost" size="sm" className="justify-start w-full">Seja um Cuidador</Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="justify-start w-full bg-transparent">
                    <User className="w-4 h-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
