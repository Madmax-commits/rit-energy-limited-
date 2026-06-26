"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FadeCard({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}