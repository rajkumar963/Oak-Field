export type NavMenu = { items: { title: string; text: string; href: string }[]; cta: { label: string; href: string } };
export const newsTopics = [
  { label: 'Research Notes', slug: 'research-notes', text: 'In-depth research, methodologies and technical work from our team.' },
  { label: 'Market Insights', slug: 'market-insights', text: 'Our perspectives on market trends, opportunities and structural developments.' },
  { label: 'Quantitative Insights', slug: 'quantitative-insights', text: 'Data-driven observations, charts and quantitative analysis.' },
  { label: 'News & Updates', slug: 'news-and-updates', text: 'Announcements, firm developments and the latest updates from Oak Field.' },
];
export const performanceAreas = [
  { id: 'strategy-performance', title: 'Strategy Performance', text: 'Explore the performance of our systematic trading strategies.', detail: 'Each strategy is judged against what it was designed to capture. We study how it behaves across different market conditions, and whether its live behaviour stays consistent with what research led us to expect.' },
  { id: 'portfolio-diversification', title: 'Portfolio & Diversification', text: 'How systematic strategies work together across different market opportunities.', detail: 'Strategies are combined deliberately. We look at how signals interact, where they overlap, and how the portfolio behaves when an individual component is under pressure.' },
  { id: 'risk-management', title: 'Risk Management', text: 'Understanding risk, drawdowns and the discipline behind our systems.', detail: 'Risk is considered before a strategy is deployed, not after. Exposure, drawdowns and the limits a system operates within are defined explicitly and reviewed as conditions change.' },
  { id: 'research-monitoring', title: 'Research & Monitoring', text: 'From extensive testing to continuous monitoring before and after deployment.', detail: 'A strategy reaches deployment only after testing beyond the data it was built on. Once live, it is monitored against the assumptions behind it, and revisited when those assumptions no longer hold.' },
];
export const enquiryCategories = [
  { label: 'Research & Investment', slug: 'research', text: 'Questions about our research and investment approach.' },
  { label: 'Partnerships', slug: 'partnerships', text: 'Collaboration and shared research opportunities.' },
  { label: 'Careers', slug: 'careers', text: 'Introduce yourself and your interests.' },
  { label: 'General Enquiries', slug: 'general', text: 'Anything else about Oak Field Research.' },
];
// Placeholder profiles until approved ones are supplied. For each person add a name, a portrait (photo, e.g. '/team/name.jpg'
// in /public) and optionally a short mp4 (video). A card without a name shows its role and "Profile coming soon".
export type TeamMember = { name?: string; role: string; photo?: string; video?: string };
export const team: TeamMember[] = [
  { role: 'Quantitative Researcher' },
  { role: 'Research Engineer' },
  { role: 'Python Engineer' },
  { role: 'Algorithm Developer' },
  { role: 'Data Scientist' },
  { role: 'Infrastructure Engineer' },
];
export const navigation: { label: string; href: string; menu?: NavMenu }[] = [
  { label: 'Who We Are', href: '/who-we-are', menu: { items: [
    { title: 'About Oak Field', text: 'Who we are, what we do and how we approach systematic research.', href: '/who-we-are' },
    { title: 'Our People', text: 'Researchers, engineers and builders behind Oak Field.', href: '/who-we-are#people' },
    { title: 'Our Philosophy', text: 'The principles that guide our research, decisions and long-term thinking.', href: '/who-we-are#principles' },
  ], cta: { label: 'Learn more', href: '/who-we-are' } } },
  { label: 'News & Insights', href: '/news-insights', menu: { items: newsTopics.map(t => ({ title: t.label, text: t.text, href: `/news-insights?topic=${t.slug}` })), cta: { label: 'Explore insights', href: '/news-insights' } } },
  { label: 'Our Performance', href: '/our-performance', menu: { items: performanceAreas.map(a => ({ title: a.title, text: a.text, href: `/our-performance#${a.id}` })), cta: { label: 'View performance', href: '/our-performance' } } },
  { label: 'Join Our Team', href: '/join-our-team', menu: { items: [
    { title: 'Careers at Oak Field', text: 'Explore opportunities to work with a research-driven quantitative team.', href: '/join-our-team' },
    { title: 'Life at Oak Field', text: 'Discover our working environment, culture and collaborative approach.', href: '/join-our-team#life' },
    { title: 'Student Opportunities', text: 'Internships and early-career opportunities for students interested in quantitative research and technology.', href: '/join-our-team#students' },
    { title: 'Research & Engineering', text: 'Work across quantitative research, technology, data science and systematic trading systems.', href: '/join-our-team#research-engineering' },
  ], cta: { label: 'View open roles', href: '/join-our-team#open-roles' } } },
  { label: 'Enquiry', href: '/enquiries' },
];
export const office = { label: 'Office', lines: ['International Financial Hub', '6WS3B, Mani Casadona Business Park', 'Newtown, Chakpachuria', 'West Bengal 700160'] };
export const footerColumns: { title: string; links: { label: string; href: string; icon?: 'linkedin' | 'envelope'; external?: boolean }[]; address?: typeof office }[] = [
  { title: 'Explore', links: navigation.map(n => ({ label: n.label, href: n.href })) },
  { title: 'Company', links: [{ label: 'About Oak Field', href: '/who-we-are' }, { label: 'Our People', href: '/who-we-are#people' }, { label: 'Our Philosophy', href: '/who-we-are#principles' }, { label: 'Research Notes', href: '/news-insights?topic=research-notes' }, { label: 'Careers', href: '/join-our-team' }] },
  // LinkedIn: set NEXT_PUBLIC_LINKEDIN_URL to the company page before launch.
  { title: 'Connect', links: [{ label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/', icon: 'linkedin', external: true }, { label: 'Enquiry', href: '/enquiries', icon: 'envelope' }], address: office },
];
export const legalLinks = [{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms of Use', href: '/terms' }, { label: 'Legal / Disclaimer', href: '/disclosures' }, { label: 'Risk Disclosure', href: '/risk-disclosure' }];
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export type Article = { slug: string; title: string; category: string; section: 'tech-blog' | 'news-insights'; date: string; minutes: number; summary: string; visual: 'waves' | 'grid' | 'rings'; paragraphs: { heading: string; text: string }[] };
export const articles: Article[] = [
  { slug: 'the-value-of-a-better-question', title: 'The value of a better question.', category: 'Research Notes', section: 'news-insights', date: '2026-09-10', minutes: 4, summary: 'Why the most useful research often begins by looking at a familiar problem differently.', visual: 'rings', paragraphs: [
    { heading: 'Before the model', text: 'A research question makes an idea testable. Before choosing a method, it helps to state what we expect to observe, what evidence would change our view, and what a useful answer would look like. These choices shape every step that follows.' },
    { heading: 'Make room for a different answer', text: 'An experiment is more informative when it can challenge its starting premise. Writing down alternative explanations before examining results makes it easier to distinguish an interesting pattern from a convincing explanation.' },
    { heading: 'Clarity is a research tool', text: 'A precise question is easier to share, reproduce, and critique. The goal is not to eliminate uncertainty. It is to make uncertainty visible enough that the next experiment has a clear purpose.' } ] },
  { slug: 'building-for-reproducibility', title: 'Good research should be repeatable.', category: 'Engineering', section: 'tech-blog', date: '2026-09-03', minutes: 6, summary: 'A practical look at the systems that make experiments easier to trust, revisit, and improve.', visual: 'grid', paragraphs: [
    { heading: 'An experiment is more than its code', text: 'Reproducing a result requires the data, configuration, dependencies, and evaluation procedure that produced it. A useful experiment record connects these pieces, so another researcher can understand the conditions behind an observation.' },
    { heading: 'Keep the record close to the work', text: 'Versioned inputs and explicit configuration reduce hidden assumptions. Small, well-defined interfaces help separate data preparation from modelling and evaluation. When an experiment changes, its record should make that change easy to inspect.' },
    { heading: 'Design for the next reader', text: 'Useful research infrastructure serves the person returning to an experiment months later. Clear naming, recorded limitations, and a short explanation of the original question can matter as much as sophisticated tooling.' } ] },
  { slug: 'learning-from-uncertainty', title: 'Learning from uncertainty.', category: 'Research Notes', section: 'news-insights', date: '2026-08-21', minutes: 5, summary: 'What changes when uncertainty becomes part of the question, rather than an afterthought.', visual: 'waves', paragraphs: [
    { heading: 'A result has a context', text: 'A model offers a simplified view of a changing world. Its usefulness depends on the observations, assumptions, and conditions behind it. Examining those conditions is part of understanding the result itself.' },
    { heading: 'Look beyond an average', text: 'An aggregate measure can hide variation between periods or environments. Studying where a method behaves differently can reveal more than a single summary. It also helps identify which questions remain open.' },
    { heading: 'Keep evaluating', text: 'Evaluation is an ongoing practice. New observations provide opportunities to revisit assumptions, investigate unexpected behaviour, and decide whether a method still answers the question it was built to address.' } ] },
  { slug: 'from-data-to-an-experiment', title: 'From data to a useful experiment.', category: 'Data science', section: 'tech-blog', date: '2026-08-14', minutes: 5, summary: 'How careful data boundaries and simple baselines make a better starting point.', visual: 'waves', paragraphs: [
    { heading: 'Start with the boundaries', text: 'An experiment needs a clear separation between information available at the time of a decision and information that arrives later. Recording timestamps, transformations, and data availability helps make this distinction explicit.' },
    { heading: 'Give complexity something to beat', text: 'A simple baseline provides a useful reference. More elaborate methods should justify their additional assumptions and operational burden. An experiment that finds no improvement can still produce valuable understanding.' },
    { heading: 'Write down what you learned', text: 'Record the question, the method, the outcome, and the limitations. This makes a result useful to the next person and helps a sequence of experiments accumulate into shared knowledge.' } ] },
];
export const steps = [
  { title: 'Ask', subtitle: 'Start with a clear question.', description: 'Turn an observation into a testable hypothesis. Define what evidence would support it—and what would make us reconsider.', note: 'Observation → hypothesis' },
  { title: 'Understand', subtitle: 'Know the data behind the idea.', description: 'Examine provenance, quality, and timing. Understand what a dataset can tell us, and where its limits begin.', note: 'Raw observations → context' },
  { title: 'Model', subtitle: 'Make the assumptions explicit.', description: 'Build a useful abstraction. Begin with a simple baseline and add complexity only when the evidence justifies it.', note: 'Hypothesis → representation' },
  { title: 'Challenge', subtitle: 'Test beyond the familiar.', description: 'Evaluate across unseen observations and changing conditions. Look closely at failure, sensitivity, and alternative explanations.', note: 'Experiment → evidence' },
  { title: 'Implement', subtitle: 'Connect research and engineering.', description: 'Translate a research idea into a reproducible system with clear interfaces, observability, and deliberate controls.', note: 'Evidence → system' },
  { title: 'Revisit', subtitle: 'Keep asking what has changed.', description: 'Monitor behaviour, revisit assumptions, and use new observations to guide the next question. Research is a continuing process.', note: 'New observations → new questions' },
];
