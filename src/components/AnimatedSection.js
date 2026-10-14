import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({ children, delay = 0, direction = 'up', className = '', style = {} }) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  const variants = {
    up:    { hidden: { opacity: 0, y: 50 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };

  const chosen = variants[direction] || variants.up;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={chosen}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
