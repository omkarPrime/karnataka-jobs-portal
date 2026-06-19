'use client';

import { motion, Variants } from 'framer-motion';
import {
  Briefcase,
  Bell,
  TrendingUp,
  Award,
  ArrowRight,
  Calendar,
} from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import FilterPills from '@/components/ui/FilterPills';
import JobCard from '@/components/ui/JobCard';
import { mockJobs, filterPills } from '@/data/mock-jobs';
import Link from 'next/link';

// ─── Animation Variants ──────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Scholarships (from rich mock data) ──────────────────────────────────────

const scholarships = mockJobs.filter((j) => j.category === 'scholarships');

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ──── A) Top Header Bar ──── */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40">
        <div className="h-14 px-4 flex items-center justify-between max-w-lg mx-auto">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-emerald-700 tracking-tight">
              SarkariKarnataka
            </span>
          </div>

          {/* Right: Notifications + Avatar */}
          <div className="flex items-center gap-3">
            <button
              className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {/* Red dot indicator */}
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold text-sm shadow-md shadow-emerald-500/25">
              S
            </div>
          </div>
        </div>
      </header>

      {/* ──── B) Hero Section ──── */}
      <motion.section
        className="px-4 pt-6 pb-4 max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUpVariants}>
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Find Your Government
            <br />
            <span className="text-emerald-600">Career in Karnataka</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Browse 10,000+ latest jobs &amp; scholarships
          </p>
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-4">
          <SearchBar />
        </motion.div>

        <motion.div variants={fadeUpVariants} className="mt-4">
          <FilterPills filterPills={filterPills} />
        </motion.div>
      </motion.section>

      {/* ──── C) Trending Jobs Section ──── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          variants={fadeUpVariants}
          className="flex justify-between items-center px-4 mt-8 mb-4 max-w-lg mx-auto"
        >
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-gray-900">Trending Jobs</h2>
          </div>
          <Link
            href="/jobs"
            className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            View All
          </Link>
        </motion.div>

        <div className="px-4 space-y-4 max-w-lg mx-auto">
          {mockJobs.slice(0, 6).map((job, index) => (
            <JobCard key={job.slug} job={job} index={index} />
          ))}
        </div>
      </motion.section>

      {/* ──── D) Scholarships Quick Section ──── */}
      {scholarships.length > 0 && (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-10"
        >
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-between items-center px-4 mb-4 max-w-lg mx-auto"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-gray-900">
                Latest Scholarships
              </h2>
            </div>
            <Link
              href="/scholarships"
              className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              View All
            </Link>
          </motion.div>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-4 pb-2 max-w-lg mx-auto">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={scholarship.slug}
                  variants={fadeUpVariants}
                  custom={index}
                >
                  <Link href={`/jobs/${scholarship.slug}`}>
                    <div className="min-w-[280px] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow cursor-pointer">
                      <h3 className="font-semibold text-gray-900 text-base leading-tight line-clamp-2">
                        {scholarship.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {scholarship.department}
                      </p>

                      <div className="mt-3">
                        <span className="text-emerald-700 font-bold text-sm">
                          {scholarship.salary}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs">
                            Last:{' '}
                            {new Date(scholarship.lastDate).toLocaleDateString(
                              'en-IN',
                              {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }
                            )}
                          </span>
                        </div>
                        <div className="w-8 h-8 bg-emerald-600 rounded-xl flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ──── E) Bottom Spacer ──── */}
      <div className="h-8" />
    </>
  );
}
