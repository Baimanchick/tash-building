'use client';

import { motion } from 'framer-motion';

import { CustomButton } from '@/components/Button';
import Dot from '@/public/assets/svgs/dot.svg';

const MotionButton = motion(CustomButton);

export default function AnimatedCustomButton({
  children,
  className = '',
  dot = false,
  scaleTap = 0.9,
  scaleHover = 1.1,
  type = 'default',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  scaleTap?: number;
  scaleHover?: number;
  type?: 'primary' | 'default';
}) {
  return (
    <MotionButton
      whileHover={{ scale: scaleHover }} // Example of an animation
      whileTap={{ scale: scaleTap }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={className}
      type={type}
      icon={dot && <Dot />} // Custom icon if needed
      {...props}
    >
      {children}
    </MotionButton>
  );
}
