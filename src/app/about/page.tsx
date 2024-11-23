'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <section className="mb-12 text-center">
        <motion.h1
          className="mb-4 text-4xl font-bold text-emerald-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nós
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A <span className="font-semibold">AI2Agro</span> é uma empresa líder
          em soluções de
          <span className="font-semibold"> Visão Computacional</span> voltadas
          para o<span className="font-semibold"> agronegócio</span>, trazendo
          inovações tecnológicas que transformam a forma como os produtores e
          empresas do setor agrícola gerenciam seus processos.
        </motion.p>

        <motion.img
          src="/images/sobre.jpg"
          alt="Sobre a empresa"
          className="mt-6 h-auto max-h-[600px] w-full rounded-lg border border-white/20 object-cover shadow-2xl shadow-emerald-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </section>

      <div className="space-y-16">
        {[
          {
            title: 'Nossa Missão',
            text: 'Na AI2Agro, nossa missão é empoderar o agronegócio com ferramentas inteligentes e precisas, que otimizem a gestão das operações no campo. Acreditamos que a visão computacional tem o poder de revolucionar as práticas agrícolas, oferecendo insights valiosos para a tomada de decisões mais rápidas e assertivas, além de promover práticas agrícolas mais sustentáveis.',
            image: '/images/missao.jpg',
          },
          {
            title: 'O que fazemos',
            text: 'Utilizando tecnologia de visão computacional e aprendizado de máquina, oferecemos soluções para monitoramento e análise visual em tempo real. Nosso portfólio inclui Monitoramento de Cultivos, Detecção de Anomalias, Controle de Qualidade e Automação Agrícola.',
            image: '/images/fazemos.jpg',
          },
          {
            title: 'Tecnologia de Ponta',
            text: 'Nossos sistemas são alimentados por algoritmos avançados de visão computacional, que combinam inteligência artificial com o poder do processamento em tempo real, trazendo soluções inovadoras para desafios específicos do campo.',
            image: '/images/tech.jpg',
          },
          {
            title: 'Impacto no Agronegócio',
            text: 'Com nossas soluções, buscamos não apenas aumentar a produtividade das culturas, mas também garantir um manejo mais sustentável, reduzindo o desperdício de recursos e maximizando os rendimentos.',
            image: '/images/impacto.jpeg',
          },
          {
            title: 'Nossa Visão',
            text: 'Queremos ser referência no desenvolvimento de soluções tecnológicas que integrem a agricultura inteligente ao conceito de sustentabilidade, utilizando a visão computacional como um catalisador de transformação digital no campo.',
            image: '/images/visao.jpg',
          },
          {
            title: 'Nossa Equipe',
            text: 'Somos um time multidisciplinar, composto por especialistas em engenharia de software, inteligência artificial, agronomia e tecnologia.',
            image: '/images/equipe.jpg',
          },
        ].map(({ title, text, image }, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-6 rounded-lg border border-white/20 bg-gray-950/90 p-6 shadow-2xl shadow-emerald-500 backdrop-blur-lg md:flex-row md:p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.img
              src={image}
              alt={title}
              className="h-auto w-full rounded-lg object-cover md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="flex-1">
              <motion.h2
                className="mb-4 text-3xl font-semibold text-emerald-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-lg leading-relaxed text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
