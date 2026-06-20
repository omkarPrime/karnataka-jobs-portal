import { notFound } from 'next/navigation';
import { mockJobs } from '@/data/mock-jobs';
import JobDetailClient from '@/components/pages/JobDetailClient';

interface ScholarshipDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockJobs
    .filter((job) => job.category === 'scholarships')
    .map((job) => ({
      slug: job.slug,
    }));
}

export async function generateMetadata({ params }: ScholarshipDetailPageProps) {
  const { slug } = await params;
  const scholarship = mockJobs.find((j) => j.slug === slug && j.category === 'scholarships');

  if (!scholarship) {
    return {
      title: 'Scholarship Not Found - SarkariKarnataka',
    };
  }

  // Generate metadata dynamically
  const keywords = [
    scholarship.departmentShort,
    'scholarships',
    scholarship.location,
    scholarship.qualification,
    ...(scholarship.tags || []),
    ...(scholarship.troubleshooting?.flatMap((t) => t.tags) || []),
    'SSP Scholarship Karnataka',
    'Post matric scholarship Karnataka',
    'Vidyasiri scholarship apply',
    'Karnataka student scholarship',
  ].filter(Boolean);

  return {
    title: `${scholarship.title} | SarkariKarnataka`,
    description: scholarship.excerpt || scholarship.description?.slice(0, 160),
    keywords: keywords,
  };
}

export default async function ScholarshipDetailPage({ params }: ScholarshipDetailPageProps) {
  const { slug } = await params;
  const scholarship = mockJobs.find((j) => j.slug === slug && j.category === 'scholarships');

  if (!scholarship) {
    notFound();
  }

  return <JobDetailClient job={scholarship} />;
}
