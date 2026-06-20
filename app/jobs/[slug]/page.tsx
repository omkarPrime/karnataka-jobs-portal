import { notFound } from 'next/navigation';
import { mockJobs } from '@/data/mock-jobs';
import JobDetailClient from '@/components/pages/JobDetailClient';

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockJobs
    .filter((job) => job.category !== 'scholarships')
    .map((job) => ({
      slug: job.slug,
    }));
}

export async function generateMetadata({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug && j.category !== 'scholarships');

  if (!job) {
    return {
      title: 'Job Not Found - SarkariKarnataka',
    };
  }

  // Combine tags and other keywords for search optimization
  const keywords = [
    job.departmentShort,
    job.category,
    job.location,
    job.qualification,
    ...(job.tags || []),
    ...(job.troubleshooting?.flatMap((t) => t.tags) || []),
    'Karnataka government jobs',
    'Sarkari result Karnataka',
    'KEA recruitment',
    'KPSC online application',
  ].filter(Boolean);

  return {
    title: `${job.title} | SarkariKarnataka`,
    description: job.excerpt || job.description?.slice(0, 160),
    keywords: keywords,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug && j.category !== 'scholarships');

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
