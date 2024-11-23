'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { z } from 'zod';

// Schema de validação do formulário
const ContactFormSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres').max(100),
  email: z.string().email('Digite um e-mail válido'),
  message: z
    .string()
    .min(1, 'A mensagem não pode estar vazia')
    .max(500, 'A mensagem deve ter no máximo 500 caracteres'),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const { handleSubmit, register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage('Mensagem enviada com sucesso!');
        reset(); // Limpa o formulário após o envio
      } else {
        const errorData = await response.json();
        setResponseMessage(
          errorData.error || 'Erro ao enviar a mensagem. Tente novamente.',
        );
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      setResponseMessage('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="contact"
      className="flex w-full items-center justify-center px-6 py-16 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-serif text-2xl text-emerald-500">
            .../Entre em Contato
          </h2>
          <p className="mb-6 font-sans text-lg text-gray-300">
            Tem dúvidas sobre como a{' '}
            <span className="font-semibold">AI2Agro</span> pode ajudar seu
            negócio agrícola? Entre em contato conosco e descubra como nossas
            soluções de visão computacional podem transformar sua operação,
            trazendo mais eficiência e rentabilidade.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[480px]">
          <form
            className="mx-auto mt-12 flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Nome"
              className="h-14 w-full rounded-lg border border-emerald-500 bg-gray-900 p-4 text-gray-50 ring-emerald-800 placeholder:text-gray-400 focus:border-emerald-800 focus:ring-2"
              {...register('name')}
            />
            <input
              placeholder="E-mail"
              type="email"
              className="h-14 w-full rounded-lg border border-emerald-500 bg-gray-900 p-4 text-gray-50 ring-emerald-800 placeholder:text-gray-400 focus:border-emerald-800 focus:ring-2"
              {...register('email')}
            />
            <textarea
              placeholder="Mensagem"
              className="h-[138px] w-full resize-none rounded-lg border border-emerald-500 bg-gray-900 p-4 text-gray-50 ring-emerald-800 placeholder:text-gray-400 focus:border-emerald-800 focus:ring-2"
              maxLength={500}
              {...register('message')}
            />

            <div className="mx-auto mt-6 w-max">
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-emerald-500 via-teal-900 to-emerald-700 px-6 py-2 text-white transition-all duration-200 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-900"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>

            {responseMessage && (
              <p className="mx-auto mt-4 max-w-[350px] text-center text-gray-300">
                {responseMessage}
              </p>
            )}

            <div
              onClick={scrollToTop}
              className="mt-6 flex cursor-pointer justify-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-sky-500/10">
                <HiArrowNarrowLeft
                  size={32}
                  className="rotate-90 text-emerald-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
