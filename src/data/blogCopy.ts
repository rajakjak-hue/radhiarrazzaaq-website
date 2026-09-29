const englishBlogCopy = {
  meta: {
    title: 'Education Lead Generation Blog | Radhi Arrazzaaq',
    description: 'Practical notes on paid acquisition, lead quality, CS follow-up, and qualified trial bookings for tutoring and language-course businesses.',
    ogTitle: 'Practical Notes on Education Lead Generation',
    ogDescription: 'Explore practical ideas for improving the journey from paid ads to qualified trial bookings.',
    skipLink: 'Skip to content',
  },
  language: { navLabel: 'Language', english: 'English', indonesian: 'Indonesian' },
  index: {
    eyebrow: 'FIELD NOTES',
    title: 'Practical Notes on Education Lead Generation',
    intro: 'Paid acquisition, lead quality, CS follow-up, and the journey from the first click to a qualified trial booking.',
    topics: ['Lead Quality', 'Lead-to-Trial Operations', 'Education Paid Acquisition'],
    featured: 'LATEST NOTE',
    readArticle: 'Read note',
  },
  article: {
    back: 'Back to Blog',
    author: 'Radhi Arrazzaaq',
    ctaPrompt: 'Not sure where your leads are getting lost?',
    ctaSupporting: "Let's look at the path from the first click to the trial booking.",
    ctaButton: 'Discuss Your Lead Flow',
    ctaMessage: 'Hi Radhi! I run an education business and would like to discuss where leads may be getting lost in our current flow.',
  },
};

export type BlogCopy = typeof englishBlogCopy;

const indonesianBlogCopy: BlogCopy = {
  meta: {
    title: 'Blog Lead Generation Bisnis Edukasi | Radhi Arrazzaaq',
    description: 'Catatan praktis tentang iklan berbayar, kualitas lead, follow-up CS, dan booking trial berkualitas untuk bisnis bimbingan belajar dan kursus bahasa.',
    ogTitle: 'Catatan Praktis tentang Lead Generation Bisnis Edukasi',
    ogDescription: 'Pelajari cara memperbaiki perjalanan dari iklan berbayar hingga booking trial berkualitas.',
    skipLink: 'Langsung ke konten',
  },
  language: { navLabel: 'Bahasa', english: 'Bahasa Inggris', indonesian: 'Bahasa Indonesia' },
  index: {
    eyebrow: 'CATATAN LAPANGAN',
    title: 'Catatan Praktis tentang Lead Generation untuk Bisnis Edukasi',
    intro: 'Iklan berbayar, kualitas lead, follow-up CS, dan perjalanan dari klik pertama hingga booking trial berkualitas.',
    topics: ['Kualitas Lead', 'Operasional Lead ke Trial', 'Iklan Berbayar Edukasi'],
    featured: 'CATATAN TERBARU',
    readArticle: 'Baca catatan',
  },
  article: {
    back: 'Kembali ke Blog',
    author: 'Radhi Arrazzaaq',
    ctaPrompt: 'Belum tahu di bagian mana lead Anda hilang?',
    ctaSupporting: 'Mari lihat alurnya dari klik pertama hingga booking trial.',
    ctaButton: 'Bahas Alur Lead Bisnis Anda',
    ctaMessage: 'Halo Radhi! Saya menjalankan bisnis edukasi dan ingin membahas di bagian mana lead mungkin hilang dari alur kami saat ini.',
  },
};

export const blogCopy: Record<'en' | 'id', BlogCopy> = { en: englishBlogCopy, id: indonesianBlogCopy };
