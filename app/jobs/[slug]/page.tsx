import { notFound } from 'next/navigation';
import { mockJobs } from '@/data/mock-jobs';
import JobDetailClient from '@/components/pages/JobDetailClient';

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return mockJobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: 'Job Not Found - SarkariKarnataka',
    };
  }

  return {
    title: `${job.title} | SarkariKarnataka`,
    description: job.description?.slice(0, 160),
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = mockJobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
