// ─── Types ────────────────────────────────────────────────────────────────────

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  departmentShort: string;
  qualification: string;
  totalPosts: number;
  lastDate: string;
  salary: string;
  applicationFee: string;
  location: string;
  category: string;
  isNew: boolean;
  postedDate: string;
  description: string;
  /** Short summary shown in search results; falls back to first 160 chars of description */
  excerpt?: string;
  /** Searchable tags: districts, towns, keywords */
  tags?: string[];
  eligibility: string[];
  howToApply: ApplyStep[];
  importantLinks: { label: string; url: string }[];
  troubleshooting: TroubleshootingItem[];
}

export interface ApplyStep {
  step: number;
  title: string;
  description: string;
}

export interface TroubleshootingItem {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

export interface FilterPill {
  label: string;
  value: string;
  icon?: string;
  count?: number;
}

// ─── Filter Pills ────────────────────────────────────────────────────────────

/** All-purpose pills (legacy, kept for backward compat) */
export const filterPills: FilterPill[] = [
  { label: '10th Pass', value: '10th', icon: 'GraduationCap' },
  { label: 'Degree', value: 'degree', icon: 'BookOpen' },
  { label: 'Scholarships', value: 'scholarships', icon: 'Award' },
  { label: 'Results', value: 'results', icon: 'FileCheck' },
  { label: 'KPSC', value: 'kpsc', icon: 'Building2' },
  { label: 'Police', value: 'police', icon: 'Shield' },
  { label: 'Railway', value: 'railway', icon: 'Train' },
  { label: 'Health', value: 'health', icon: 'Heart' },
];

/** Pills shown only in the Jobs tab (scholarships excluded) */
export const jobFilterPills: FilterPill[] = [
  { label: 'All Jobs', value: 'all', icon: 'Building2' },
  { label: '10th Pass', value: '10th', icon: 'GraduationCap' },
  { label: 'Degree', value: 'degree', icon: 'BookOpen' },
  { label: 'Results', value: 'results', icon: 'FileCheck' },
  { label: 'KPSC', value: 'kpsc', icon: 'Building2' },
  { label: 'Police', value: 'police', icon: 'Shield' },
  { label: 'Railway', value: 'railway', icon: 'Train' },
  { label: 'Health', value: 'health', icon: 'Heart' },
];

/** Pills shown only in the Scholarships tab */
export const scholarshipFilterPills: FilterPill[] = [
  { label: 'All Scholarships', value: 'all', icon: 'Award' },
  { label: 'SC/ST', value: 'sc-st', icon: 'Award' },
  { label: 'OBC', value: 'obc', icon: 'Award' },
  { label: 'Merit', value: 'merit', icon: 'GraduationCap' },
];

// ─── Mock Jobs ───────────────────────────────────────────────────────────────

export const mockJobs: Job[] = [
  // 1 ── KPSC Group C
  {
    id: 'job-001',
    slug: 'kpsc-group-c-non-technical-2025',
    title: 'KPSC Group C Non-Technical Posts 2025',
    department: 'Karnataka Public Service Commission',
    departmentShort: 'KPSC',
    qualification: 'Degree',
    totalPosts: 1456,
    lastDate: '2025-02-15',
    salary: '₹25,000 – ₹45,000',
    applicationFee: '₹600 (General) / ₹300 (SC/ST/OBC)',
    location: 'Karnataka (Various Districts)',
    category: 'kpsc',
    isNew: true,
    postedDate: '2025-01-05',
    description:
      'Karnataka Public Service Commission invites online applications from eligible Indian citizens for recruitment to Group C Non-Technical posts across various state government departments. This is an excellent opportunity for degree holders seeking a stable government career in Karnataka.',
    eligibility: [
      'Must hold a Bachelor\'s Degree from a recognized university in Karnataka or equivalent.',
      'Age limit: 18–35 years as on the last date of application (relaxation applicable for reserved categories as per Government of Karnataka rules).',
      'Must be a citizen of India and a domicile of Karnataka.',
      'Candidates must possess adequate knowledge of Kannada language (read, write, and speak).',
      'No pending criminal cases or previous dismissal from government service.',
    ],
    howToApply: [
      { step: 1, title: 'Visit Official Website', description: 'Go to the KPSC official portal at kpsc.kar.nic.in and navigate to the "Online Applications" section.' },
      { step: 2, title: 'Register / Login', description: 'New users must register with a valid email ID and mobile number. Existing users can log in with their credentials.' },
      { step: 3, title: 'Fill Application Form', description: 'Complete all sections of the application form including personal details, educational qualifications, and work experience.' },
      { step: 4, title: 'Upload Documents', description: 'Upload a recent passport-size photograph (20–50 KB, JPG), signature (10–20 KB, JPG), and scanned copies of certificates.' },
      { step: 5, title: 'Pay Application Fee', description: 'Pay the application fee online via net banking, UPI, or debit/credit card. Fee: ₹600 (General), ₹300 (SC/ST/OBC).' },
      { step: 6, title: 'Submit & Print', description: 'Review all entered details carefully, submit the application, and download/print the confirmation page for future reference.' },
    ],
    importantLinks: [
      { label: 'Official Notification PDF', url: 'https://kpsc.kar.nic.in/notifications' },
      { label: 'KPSC Online Application Portal', url: 'https://kpsc.kar.nic.in/apply' },
      { label: 'KPSC Syllabus & Exam Pattern', url: 'https://kpsc.kar.nic.in/syllabus' },
    ],
    troubleshooting: [
      { id: 'ts-001-1', question: 'My photo is getting rejected during upload. What should I do?', answer: 'Ensure your photo is in JPG format, between 20–50 KB, with dimensions of 200×230 pixels. Use a white background and avoid selfies. You can resize using online tools like picresize.com.', tags: ['photo', 'upload', 'document'] },
      { id: 'ts-001-2', question: 'I am not receiving the OTP on my mobile number.', answer: 'Check if your mobile number is correct and has active network coverage. Wait 2–3 minutes before requesting a resend. If using DND, temporarily disable it. Try using an alternate number if the issue persists.', tags: ['otp', 'registration', 'mobile'] },
      { id: 'ts-001-3', question: 'Payment was deducted but application shows unpaid.', answer: 'Do not pay again immediately. Wait 24–48 hours for automatic reconciliation. If the status does not update, contact KPSC helpdesk at 080-22381612 with your transaction ID and bank statement screenshot.', tags: ['payment', 'fee', 'transaction'] },
      { id: 'ts-001-4', question: 'The website is showing a server error when I try to submit.', answer: 'This usually happens due to heavy traffic near the deadline. Try during off-peak hours (early morning or late night). Clear your browser cache and use Google Chrome or Mozilla Firefox for best compatibility.', tags: ['server', 'error', 'submit'] },
    ],
  },

  // 2 ── Karnataka State Police Constable
  {
    id: 'job-002',
    slug: 'karnataka-state-police-constable-2025',
    title: 'Karnataka State Police Constable Recruitment 2025',
    department: 'Karnataka State Police',
    departmentShort: 'KSP',
    qualification: '10th Pass',
    totalPosts: 3284,
    lastDate: '2025-02-28',
    salary: '₹21,400 – ₹42,000',
    applicationFee: '₹250 (General) / ₹100 (SC/ST)',
    location: 'Karnataka (All Districts)',
    category: 'police',
    isNew: true,
    postedDate: '2025-01-08',
    description:
      'Karnataka State Police invites applications from eligible candidates for recruitment of Civil Police Constable (Men & Women) in Karnataka State Police. The selection process includes a written exam, physical efficiency test, and endurance test.',
    eligibility: [
      'Must have passed SSLC (10th Standard) or equivalent examination from a recognized board.',
      'Age limit: 19–25 years for General category; relaxation of 3 years for OBC and 5 years for SC/ST candidates.',
      'Minimum height: 168 cm (Men), 157 cm (Women). Chest: 86 cm with 5 cm expansion (Men only).',
      'Must be physically and mentally fit; no visual or hearing impairment.',
      'Must be a citizen of India with domicile in Karnataka.',
    ],
    howToApply: [
      { step: 1, title: 'Visit Official Website', description: 'Go to the KSP recruitment portal at recruit.ksp.gov.in and click on "Civil Police Constable 2025".' },
      { step: 2, title: 'New Registration', description: 'Register using your Aadhaar number, valid mobile number, and email address. Create a strong password.' },
      { step: 3, title: 'Fill Application Form', description: 'Enter your personal information, educational details, physical measurements, and preferred district for posting.' },
      { step: 4, title: 'Upload Photo & Signature', description: 'Upload a recent passport-size colour photograph (max 50 KB, JPG) and signature (max 20 KB, JPG) as per specifications.' },
      { step: 5, title: 'Pay Application Fee', description: 'Pay ₹250 (General/OBC) or ₹100 (SC/ST) through online payment modes including UPI, net banking, or debit card.' },
      { step: 6, title: 'Download Confirmation', description: 'After successful submission, download the application receipt and note your registration number for future reference.' },
    ],
    importantLinks: [
      { label: 'KSP Recruitment Portal', url: 'https://recruit.ksp.gov.in' },
      { label: 'Official Notification', url: 'https://recruit.ksp.gov.in/notifications' },
      { label: 'Physical Test Guidelines', url: 'https://recruit.ksp.gov.in/pet-guidelines' },
    ],
    troubleshooting: [
      { id: 'ts-002-1', question: 'Photo upload is failing with a size error.', answer: 'Your photo must be in JPG/JPEG format and under 50 KB. Use an online compressor like compressjpeg.com. Ensure dimensions are approximately 200×230 pixels with a plain white or light-coloured background.', tags: ['photo', 'upload', 'size'] },
      { id: 'ts-002-2', question: 'OTP is not being delivered to my phone.', answer: 'Ensure you have active mobile network. Disable DND services if enabled. Wait at least 2 minutes before clicking "Resend OTP". If using a new SIM, wait 24 hours after activation before attempting registration.', tags: ['otp', 'mobile', 'registration'] },
      { id: 'ts-002-3', question: 'Payment failed but amount was deducted from my account.', answer: 'Do not attempt another payment. The amount will be auto-refunded within 5–7 working days if the transaction failed. Check your application status after 48 hours. Contact the helpdesk with your bank statement if the issue persists.', tags: ['payment', 'refund', 'transaction'] },
    ],
  },

  // 3 ── KEA PGCET 2025
  {
    id: 'job-003',
    slug: 'kea-pgcet-2025-registration',
    title: 'KEA PGCET 2025 – Post Graduate Common Entrance Test',
    department: 'Karnataka Examinations Authority',
    departmentShort: 'KEA',
    qualification: 'Degree',
    totalPosts: 12500,
    lastDate: '2025-01-31',
    salary: 'N/A (Entrance Examination)',
    applicationFee: '₹750 (General) / ₹500 (SC/ST/Cat-I)',
    location: 'Karnataka (Exam Centres Across State)',
    category: 'results',
    isNew: true,
    postedDate: '2025-01-03',
    description:
      'Karnataka Examinations Authority conducts PGCET for admission to MBA, MCA, M.Tech, M.Arch, and ME programmes in colleges across Karnataka. Approximately 12,500 seats are available across participating institutions for the academic year 2025-26.',
    eligibility: [
      'Must hold a Bachelor\'s degree in the relevant discipline from a university recognized by UGC with minimum 50% aggregate marks (45% for reserved categories).',
      'Final-year students awaiting results may also apply provisionally.',
      'Age: No upper age limit for PGCET examination.',
      'Must be an Indian citizen; Karnataka domicile candidates get priority in seat allocation.',
      'Valid GATE/GPAT score holders are exempted from PGCET for M.Tech/M.Pharm admissions.',
    ],
    howToApply: [
      { step: 1, title: 'Visit KEA Website', description: 'Navigate to cetonline.karnataka.gov.in/kea and select "PGCET 2025" from the active examinations list.' },
      { step: 2, title: 'Register Online', description: 'Create an account using your email and mobile number. You will receive login credentials via SMS and email.' },
      { step: 3, title: 'Fill Application', description: 'Complete the application form with personal, academic, and category details. Select your preferred exam centre from the available list.' },
      { step: 4, title: 'Upload Documents', description: 'Upload photograph (recent, colour, white background, 20–50 KB), signature (10–20 KB), and left thumb impression (10–20 KB) in JPG format.' },
      { step: 5, title: 'Pay Examination Fee', description: 'Pay ₹750 (General/OBC) or ₹500 (SC/ST/Cat-I) online via credit/debit card, net banking, or UPI.' },
      { step: 6, title: 'Print Application', description: 'Submit the form, download the filled application PDF, and print it. Keep it safe for verification during counselling.' },
    ],
    importantLinks: [
      { label: 'KEA PGCET Online Portal', url: 'https://cetonline.karnataka.gov.in/kea' },
      { label: 'PGCET 2025 Notification', url: 'https://cetonline.karnataka.gov.in/kea/pgcet2025' },
    ],
    troubleshooting: [
      { id: 'ts-003-1', question: 'Unable to upload photograph – getting format error.', answer: 'The photograph must be a recent colour passport-size photo in JPG format, between 20–50 KB. Ensure the background is white and the face covers 70–80% of the frame. Crop and compress using free online tools.', tags: ['photo', 'upload', 'format'] },
      { id: 'ts-003-2', question: 'I did not receive the OTP after registration.', answer: 'Check spam/junk folders for the email OTP. For SMS OTP, ensure your number is not on DND. Wait at least 3 minutes before requesting a resend. Contact KEA helpline at 080-23460460 if the issue continues.', tags: ['otp', 'registration', 'email'] },
      { id: 'ts-003-3', question: 'Payment gateway is timing out during fee payment.', answer: 'This is common during peak hours. Try again during early morning (6–8 AM) or late night (after 10 PM). Use a stable internet connection and avoid refreshing the page during payment processing.', tags: ['payment', 'gateway', 'timeout'] },
      { id: 'ts-003-4', question: 'Website is not loading or showing 503 error.', answer: 'The KEA server experiences high load close to deadlines. Clear your browser cache, try a different browser (Chrome recommended), or use a mobile data connection instead of Wi-Fi. Avoid last-day rush by applying early.', tags: ['server', 'error', 'loading'] },
    ],
  },

  // 4 ── Karnataka Post Matric Scholarship
  {
    id: 'job-004',
    slug: 'karnataka-post-matric-scholarship-2025',
    title: 'Karnataka Post Matric Scholarship 2024-25',
    department: 'Backward Classes Welfare Department, Government of Karnataka',
    departmentShort: 'BCWD',
    qualification: '10th Pass',
    totalPosts: 50000,
    lastDate: '2025-03-15',
    salary: '₹5,000 – ₹30,000/year (Scholarship)',
    applicationFee: 'Free (No Application Fee)',
    location: 'Karnataka',
    category: 'scholarships',
    isNew: false,
    postedDate: '2025-01-10',
    description:
      'The Government of Karnataka provides Post Matric Scholarships to students belonging to SC, ST, OBC, and other backward classes pursuing higher education after 10th standard. The scholarship covers tuition fees, maintenance allowance, and book grants for up to 50,000 beneficiaries.',
    eligibility: [
      'Must have passed SSLC (10th) or equivalent and currently pursuing post-matric education (PUC, Degree, PG, Professional courses).',
      'Annual family income must not exceed ₹2,50,000 for SC/ST and ₹1,00,000 for OBC/Minority categories.',
      'Must belong to SC, ST, OBC (Category-I, IIA, IIB, IIIA, IIIB), or Minority community of Karnataka.',
      'Must be enrolled in a recognized educational institution within Karnataka.',
      'Should not be receiving any other scholarship or stipend from government sources for the same academic year.',
    ],
    howToApply: [
      { step: 1, title: 'Visit SSP Portal', description: 'Go to the State Scholarship Portal at ssp.karnataka.gov.in and select "Post Matric Scholarship" under the relevant category.' },
      { step: 2, title: 'Aadhaar-Based Registration', description: 'Register using your Aadhaar number. Your details will be auto-fetched from the Aadhaar database. Verify and confirm your information.' },
      { step: 3, title: 'Fill Scholarship Application', description: 'Enter academic details, institution name, course enrolled, bank account (linked to Aadhaar), and category certificate information.' },
      { step: 4, title: 'Upload Required Documents', description: 'Upload caste/income certificate, previous marksheet, Aadhaar card copy, bank passbook first page, and institution bonafide certificate.' },
      { step: 5, title: 'Institution Verification', description: 'After submission, your institution will verify your enrollment and academic details online through the SSP portal.' },
      { step: 6, title: 'Track Application', description: 'Use your application ID to track the status on the SSP portal. Scholarship amount will be directly credited to your Aadhaar-linked bank account.' },
    ],
    importantLinks: [
      { label: 'SSP Karnataka Portal', url: 'https://ssp.karnataka.gov.in' },
      { label: 'Scholarship Guidelines PDF', url: 'https://ssp.karnataka.gov.in/guidelines' },
      { label: 'Contact District Welfare Officer', url: 'https://ssp.karnataka.gov.in/contacts' },
    ],
    troubleshooting: [
      { id: 'ts-004-1', question: 'My Aadhaar details are not matching during registration.', answer: 'Ensure your name and date of birth match exactly as in your Aadhaar card. If there is a mismatch, update your Aadhaar at the nearest Aadhaar Seva Kendra before applying. The system requires an exact match for verification.', tags: ['aadhaar', 'registration', 'mismatch'] },
      { id: 'ts-004-2', question: 'Scholarship status shows "Pending at Institution" for weeks.', answer: 'Contact your college/institution\'s scholarship coordinator and request them to verify your application on the SSP portal. Institutions must log in and approve pending applications. Follow up with the college office.', tags: ['status', 'pending', 'institution'] },
      { id: 'ts-004-3', question: 'Bank account details are getting rejected.', answer: 'The bank account must be in the student\'s name (not parent\'s) and linked to Aadhaar. Ensure the IFSC code is correct. Nationalized bank accounts are preferred. Visit your bank branch to get Aadhaar seeding done if not already linked.', tags: ['bank', 'account', 'aadhaar'] },
    ],
  },

  // 5 ── BMRCL Junior Engineer
  {
    id: 'job-005',
    slug: 'bmrcl-junior-engineer-2025',
    title: 'BMRCL Junior Engineer Recruitment 2025',
    department: 'Bangalore Metro Rail Corporation Limited',
    departmentShort: 'BMRCL',
    qualification: 'Degree',
    totalPosts: 174,
    lastDate: '2025-02-20',
    salary: '₹35,000 – ₹65,000',
    applicationFee: '₹500 (General/OBC) / ₹250 (SC/ST)',
    location: 'Bengaluru, Karnataka',
    category: 'railway',
    isNew: false,
    postedDate: '2025-01-12',
    description:
      'Bangalore Metro Rail Corporation Limited (BMRCL) is recruiting Junior Engineers in Civil, Electrical, and Mechanical disciplines for the Phase-2 expansion of Namma Metro. Selected candidates will be involved in metro construction, maintenance, and operations across Bengaluru.',
    eligibility: [
      'Must possess a Diploma or B.E./B.Tech in Civil / Electrical / Mechanical Engineering from a recognized institution approved by AICTE.',
      'Minimum 1 year of relevant work experience in construction, infrastructure, or railway projects (freshers eligible for Diploma holders).',
      'Age limit: 21–30 years as on the closing date; relaxation of 3 years for OBC and 5 years for SC/ST as per GoI norms.',
      'Must be proficient in English and Kannada; knowledge of Hindi is desirable.',
      'Must be medically fit as per BMRCL medical standards for metro operations.',
    ],
    howToApply: [
      { step: 1, title: 'Visit BMRCL Careers Page', description: 'Go to english.bmrc.co.in and navigate to the "Careers" or "Recruitment" section for Junior Engineer vacancies.' },
      { step: 2, title: 'Download & Read Notification', description: 'Download the detailed recruitment notification PDF and carefully read the eligibility criteria, pay scale, and selection process.' },
      { step: 3, title: 'Register Online', description: 'Click on "Apply Online" and register with your valid email ID and mobile number. You will receive a registration ID.' },
      { step: 4, title: 'Fill Application Form', description: 'Complete the application form with personal details, educational qualifications, work experience, and preferred engineering discipline.' },
      { step: 5, title: 'Upload Documents', description: 'Upload photograph (passport-size, max 100 KB), signature (max 50 KB), degree/diploma certificate, and experience certificate in PDF/JPG format.' },
      { step: 6, title: 'Pay Fee & Submit', description: 'Pay the application fee online and submit. Download the completed application form for your records.' },
    ],
    importantLinks: [
      { label: 'BMRCL Official Website', url: 'https://english.bmrc.co.in' },
      { label: 'Recruitment Notification', url: 'https://english.bmrc.co.in/careers' },
    ],
    troubleshooting: [
      { id: 'ts-005-1', question: 'Cannot upload experience certificate – file too large.', answer: 'Compress your PDF file to under 200 KB using tools like smallpdf.com or ilovepdf.com. If scanning, use 150 DPI resolution in grayscale mode to reduce file size while keeping text readable.', tags: ['upload', 'document', 'size'] },
      { id: 'ts-005-2', question: 'OTP not received for registration verification.', answer: 'Ensure your mobile number has active service and is not on DND. Check for network issues. Wait 5 minutes before requesting a new OTP. If using a corporate number, try a personal mobile instead.', tags: ['otp', 'mobile', 'verification'] },
      { id: 'ts-005-3', question: 'Payment successful but application status shows incomplete.', answer: 'Wait for 24 hours for the payment status to auto-update. If it still shows incomplete, email the payment receipt and transaction ID to bmrcl.recruitment@gmail.com with your application number in the subject line.', tags: ['payment', 'status', 'incomplete'] },
      { id: 'ts-005-4', question: 'Form is not loading properly on my mobile browser.', answer: 'The BMRCL application portal works best on desktop browsers. Use Google Chrome or Firefox on a laptop/desktop. If you must use mobile, switch to "Desktop Mode" in your browser settings.', tags: ['browser', 'mobile', 'compatibility'] },
    ],
  },

  // 6 ── Karnataka Forest Guard
  {
    id: 'job-006',
    slug: 'karnataka-forest-guard-2025',
    title: 'Karnataka Forest Guard Recruitment 2025',
    department: 'Karnataka Forest Department',
    departmentShort: 'KFD',
    qualification: 'SSLC (10th)',
    totalPosts: 823,
    lastDate: '2025-03-10',
    salary: '₹21,400 – ₹38,000',
    applicationFee: '₹350 (General/OBC) / ₹150 (SC/ST)',
    location: 'Karnataka (Forest Divisions)',
    category: '10th',
    isNew: false,
    postedDate: '2025-01-15',
    description:
      'Karnataka Forest Department has announced recruitment for Forest Guard and Forest Watcher posts across various forest divisions in Karnataka. Candidates with SSLC qualification and good physical fitness are encouraged to apply. The role involves patrolling, wildlife protection, and anti-poaching activities.',
    eligibility: [
      'Must have passed SSLC (10th Standard) from Karnataka State Board or equivalent recognized board.',
      'Age limit: 18–26 years as on the last date of application; age relaxation of 3 years for OBC and 5 years for SC/ST/Cat-I candidates.',
      'Physical standards – Height: 163 cm (Men), 150 cm (Women); Chest: 79 cm with 5 cm expansion (Men).',
      'Must be physically fit to traverse forest terrain; certified by a government medical officer.',
      'Must be a domicile of Karnataka with proficiency in Kannada language.',
    ],
    howToApply: [
      { step: 1, title: 'Visit KFD Portal', description: 'Go to the Karnataka Forest Department recruitment portal at aranya.gov.in and look for "Forest Guard Recruitment 2025".' },
      { step: 2, title: 'Online Registration', description: 'Create a new account with your Aadhaar number, mobile number, and email. Verify through OTP sent to your mobile.' },
      { step: 3, title: 'Fill Application Details', description: 'Fill in your personal information, educational qualification, physical measurements, and select preferred forest division for posting.' },
      { step: 4, title: 'Upload Photo & Documents', description: 'Upload a recent passport-size photo (white background, JPG, 20–50 KB), signature, and scanned SSLC marks card.' },
      { step: 5, title: 'Pay Application Fee', description: 'Pay ₹350 (General/OBC) or ₹150 (SC/ST) using UPI, net banking, or debit card. SC/ST candidates may be exempt in some cases.' },
      { step: 6, title: 'Submit Application', description: 'Review all details, accept the declaration, and submit. Print the application acknowledgment for your records.' },
    ],
    importantLinks: [
      { label: 'Karnataka Forest Department', url: 'https://aranya.gov.in' },
      { label: 'Recruitment Notification PDF', url: 'https://aranya.gov.in/recruitment2025' },
      { label: 'Physical Test Schedule', url: 'https://aranya.gov.in/pet-schedule' },
    ],
    troubleshooting: [
      { id: 'ts-006-1', question: 'Photo is getting rejected – what are the exact specifications?', answer: 'Photo must be passport-size, colour, with white background, in JPG format, between 20–50 KB, and dimensions 200×230 pixels. Face should occupy 70% of the frame. Do not wear caps, sunglasses, or heavy accessories.', tags: ['photo', 'specifications', 'upload'] },
      { id: 'ts-006-2', question: 'I entered wrong physical measurement details. Can I correct them?', answer: 'If you have not yet submitted the form, go back and edit the details. If already submitted, you will be verified during the Physical Efficiency Test (PET). Discrepancies during PET may lead to disqualification, so apply again if within the deadline.', tags: ['correction', 'physical', 'measurement'] },
      { id: 'ts-006-3', question: 'Payment deducted twice for the same application.', answer: 'Do not worry – duplicate payments are automatically refunded within 7–10 working days. Keep screenshots of both transactions. If not refunded, email aranya.helpdesk@karnataka.gov.in with your application ID and bank statements.', tags: ['payment', 'duplicate', 'refund'] },
    ],
  },

  // 7 ── KPSC FDA/SDA
  {
    id: 'job-007',
    slug: 'kpsc-fda-sda-recruitment-2025',
    title: 'KPSC FDA/SDA Recruitment 2025',
    department: 'Karnataka Public Service Commission',
    departmentShort: 'KPSC',
    qualification: 'Degree/PUC',
    totalPosts: 2100,
    lastDate: '2025-03-01',
    salary: '₹27,650 – ₹52,650',
    applicationFee: '₹600 (General) / ₹300 (SC/ST/OBC/Cat-I)',
    location: 'Karnataka (All Districts)',
    category: 'kpsc',
    isNew: false,
    postedDate: '2025-01-18',
    description:
      'KPSC has released notification for First Division Assistant (FDA) and Second Division Assistant (SDA) posts in various government offices across Karnataka. FDA requires a degree while SDA requires PUC qualification. This is one of the most sought-after government job recruitments in the state.',
    eligibility: [
      'FDA: Must hold a Bachelor\'s Degree from a recognized university. SDA: Must have passed PUC / 12th Standard or equivalent.',
      'Must have passed the Kannada language examination at the matriculation level or above.',
      'Age limit: 18–35 years for General category (as on last date); applicable relaxation for reserved categories as per Karnataka government norms.',
      'Basic computer knowledge (MS Office, typing in Kannada and English) is required; candidates must pass a computer proficiency test.',
      'Must be a citizen of India and a Karnataka domicile.',
    ],
    howToApply: [
      { step: 1, title: 'Visit KPSC Portal', description: 'Go to kpsc.kar.nic.in and click on "FDA/SDA Recruitment 2025" under the Online Recruitment section.' },
      { step: 2, title: 'Create Account', description: 'Register with your personal email ID and mobile number. A verification link will be sent to your email – click to activate your account.' },
      { step: 3, title: 'Complete Application', description: 'Log in and fill the application form with personal, educational, and category details. Select whether you are applying for FDA, SDA, or both.' },
      { step: 4, title: 'Upload Required Documents', description: 'Upload photograph (recent passport-size, JPG, 20–50 KB), signature (JPG, 10–20 KB), and category certificate if applicable.' },
      { step: 5, title: 'Fee Payment', description: 'Pay ₹600 (General) or ₹300 (reserved categories) via online payment. Karnataka government employees applying through proper channel may be exempted.' },
      { step: 6, title: 'Final Submission', description: 'Verify all information, submit the application, and save the printout. Note your application reference number carefully.' },
    ],
    importantLinks: [
      { label: 'KPSC FDA/SDA Notification', url: 'https://kpsc.kar.nic.in/fda-sda-2025' },
      { label: 'Online Application Link', url: 'https://kpsc.kar.nic.in/apply' },
      { label: 'Previous Year Question Papers', url: 'https://kpsc.kar.nic.in/question-papers' },
    ],
    troubleshooting: [
      { id: 'ts-007-1', question: 'Can I apply for both FDA and SDA at the same time?', answer: 'Yes, you can apply for both FDA and SDA in a single application if you meet the eligibility criteria for both. The exam dates are usually different, and you will need to pay separate fees for each post.', tags: ['application', 'both', 'fda-sda'] },
      { id: 'ts-007-2', question: 'My signature keeps getting rejected during upload.', answer: 'Sign on a clean white paper using a black ink pen. Scan or photograph it, crop to show only the signature, and save as JPG under 20 KB. Dimensions should be approximately 140×60 pixels.', tags: ['signature', 'upload', 'rejected'] },
      { id: 'ts-007-3', question: 'Website crashes during peak hours and I cannot access the form.', answer: 'Avoid applying on the last 2 days before the deadline as server load is extremely high. Apply during 6–8 AM or after 11 PM for smoother experience. Bookmark the direct application URL to avoid navigating through the busy homepage.', tags: ['website', 'crash', 'server'] },
      { id: 'ts-007-4', question: 'I forgot my KPSC login password. How to recover?', answer: 'Click "Forgot Password" on the login page. Enter your registered email ID or mobile number. An OTP will be sent to reset your password. If you cannot access the registered email/mobile, contact KPSC helpdesk with your registration ID.', tags: ['password', 'forgot', 'login'] },
    ],
  },

  // 8 ── Vidyasiri Scholarship 2025
  {
    id: 'job-008',
    slug: 'vidyasiri-scholarship-2025',
    title: 'Vidyasiri Scholarship 2025 – Karnataka Higher Education',
    department: 'Department of Higher Education, Government of Karnataka',
    departmentShort: 'DHE',
    qualification: 'PUC Pass',
    totalPosts: 100000,
    lastDate: '2025-03-31',
    salary: '₹10,000 – ₹20,000/year (Scholarship)',
    applicationFee: 'Free (No Application Fee)',
    location: 'Karnataka',
    category: 'scholarships',
    isNew: false,
    postedDate: '2025-01-20',
    description:
      'Vidyasiri Scholarship is a flagship scheme of the Government of Karnataka to support economically weaker students in pursuing higher education. The scholarship is available for students enrolled in degree, post-graduate, and professional courses in recognized institutions across Karnataka.',
    eligibility: [
      'Must have passed PUC (12th Standard) or equivalent from a recognized board and currently enrolled in a degree or higher programme.',
      'Annual family income should not exceed ₹2,50,000 from all sources.',
      'Must be a domicile of Karnataka and studying in a recognized college/university within the state.',
      'Minimum 50% attendance in the current academic year is mandatory (as certified by the institution).',
      'Students who have failed in the previous academic year or are repeating a year are not eligible.',
    ],
    howToApply: [
      { step: 1, title: 'Visit SSP Portal', description: 'Go to ssp.karnataka.gov.in and select "Vidyasiri Scholarship" from the list of available scholarships.' },
      { step: 2, title: 'Student Registration', description: 'Register using your Aadhaar number. Your demographic details will be verified through the Aadhaar database in real-time.' },
      { step: 3, title: 'Fill Scholarship Form', description: 'Enter your academic details (college name, course, year), family income details, and Aadhaar-linked bank account number.' },
      { step: 4, title: 'Upload Documents', description: 'Upload PUC marks card, income certificate (issued by Tahsildar), Aadhaar card, bank passbook first page, and college ID card – all in JPG/PDF format under 200 KB each.' },
      { step: 5, title: 'Institution Approval', description: 'Your college will verify your enrollment, attendance, and academic details on the SSP portal. Follow up with your college office.' },
      { step: 6, title: 'Track & Receive', description: 'Track application status online. Once approved by the district officer, the scholarship amount is credited directly to your Aadhaar-linked bank account via DBT.' },
    ],
    importantLinks: [
      { label: 'SSP Karnataka – Vidyasiri', url: 'https://ssp.karnataka.gov.in/vidyasiri' },
      { label: 'Scholarship Amount Details', url: 'https://ssp.karnataka.gov.in/vidyasiri/amount' },
      { label: 'Helpline & Contact', url: 'https://ssp.karnataka.gov.in/help' },
    ],
    troubleshooting: [
      { id: 'ts-008-1', question: 'Aadhaar verification is failing during registration.', answer: 'Ensure your Aadhaar card has your latest photograph and correct details. If your mobile number is not linked to Aadhaar, visit an Aadhaar Seva Kendra to update it. Biometric verification issues can be resolved at the nearest CSC centre.', tags: ['aadhaar', 'verification', 'registration'] },
      { id: 'ts-008-2', question: 'My college is not listed in the SSP portal dropdown.', answer: 'Your college may not have registered on the SSP portal yet. Request your college administration to register the institution. Only colleges recognized by the relevant university/AICTE/DTE appear in the list.', tags: ['college', 'institution', 'registration'] },
      { id: 'ts-008-3', question: 'Scholarship amount not credited despite approval showing on portal.', answer: 'Check if your bank account is active and linked to Aadhaar for DBT (Direct Benefit Transfer). If the account has been dormant for over a year, reactivate it by making a small transaction. Contact your district Backward Classes Welfare Officer for escalation.', tags: ['payment', 'credit', 'bank'] },
      { id: 'ts-008-4', question: 'Income certificate upload is being rejected.', answer: 'The income certificate must be issued by a Tahsildar or equivalent authority and should be for the current financial year. Ensure the scanned copy is clear, in PDF or JPG format, and under 200 KB. Certificates from village accountants may not be accepted.', tags: ['income', 'certificate', 'upload'] },
    ],
  },
];

// ─── Karnataka Districts & Towns ─────────────────────────────────────────────

/**
 * Canonical list of Karnataka districts and major towns/talukas.
 * Used by the district-fallback search to detect location intent.
 */
export const KARNATAKA_DISTRICTS: string[] = [
  // Districts
  'bagalkot', 'ballari', 'belagavi', 'bengaluru', 'bangalore', 'bidar',
  'chamarajanagar', 'chikkaballapur', 'chikkamagaluru', 'chitradurga',
  'dakshina kannada', 'davanagere', 'dharwad', 'gadag', 'hassan',
  'haveri', 'kalaburagi', 'gulbarga', 'kodagu', 'kolar', 'koppal',
  'mandya', 'mysuru', 'mysore', 'raichur', 'ramanagara', 'shivamogga',
  'shimoga', 'tumakuru', 'tumkur', 'udupi', 'uttara kannada', 'vijayapura',
  'bijapur', 'vijayanagara', 'yadgir',
  // Major towns / talukas
  'gokak', 'hubli', 'hubballi', 'mangaluru', 'mangalore', 'belgaum',
  'bellary', 'hospet', 'hampi', 'bidar', 'gulbarga', 'yelahanka',
  'whitefield', 'electronic city', 'jayanagar', 'rajajinagar', 'hebbal',
  'shirdi', 'tiptur', 'channapatna', 'maddur', 'srirangapatna',
  'nanjangud', 'hunsur', 'kushalnagar', 'madikeri', 'sagara',
  'shimoga', 'bhadravati', 'chikmagalur', 'kadur', 'hassan',
  'holenarasipur', 'belur', 'arsikere', 'sullia', 'puttur',
  'bantwal', 'manipal', 'kundapura', 'sirsi', 'karwar', 'ankola',
  'ron', 'shiggaon', 'savanur', 'byadagi', 'hirekerur',
  'ranebennur', 'nargund', 'mundargi', 'lakshmeshwar',
  'mudhol', 'jamkhandi', 'ilkal', 'hungund', 'badami', 'bagalkot',
  'sindhanur', 'manvi', 'lingasugur', 'devadurga', 'raichur',
  'yadgiri', 'shorapur', 'shahpur', 'surpur', 'chincholi',
  'aland', 'sedam', 'chittapur', 'gulbarga', 'afzalpur',
  'jevargi', 'kalgi', 'humnabad', 'aurad', 'bhalki',
];

// ─── Smart Filtering Utilities ────────────────────────────────────────────────

export type FilterResult = {
  jobs: Job[];
  fallbackMessage: string | null;
};

/**
 * Checks whether the search query contains a Karnataka location keyword.
 * Returns the matched location string, or null.
 */
export function extractLocationFromQuery(query: string): string | null {
  const q = query.toLowerCase().trim();
  for (const place of KARNATAKA_DISTRICTS) {
    if (q.includes(place)) return place;
  }
  return null;
}

/**
 * Full-text match: checks title, department, description, excerpt, tags,
 * location, and qualification fields.
 */
function jobMatchesText(job: Job, q: string): boolean {
  const needle = q.toLowerCase();
  return (
    job.title.toLowerCase().includes(needle) ||
    job.department.toLowerCase().includes(needle) ||
    job.departmentShort.toLowerCase().includes(needle) ||
    job.description.toLowerCase().includes(needle) ||
    (job.excerpt ?? '').toLowerCase().includes(needle) ||
    job.location.toLowerCase().includes(needle) ||
    job.qualification.toLowerCase().includes(needle) ||
    (job.tags ?? []).some((t) => t.toLowerCase().includes(needle))
  );
}

/**
 * Returns jobs that are NOT scholarships (i.e. the Jobs feed).
 */
export function getJobFeed(): Job[] {
  return mockJobs.filter((j) => j.category !== 'scholarships');
}

/**
 * Returns only scholarships.
 */
export function getScholarshipFeed(): Job[] {
  return mockJobs.filter((j) => j.category === 'scholarships');
}

/**
 * Filters the **Jobs** feed with:
 * 1. Category pill filter (skips if 'all')
 * 2. Smart text search with district/town fallback logic
 *
 * Returns a `FilterResult` with the matched jobs and an optional fallback
 * message to display when the district fallback kicks in.
 */
export function filterJobs(
  searchQuery: string,
  activeCategory: string
): FilterResult {
  const baseFeed = getJobFeed();

  // Step 1 – apply category pill filter
  let categoryFiltered =
    activeCategory === 'all'
      ? baseFeed
      : baseFeed.filter((j) => j.category === activeCategory);

  // Step 2 – no search query → return category-filtered list as-is
  const q = searchQuery.trim();
  if (!q) return { jobs: categoryFiltered, fallbackMessage: null };

  // Step 3 – check if query contains a location keyword
  const location = extractLocationFromQuery(q);

  if (location) {
    // Try to find jobs that specifically mention this location
    const locationSpecific = categoryFiltered.filter((j) =>
      jobMatchesText(j, location)
    );

    if (locationSpecific.length > 0) {
      return { jobs: locationSpecific, fallbackMessage: null };
    }

    // CRITICAL FALLBACK: no location-specific jobs found → show all Karnataka jobs
    return {
      jobs: categoryFiltered,
      fallbackMessage: `No specific jobs found for "${location.charAt(0).toUpperCase() + location.slice(1)}". Showing all Government Jobs in Karnataka near your location.`,
    };
  }

  // Step 4 – generic full-text search (no location detected)
  const textMatched = categoryFiltered.filter((j) => jobMatchesText(j, q));
  return { jobs: textMatched, fallbackMessage: null };
}

/**
 * Filters the **Scholarships** feed.
 * Scholarships use a simpler filter: text search across key fields.
 * The `activeCategory` pill is for scholarship-specific sub-categories
 * (e.g. 'sc-st', 'obc', 'merit') matched against tags.
 */
export function filterScholarships(
  searchQuery: string,
  activeCategory: string
): Job[] {
  let feed = getScholarshipFeed();

  // Sub-category filter for scholarships
  if (activeCategory !== 'all') {
    feed = feed.filter((j) =>
      (j.tags ?? []).some((t) => t.toLowerCase() === activeCategory)
    );
  }

  const q = searchQuery.trim();
  if (!q) return feed;

  return feed.filter((j) => jobMatchesText(j, q));
}
