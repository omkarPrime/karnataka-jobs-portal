'use client';

import { useState, useRef } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch?: (value: string) => void;
  onFilterClick?: () => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  onFilterClick,
  placeholder = 'Search KEA, KPSC, Police...',
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <motion.div
      className="w-full"
      animate={{
        scale: isFocused ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div
        className={`
          relative flex items-center w-full h-14 rounded-2xl bg-white
          shadow-lg shadow-emerald-500/10 border transition-all duration-200
          ${
            isFocused
              ? 'border-emerald-500 ring-2 ring-emerald-500/20'
              : 'border-gray-200'
          }
        `}
      >
        {/* Search Icon */}
        <div className="absolute left-4 flex items-center pointer-events-none">
          <Search
            className={`w-5 h-5 transition-colors duration-200 ${
              isFocused ? 'text-emerald-600' : 'text-gray-400'
            }`}
          />
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full h-full pl-12 pr-14 bg-transparent text-gray-900 text-base placeholder:text-gray-400 focus:outline-none rounded-2xl"
        />

        {/* Filter Button */}
        <button
          onClick={onFilterClick}
          className="absolute right-2 flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-500 hover:text-emerald-600 transition-colors"
          aria-label="Open filters"
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
