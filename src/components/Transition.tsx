'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Transition({
  children,
  duration = 0.75,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ ease: 'easeInOut', duration }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}
