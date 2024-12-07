'use client'

import { useState, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function ScheduleModal() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    need: '',
    time: '',
    purchaseInterest: '',
    additionalInfo: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = `Nome: ${formData.name}%0A
Telefone: ${formData.phone}%0A
Data: ${formData.date}%0A
Local: ${formData.location}%0A
Necessidade: ${formData.need}%0A
Horário: ${formData.time}%0A
Interesse em compra: ${formData.purchaseInterest}%0A
Informações adicionais: ${formData.additionalInfo}`

    window.open(`https://wa.me/5527998264728?text=${message}`, '_blank')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
          Agendar Consulta
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl font-semibold">Agendar Consulta Gratuita</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Preencha os dados abaixo para agendar seu exame gratuito.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium">Nome Completo:</Label>
            <Input 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo" 
              required
              className="w-full px-3 py-2 text-sm"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-medium">Telefone:</Label>
            <Input 
              id="phone" 
              name="phone"
              type="tel" 
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000" 
              required
              className="w-full px-3 py-2 text-sm"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-sm font-medium">Data do Agendamento:</Label>
            <Input 
              id="date" 
              name="date"
              type="date" 
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-sm"
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Local escolhido:</Label>
            <Select name="location" onValueChange={(value) => handleChange({ target: { name: 'location', value } } as any)} required>
              <SelectTrigger className="w-full px-3 py-2 text-sm">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vitoria">Vitória</SelectItem>
                <SelectItem value="vila-velha">Vila Velha</SelectItem>
                <SelectItem value="serra">Serra</SelectItem>
                <SelectItem value="cariacica">Cariacica</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Qual é a sua maior necessidade no momento?</Label>
            <Select name="need" onValueChange={(value) => handleChange({ target: { name: 'need', value } } as any)} required>
              <SelectTrigger className="w-full px-3 py-2 text-sm">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rotina">Exame de Rotina</SelectItem>
                <SelectItem value="revisao">Revisão de grau</SelectItem>
                <SelectItem value="catarata">Tratamento de catarata</SelectItem>
                <SelectItem value="glaucoma">Tratamento de Glaucoma</SelectItem>
                <SelectItem value="nao-sei">Não sei informar</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Horários Disponíveis:</Label>
            <Select name="time" onValueChange={(value) => handleChange({ target: { name: 'time', value } } as any)} required>
              <SelectTrigger className="w-full px-3 py-2 text-sm">
                <SelectValue placeholder="Selecione um horário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manha">08:00 - 12:00</SelectItem>
                <SelectItem value="tarde">13:00 - 17:00</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm font-medium">Interesse em compra de óculos ou lentes, se necessário:</Label>
            <Select name="purchaseInterest" onValueChange={(value) => handleChange({ target: { name: 'purchaseInterest', value } } as any)} required>
              <SelectTrigger className="w-full px-3 py-2 text-sm">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Sim, tenho interesse</SelectItem>
                <SelectItem value="nao">Não tenho interesse no momento</SelectItem>
                <SelectItem value="talvez">Talvez, depende da necessidade</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="additionalInfo" className="text-sm font-medium">Informações adicionais:</Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Alguma informação adicional que gostaria de compartilhar?"
              className="w-full px-3 py-2 text-sm"
            />
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white mt-4">
            Agendar Consulta
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

