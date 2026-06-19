'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  FileCheck,
  Building2,
  Shield,
  Train,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import type { FilterPill } from '@/data/mock-jobs';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BookOpen,
  Award,
  FileCheck,
  Building2,
  Shield,
  Train,
  Heart,
};

interface FilterPillsProps {
  filterPills: FilterPill[];
  onFilterChange?: (filterValue: string) => void;
  defaultActive?: string;
}

export default function FilterPills({
  filterPills,
  onFilterChange,
  defaultActive = 'all',
}: FilterPillsProps) {
  const [activeFilter, setActiveFilter] = useState(defaultActive);

  const handleClick = (value: string) => {
    setActiveFilter(value);
    onFilterChange?.(value);
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 px-1 py-1">
        {filterPills.map((pill) => {
          const Icon = pill.icon ? iconMap[pill.icon] : undefined;
          const isActive = activeFilter === pill.value;

          return (
            <button
              key={pill.value}
              onClick={() => handleClick(pill.value)}
              className="relative flex-shrink-0"
            >
              {/* Active pill background with layoutId for smooth transition */}
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-emerald-600 rounded-full shadow-md shadow-emerald-500/25"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              <span
                className={`
                  relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium
                  transition-colors duration-200 whitespace-nowrap
                  ${
                    isActive
                      ? 'text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-emerald-300'
                  }
                `}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {pill.label}
                {pill.count !== undefined && (
                  <span
                    className={`text-xs ${
                      isActive ? 'text-emerald-100' : 'text-gray-400'
                    }`}
                  >
                    {pill.count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
