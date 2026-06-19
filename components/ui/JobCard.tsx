'use client';

import Link from 'next/link';
import { Building2, Calendar, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Job } from '@/data/mock-jobs';

interface JobCardProps {
  job: Job;
  index?: number;
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
    >
      <Link href={`/jobs/${job.slug}`}>
        <motion.div
          className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-4 cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* NEW Badge */}
          {job.isNew && (
            <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              NEW
            </span>
          )}

          {/* Top Row: Icon + Title */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mt-0.5 truncate">
                {job.department}
              </p>
            </div>
          </div>

          {/* Middle Row: Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-lg">
              {job.qualification}
            </span>
            <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-lg">
              <Users className="w-3 h-3" />
              {job.totalPosts.toLocaleString()} Posts
            </span>
            <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-lg">
              {job.salary}
            </span>
          </div>

          {/* Bottom Row: Last Date + Arrow */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-red-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">
                Last Date: {new Date(job.lastDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="bg-emerald-600 text-white rounded-xl px-4 py-2 flex items-center justify-center hover:bg-emerald-700 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
