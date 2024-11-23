'use client';

import React from 'react';
import { Button } from '../ui/moving-border';
import { workServices } from '../data';
import { motion } from 'framer-motion';

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
      className="py-20 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-2xl font-serif text-emerald-500">.../Serviços em Destaque</span>
      </motion.h1>

      <motion.div
        className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center"
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
              <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 gap-4">
                <motion.img
                  src={card.thumbnail}
                  alt={card.title}
                  className="w-16"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-300 font-bold">{card.title}</h1>
                  <p className="text-gray-300 mt-2 sm:mt-3 font-semibold">{card.desc}</p>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
