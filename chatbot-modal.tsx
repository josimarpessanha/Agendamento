'use client'

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  role: 'bot' | 'user';
  content: string;
}

type FormData = {
  name: string;
  phone: string;
  date: string;
  location: string;
  need: string;
  time: string;
}

export function ChatbotModal() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Olá! Bem-vindo ao Projeto Mais Visão. Vamos agendar sua consulta? Por favor, digite seu nome completo.' }
  ])
  const [input, setInput] = useState('')
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    date: '',
    location: '',
    need: '',
    time: '',
  })

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      processUserInput(input)
      setInput('')
    }
  }

  const processUserInput = (userInput: string) => {
    switch (step) {
      case 0:
        setFormData({ ...formData, name: userInput })
        setMessages(prev => [...prev, { role: 'bot', content: `Obrigado, ${userInput}. Agora, por favor, digite seu número de telefone.` }])
        setStep(1)
        break
      case 1:
        setFormData({ ...formData, phone: userInput })
        setMessages(prev => [...prev, { role: 'bot', content: 'Ótimo. Qual data você prefere para a consulta? (formato: DD/MM/AAAA)' }])
        setStep(2)
        break
      case 2:
        setFormData({ ...formData, date: userInput })
        setMessages(prev => [...prev, { role: 'bot', content: 'Em qual cidade você gostaria de fazer o exame? (Vitória, Vila Velha, Serra ou Cariacica)' }])
        setStep(3)
        break
      case 3:
        setFormData({ ...formData, location: userInput })
        setMessages(prev => [...prev, { role: 'bot', content: 'Qual é a sua maior necessidade no momento? (Exame de Rotina, Revisão de grau, Tratamento de catarata, Tratamento de Glaucoma, ou Não sei informar)' }])
        setStep(4)
        break
      case 4:
        setFormData({ ...formData, need: userInput })
        setMessages(prev => [...prev, { role: 'bot', content: 'Qual horário você prefere? (Manhã: 08:00 - 12:00 ou Tarde: 13:00 - 17:00)' }])
        setStep(5)
        break
      case 5:
        setFormData({ ...formData, time: userInput })
        const finalMessage = `Ótimo! Resumo do seu agendamento:
Nome: ${formData.name}
Telefone: ${formData.phone}
Data: ${formData.date}
Local: ${formData.location}
Necessidade: ${formData.need}
Horário: ${userInput}

Está tudo correto? Digite SIM para confirmar ou NÃO para recomeçar.`
        setMessages(prev => [...prev, { role: 'bot', content: finalMessage }])
        setStep(6)
        break
      case 6:
        if (userInput.toLowerCase() === 'sim') {
          sendToWhatsApp()
        } else {
          resetForm()
        }
        break
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      location: '',
      need: '',
      time: '',
    })
    setMessages([{ role: 'bot', content: 'Vamos recomeçar. Por favor, digite seu nome completo.' }])
    setStep(0)
  }

  const sendToWhatsApp = () => {
    const message = `Nome: ${formData.name}%0A
Telefone: ${formData.phone}%0A
Data: ${formData.date}%0A
Local: ${formData.location}%0A
Necessidade: ${formData.need}%0A
Horário: ${formData.time}`

    window.open(`https://wa.me/5527998264728?text=${message}`, '_blank')
    setMessages(prev => [...prev, { role: 'bot', content: 'Obrigado! Seus dados foram enviados para o WhatsApp. Em breve entraremos em contato para confirmar seu agendamento.' }])
    setStep(0)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
          Agendar Consulta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Agende sua Consulta</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[50vh] w-full pr-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.role === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSend} className="mt-4">
          <div className="flex items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua resposta..."
              className="flex-grow"
            />
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

