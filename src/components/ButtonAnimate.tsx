'use client';

import { motion } from 'framer-motion';

export default function ButtonAnimate({
  children,
  scaleTap = 1,
  scaleHover = 1.1,
}: {
  children: React.ReactNode;
  scaleTap?: number;
  scaleHover?: number;
}) {
  return (
    <motion.button
      whileHover={{ scale: scaleHover }}
      whileTap={{ scale: scaleTap }}
    >
      {children}
    </motion.button>
  );
}
