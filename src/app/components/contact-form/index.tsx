'use client'

import { HiArrowNarrowLeft } from "react-icons/hi"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

// Schema de validação do formulário
const ContactFormSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(100),
    email: z.string().email("Digite um e-mail válido"),
    message: z.string().min(1, "A mensagem não pode estar vazia").max(500, "A mensagem deve ter no máximo 500 caracteres"),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

const ContactForm = () => {
    const { handleSubmit, register, reset } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [responseMessage, setResponseMessage] = useState<string | null>(null)

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setResponseMessage(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setResponseMessage("Mensagem enviada com sucesso!")
                reset() // Limpa o formulário após o envio
            } else {
                const errorData = await response.json()
                setResponseMessage(errorData.error || "Erro ao enviar a mensagem. Tente novamente.")
            }
        } catch (error) {
            console.error("Erro ao enviar a mensagem:", error)
            setResponseMessage("Erro ao enviar a mensagem. Tente novamente.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center w-full">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-serif text-emerald-500 mb-4">.../Entre em Contato</h2>
                    <p className="text-lg text-gray-300 font-sans mb-6">
                        Tem dúvidas sobre como a <span className="font-semibold">AI2Agro</span> pode ajudar seu negócio agrícola? Entre em contato conosco e descubra como nossas soluções de visão computacional podem transformar sua operação, trazendo mais eficiência e rentabilidade.
                    </p>
                </div>

                <div className="w-full max-w-[480px] mx-auto">
                    <form
                        className="mt-12 w-full mx-auto flex flex-col gap-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            placeholder="Nome"
                            className="w-full h-14 bg-gray-900 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-emerald-500 focus:border-emerald-800 focus:ring-2 ring-emerald-800"
                            {...register('name')}
                        />
                        <input
                            placeholder="E-mail"
                            type="email"
                            className="w-full h-14 bg-gray-900 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-emerald-500 focus:border-emerald-800 focus:ring-2 ring-emerald-800"
                            {...register('email')}
                        />
                        <textarea
                            placeholder="Mensagem"
                            className="resize-none w-full h-[138px] bg-gray-900 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 border border-emerald-500 focus:border-emerald-800 focus:ring-2 ring-emerald-800"
                            maxLength={500}
                            {...register('message')}
                        />

                        <div className="w-max mx-auto mt-6">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-emerald-500 via-teal-900 to-emerald-700 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-900 transition-all duration-200"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                            </button>
                        </div>

                        {responseMessage && (
                            <p className="text-center mt-4 text-gray-300 max-w-[350px] mx-auto">
                                {responseMessage}
                            </p>
                        )}

                        <div onClick={scrollToTop} className="flex justify-center mt-6 cursor-pointer">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-sky-500/10 transition-all">
                                <HiArrowNarrowLeft
                                    size={32}
                                    className="text-emerald-500 rotate-90"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
