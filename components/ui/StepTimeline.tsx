'use client';

import { motion, Variants } from 'framer-motion';

interface Step {
  step: number;
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Vertical Line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-emerald-200" />

      <div className="space-y-8">
        {steps.map((item) => (
          <motion.div
            key={item.step}
            variants={stepVariants}
            className="relative flex items-start gap-4"
          >
            {/* Numbered Circle */}
            <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-emerald-600 text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md shadow-emerald-500/20">
              {item.step}
            </div>

            {/* Content */}
            <div className="pt-1 pb-1">
              <h4 className="font-semibold text-gray-900 text-base">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
