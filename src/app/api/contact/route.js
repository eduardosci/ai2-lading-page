import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Todos os campos são obrigatórios.' }), { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'eduardo.madp@gmail.com',
      subject: 'Nova mensagem de contato',
      html: `
        <h1>Nova mensagem de contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Mensagem enviada com sucesso!' }), { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return new Response(JSON.stringify({ error: 'Erro ao enviar a mensagem.' }), { status: 500 });
  }
}
