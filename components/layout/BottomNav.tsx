'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, Bookmark, User } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', icon: Home, href: '/' },
  { label: 'Categories', icon: LayoutGrid, href: '/categories' },
  { label: 'Saved', icon: Bookmark, href: '/saved' },
  { label: 'Profile', icon: User, href: '/profile' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 z-50 lg:hidden">
      <div className="flex items-center justify-around h-16 px-2 pb-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 pt-1"
            >
              <div className="relative flex flex-col items-center">
                <Icon
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isActive ? 'text-emerald-600' : 'text-gray-400'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span
                  className={`text-[10px] mt-0.5 font-medium transition-colors duration-200 ${
                    isActive ? 'text-emerald-600' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </span>

                {/* Active Dot Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute -bottom-1.5 w-1 h-1 bg-emerald-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
