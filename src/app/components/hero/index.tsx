"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <main>
            <section className="mx-auto flex h-screen w-full flex-col-reverse items-center justify-center bg-black px-8 gap-8 md:flex-row md:justify-between md:gap-20">
                
                <div className="text-center md:max-w-lg md:text-left">
                    <motion.h1
                        className="font-bold text-4xl text-gray-300 sm:text-5xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-emerald-500">Inteligência Artificial</span> Revolucionando o Agronegócio
                    </motion.h1>
                    
                    <motion.p
                        className="mt-4 text-lg text-gray-400"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Exploramos o poder da inteligência artificial para criar soluções inovadoras, otimizando a produtividade e promovendo práticas agrícolas mais sustentáveis.
                    </motion.p>
                </div>

                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Image
                        className="w-full max-w-[800px] h-auto object-cover border border-x-transparent shadow-2xl shadow-emerald-500"
                        src="/images/agroia.jpg"
                        alt="hero image"
                        width={800}
                        height={500}
                    />
                </motion.div>
            </section>
        </main>
    );
};