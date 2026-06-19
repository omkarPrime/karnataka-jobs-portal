'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  Building2,
  ExternalLink,
  FileText,
  CheckCircle,
  ClipboardList,
  AlertTriangle,
  Link as LinkIcon,
} from 'lucide-react';
import QuickInfoGrid from '@/components/ui/QuickInfoGrid';
import StepTimeline from '@/components/ui/StepTimeline';
import TroubleshootingAccordion from '@/components/ui/TroubleshootingAccordion';
import type { Job } from '@/data/mock-jobs';

interface JobDetailClientProps {
  job: Job;
}

// ─── Animation Variants ──────────────────────────────────────────────────────

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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// ─── Section Header Helper ───────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-emerald-600" />
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function JobDetailClient({ job }: JobDetailClientProps) {
  const formattedLastDate = new Date(job.lastDate).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: job.title,
          text: `${job.title} - ${job.department}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share not supported
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      {/* ──── A) Back Navigation ──── */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-40">
        <div className="h-14 px-4 flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </Link>
            <span className="font-semibold text-gray-900">Job Details</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={handleShare}
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors"
              aria-label="Bookmark"
            >
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* ──── Main Content ──── */}
      <motion.div
        className="max-w-lg mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ──── B) Job Header ──── */}
        <motion.section variants={fadeUpVariants} className="px-4 pt-6">
          {/* Department Icon */}
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-emerald-700" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {job.title}
          </h1>

          {/* Department */}
          <p className="text-gray-500 mt-1">{job.department}</p>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {job.isNew && (
              <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                NEW
              </span>
            )}
            <span className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
              {job.category}
            </span>
            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {job.qualification}
            </span>
          </div>

          {/* Apply Now Button */}
          <a
            href={job.importantLinks?.[1]?.url || job.importantLinks?.[0]?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-colors"
          >
            <span>Apply Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.section>

        {/* ──── C) Quick Info Grid ──── */}
        <motion.section variants={fadeUpVariants} className="mt-6 px-4">
          <QuickInfoGrid
            vacancies={job.totalPosts}
            salary={job.salary}
            lastDate={formattedLastDate}
            applicationFee={job.applicationFee}
          />
        </motion.section>

        {/* ──── D) Description Section ──── */}
        <motion.section variants={fadeUpVariants} className="mt-8 px-4">
          <SectionHeader icon={FileText} title="About This Position" />
          <p className="text-gray-600 leading-relaxed text-sm">
            {job.description}
          </p>
        </motion.section>

        {/* ──── E) Eligibility Section ──── */}
        <motion.section variants={fadeUpVariants} className="mt-8 px-4">
          <SectionHeader icon={CheckCircle} title="Eligibility Criteria" />
          <div className="bg-gray-50 rounded-2xl p-4">
            <ul className="space-y-3">
              {job.eligibility.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ──── F) How to Apply ──── */}
        <motion.section variants={fadeUpVariants} className="mt-8 px-4">
          <SectionHeader icon={ClipboardList} title="How to Apply" />
          <StepTimeline steps={job.howToApply} />
        </motion.section>

        {/* ──── G) Troubleshooting & FAQs ──── */}
        {job.troubleshooting && job.troubleshooting.length > 0 && (
          <motion.section variants={fadeUpVariants} className="mt-8 px-4">
            <SectionHeader icon={AlertTriangle} title="Troubleshooting & FAQs" />
            <TroubleshootingAccordion items={job.troubleshooting} />
          </motion.section>
        )}

        {/* ──── H) Important Links ──── */}
        {job.importantLinks && job.importantLinks.length > 0 && (
          <motion.section variants={fadeUpVariants} className="mt-8 px-4 mb-8">
            <SectionHeader icon={LinkIcon} title="Important Links" />
            <div className="space-y-3">
              {job.importantLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-gray-200 p-4 bg-white hover:border-emerald-200 hover:shadow-sm transition-all group"
                >
                  <span className="text-emerald-600 font-medium text-sm group-hover:text-emerald-700 transition-colors">
                    {link.label}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </a>
              ))}
            </div>
          </motion.section>
        )}
      </motion.div>
    </>
  );
}
