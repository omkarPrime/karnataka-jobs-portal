'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TelegramBannerProps {
  telegramLink?: string;
}

export default function TelegramBanner({
  telegramLink = 'https://t.me/KarnatakaJobsPortal',
}: TelegramBannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-40 lg:bottom-6">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-3 bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-gray-100 p-4 w-64"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900 text-sm">
                Telegram Alerts
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Get instant job alerts on Telegram. Never miss a new notification!
            </p>

            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md shadow-blue-500/25"
            >
              Join Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Telegram alerts"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          {isExpanded ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
