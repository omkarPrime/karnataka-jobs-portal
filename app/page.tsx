'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Bell,
  TrendingUp,
  Award,
  ArrowRight,
  Calendar,
  MapPin,
  Info,
} from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import FilterPills from '@/components/ui/FilterPills';
import JobCard from '@/components/ui/JobCard';
import {
  jobFilterPills,
  scholarshipFilterPills,
  filterJobs,
  filterScholarships,
} from '@/data/mock-jobs';
import Link from 'next/link';

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const tabContentVariants: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.2 } },
};

// ─── Section Tab Types ────────────────────────────────────────────────────────

type ActiveTab = 'jobs' | 'scholarships';

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [jobCategory, setJobCategory] = useState('all');
  const [scholarshipCategory, setScholarshipCategory] = useState('all');

  // ── Memoised filtered results ─────────────────────────────────────────────

  const jobResult = useMemo(
    () => filterJobs(searchQuery, jobCategory),
    [searchQuery, jobCategory]
  );

  const scholarshipResults = useMemo(
    () => filterScholarships(searchQuery, scholarshipCategory),
    [searchQuery, scholarshipCategory]
  );

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleTabSwitch = useCallback((tab: ActiveTab) => {
    setActiveTab(tab);
    // Reset search & category when switching tabs so the new feed is clean
    setSearchQuery('');
    setJobCategory('all');
    setScholarshipCategory('all');
  }, []);

  // ── Derived ──────────────────────────────────────────────────────────────

  const displayedJobs = jobResult.jobs;
  const fallbackMessage = jobResult.fallbackMessage;
  const displayedScholarships = scholarshipResults;

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

        {/* Search Bar – shared across both tabs */}
        <motion.div variants={fadeUpVariants} className="mt-4">
          <SearchBar
            onSearch={handleSearch}
            placeholder={
              activeTab === 'jobs'
                ? 'Search jobs, e.g. "Gokak jobs", "KPSC"…'
                : 'Search scholarships, e.g. "SC/ST scholarship"…'
            }
          />
        </motion.div>

        {/* ── Jobs / Scholarships Tab Switcher ── */}
        <motion.div variants={fadeUpVariants} className="mt-5">
          <div
            className="relative flex bg-gray-100 rounded-2xl p-1 gap-1"
            role="tablist"
            aria-label="Content sections"
          >
            {/* Sliding pill background */}
            {(['jobs', 'scholarships'] as ActiveTab[]).map((tab) => (
              <button
                key={tab}
                id={`tab-${tab}`}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`tabpanel-${tab}`}
                onClick={() => handleTabSwitch(tab)}
                className="relative flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 z-10"
                style={{
                  color: activeTab === tab ? '#ffffff' : '#6b7280',
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-xl shadow-md shadow-emerald-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab === 'jobs' ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <Award className="w-4 h-4" />
                  )}
                  {tab === 'jobs' ? 'Jobs' : 'Scholarships'}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ──── C) Tab Content ──── */}
      <AnimatePresence mode="wait">
        {activeTab === 'jobs' ? (
          <motion.div
            key="jobs-panel"
            id="tabpanel-jobs"
            role="tabpanel"
            aria-labelledby="tab-jobs"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Filter pills for Jobs */}
            <div className="px-4 max-w-lg mx-auto mt-3 mb-5">
              <FilterPills
                filterPills={jobFilterPills}
                defaultActive="all"
                onFilterChange={setJobCategory}
              />
            </div>

            {/* Fallback / location message banner */}
            {fallbackMessage && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-4 mb-4 max-w-lg mx-auto"
              >
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3">
                  <MapPin className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-800 leading-snug">
                    {fallbackMessage}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Jobs section heading */}
            <div className="flex justify-between items-center px-4 mb-4 max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-gray-900">
                  {searchQuery
                    ? `Results (${displayedJobs.length})`
                    : 'Trending Jobs'}
                </h2>
              </div>
              <Link
                href="/jobs"
                className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Jobs list */}
            <div className="px-4 space-y-4 max-w-lg mx-auto pb-8">
              {displayedJobs.length > 0 ? (
                displayedJobs.map((job, index) => (
                  <JobCard key={job.slug} job={job} index={index} />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <Info className="w-7 h-7 text-gray-400" />
                  </div>
                  <p className="text-gray-700 font-semibold text-base">
                    No jobs found
                  </p>
                  <p className="text-gray-400 text-sm mt-1 max-w-xs">
                    Try a different keyword or clear your search to browse all
                    Karnataka government jobs.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="scholarships-panel"
            id="tabpanel-scholarships"
            role="tabpanel"
            aria-labelledby="tab-scholarships"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Filter pills for Scholarships */}
            <div className="px-4 max-w-lg mx-auto mt-3 mb-5">
              <FilterPills
                filterPills={scholarshipFilterPills}
                defaultActive="all"
                onFilterChange={setScholarshipCategory}
              />
            </div>

            {/* Scholarships section heading */}
            <div className="flex justify-between items-center px-4 mb-4 max-w-lg mx-auto">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-gray-900">
                  {searchQuery
                    ? `Results (${displayedScholarships.length})`
                    : 'Latest Scholarships'}
                </h2>
              </div>
              <Link
                href="/scholarships"
                className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
              >
                View All
              </Link>
            </div>

            {/* Scholarship cards */}
            <div className="px-4 max-w-lg mx-auto pb-8">
              {displayedScholarships.length > 0 ? (
                <div className="space-y-4">
                  {displayedScholarships.map((scholarship, index) => (
                    <motion.div
                      key={scholarship.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.35, ease: 'easeOut' }}
                    >
                      <Link href={`/scholarships/${scholarship.slug}`}>
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-100 hover:shadow-lg hover:shadow-emerald-500/10 transition-shadow cursor-pointer">
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
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
                    <Info className="w-7 h-7 text-gray-400" />
                  </div>
                  <p className="text-gray-700 font-semibold text-base">
                    No scholarships found
                  </p>
                  <p className="text-gray-400 text-sm mt-1 max-w-xs">
                    Try adjusting the search or filter to explore all Karnataka
                    scholarships.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──── Bottom Spacer ──── */}
      <div className="h-8" />
    </>
  );
}
