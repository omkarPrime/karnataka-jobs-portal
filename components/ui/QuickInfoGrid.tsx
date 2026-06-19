'use client';

import { Users, IndianRupee, Calendar, CreditCard } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface QuickInfoGridProps {
  vacancies: number;
  salary: string;
  lastDate: string;
  applicationFee: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function QuickInfoGrid({
  vacancies,
  salary,
  lastDate,
  applicationFee,
}: QuickInfoGridProps) {
  const cells = [
    {
      label: 'Vacancies',
      value: vacancies.toLocaleString(),
      icon: Users,
      bg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      valueColor: 'text-blue-700',
    },
    {
      label: 'Salary',
      value: salary,
      icon: IndianRupee,
      bg: 'bg-green-50',
      iconColor: 'text-green-600',
      valueColor: 'text-green-700',
    },
    {
      label: 'Last Date',
      value: lastDate,
      icon: Calendar,
      bg: 'bg-red-50',
      iconColor: 'text-red-600',
      valueColor: 'text-red-700',
    },
    {
      label: 'Application Fee',
      value: applicationFee,
      icon: CreditCard,
      bg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      valueColor: 'text-amber-700',
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cells.map((cell) => {
        const Icon = cell.icon;
        return (
          <motion.div
            key={cell.label}
            variants={itemVariants}
            className={`${cell.bg} rounded-2xl p-4`}
          >
            <Icon className={`w-5 h-5 ${cell.iconColor} mb-2`} />
            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
              {cell.label}
            </p>
            <p className={`text-lg font-bold ${cell.valueColor} mt-0.5 leading-tight`}>
              {cell.value}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
