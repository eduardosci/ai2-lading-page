'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { workServices } from '../data';
import { Button } from '../ui/moving-border';

export const Services = () => {
  // Variantes para animações com Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay entre os filhos
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="services"
      className="w-full py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-serif text-2xl text-emerald-500">
          .../Serviços em Destaque
        </span>
      </motion.h1>

      <motion.div
        className="mt-12 grid w-full grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {workServices.map((card, index) => (
          <motion.div
            key={card.id}
            className="w-full max-w-[300px]"
            variants={cardVariants}
            transition={{
              duration: 0.8,
              delay: index * 0.2, // Animação sequencial
            }}
          >
            <Button
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              style={{
                background: 'rgb(0,0,0)',
                borderRadius: `calc(1.75rem * 0.96)`,
                width: '100%',
                height: '300px',
              }}
              className="flex-1 text-white"
            >
              <div className="flex flex-col items-center gap-4 p-4 sm:p-6 md:p-8">
                <motion.img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-16"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center">
                  <h1 className="text-lg font-bold text-gray-300 sm:text-xl md:text-2xl">
                    {card.title}
                  </h1>
                  <p className="mt-2 font-semibold text-gray-300 sm:mt-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
