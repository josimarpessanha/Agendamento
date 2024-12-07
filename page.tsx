import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Calendar, Search, Microscope, Layout } from 'lucide-react'
import Image from "next/image"
import { ChatbotModal } from "./chatbot-modal"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image
            src="/placeholder.svg?height=50&width=150&text=Projeto+Mais+Visão"
            alt="Projeto Mais Visão"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Sobre</Button>
            <Button variant="ghost">Exames</Button>
            <Button variant="ghost">Contato</Button>
            <ChatbotModal />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-red-900 text-white">
        <Image
          src="/placeholder.svg?height=600&width=1600&text=Exame+de+Vista"
          alt="Exame de Vista"
          width={1600}
          height={600}
          className="object-cover w-full h-[600px]"
        />
        <div className="absolute inset-0 bg-red-900 bg-opacity-70 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Projeto Mais Visão: Cuidando da Saúde Ocular do Brasil
            </h1>
            <p className="text-xl mb-8">
              Exames gratuitos e de alta qualidade para todos. Agende sua consulta hoje!
            </p>
            <ChatbotModal />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-red-800">
            Nossos Exames Gratuitos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Search className="w-8 h-8 text-red-600" />}
              title="Acuidade Visual"
              description="Avaliamos sua capacidade de enxergar detalhes a diferentes distâncias, essencial para detectar problemas de visão."
            />
            <ServiceCard
              icon={<Eye className="w-8 h-8 text-red-600" />}
              title="Teste Ortóptico"
              description="Examinamos a coordenação entre os olhos e identificamos problemas de alinhamento, como estrabismo."
            />
            <ServiceCard
              icon={<Calendar className="w-8 h-8 text-red-600" />}
              title="Refração"
              description="Determinamos a prescrição ideal de óculos ou lentes de contato, identificando miopia, hipermetropia, astigmatismo ou presbiopia."
            />
            <ServiceCard
              icon={<Microscope className="w-8 h-8 text-red-600" />}
              title="Fundo de Olho"
              description="Visualizamos a parte interna do olho, incluindo retina, nervo óptico e vasos sanguíneos, essencial para detectar diversas doenças oculares."
            />
            <ServiceCard
              icon={<Layout className="w-8 h-8 text-red-600" />}
              title="Campo Visual Computadorizado"
              description="Analisamos sua visão periférica, fundamental para identificar condições como glaucoma e problemas no nervo óptico."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Equipe+Médica"
                alt="Equipe Projeto Mais Visão"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-red-800">Sobre o Projeto Mais Visão</h2>
              <p className="text-gray-600 mb-4">
                Fundado em 2024, o Projeto Mais Visão nasceu com a missão de democratizar o acesso a exames oftalmológicos de qualidade em todo o Brasil. Nossa iniciativa oferece exames gratuitos, realizados por profissionais altamente qualificados, em diversas cidades do país.
              </p>
              <p className="text-gray-600 mb-4">
                Acreditamos que a prevenção e o diagnóstico precoce são fundamentais para a saúde ocular. Por isso, trabalhamos incansavelmente para levar atendimento especializado a quem mais precisa, contribuindo para a melhoria da qualidade de vida de milhares de brasileiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Cuide da sua saúde ocular hoje mesmo!</h2>
          <p className="text-xl mb-8">
            Agende seu exame gratuito e dê o primeiro passo para uma visão melhor.
          </p>
          <ChatbotModal />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="/placeholder.svg?height=50&width=150&text=Projeto+Mais+Visão"
                alt="Projeto Mais Visão"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-400">Facebook</a>
              <a href="#" className="hover:text-red-400">Instagram</a>
              <a href="#" className="hover:text-red-400">Twitter</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © 2024 Projeto Mais Visão. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-transform hover:scale-105">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

