const PROJECT_ICONS = {
  car: '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>',
  'shield-check': '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  'book-open': '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>',
  bot: '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
  'heart-pulse': '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
  plane: '<svg viewBox="0 0 24 24" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
};

function projectIcon(name) {
  return PROJECT_ICONS[name] || PROJECT_ICONS.bot;
}

const PROJECT_COVER_FALLBACKS = {
  carprice: 'images/projects/carprice.svg',
  placepro: 'images/projects/placepro.svg',
  promptcraft: 'images/projects/promptcraft.svg',
  truthguard: 'images/projects/truthguard.svg',
  sharda: 'images/projects/sharda-setu.svg',
  nexus: 'images/projects/nexus-ai.svg',
  medic: 'images/projects/medic-for-you.svg',
  tripgo: 'images/projects/tripgo.svg',
};

function projectCoverFallback(id) {
  return PROJECT_COVER_FALLBACKS[id] || 'images/projects/carprice.svg';
}

function projectLiveLink(p, extraClass = '') {
  if (!p.live) return '';
  return `<a href="${p.live}" target="_blank" rel="noopener" class="project-live-link ${extraClass}" onclick="event.stopPropagation()">click me</a>`;
}

const PORTFOLIO = {
  name: 'Shantanu Dey',
  roles: ['Computer Science Engineer', 'Full Stack Developer', 'Data Analyst', 'AI Enthusiast', 'Problem Solver'],
  summary: 'Computer Science Engineering undergraduate with proficiency in Python, SQL, HTML, CSS, JavaScript, and experience in building web applications and statistical analysis. Skilled in data cleaning, visualization, and web development with proven success in delivering actionable insights from academic projects. Eager to apply software engineering, analytical, web development, and problem-solving skills to support data-driven decision-making.',
  email: 'tanishdey8730@gmail.com',
  phone: '+91 6033110140',
  phoneTel: '+916033110140',
  location: 'Kolkata, India',
  resumeUrl: 'resume.pdf',
  resumeDownloadName: 'Resume_Shantanu_Dey.pdf',
  profilePhoto: 'images/profile.png',
  github: 'https://github.com/tanishdey8730-web',
  linkedin: 'https://www.linkedin.com/in/shantanu-dey-86715b284',
  leetcode: 'https://leetcode.com/u/shantanu_dey',
  hackerrank: 'https://www.hackerrank.com/profile/shantanu_dey',
  geeksforgeeks: 'https://auth.geeksforgeeks.org/user/shantanu_dey',
  githubUsername: 'tanishdey8730-web',
  codingPlatforms: ['LeetCode', 'HackerRank', 'GeeksforGeeks'],
  education: [
    { degree: 'B.Tech in Computer Science Engineering', school: 'Sister Nivedita University', period: 'June 2023 – July 2027', score: 'CGPA: 7.00' },
    { degree: 'Class XII (CBSE)', school: 'Kendriya Vidyalaya EAC Upper Shillong', period: 'Jan 2022 – May 2023', score: 'Percentage: 74.8%' },
    { degree: 'Class X (CBSE)', school: 'Kendriya Vidyalaya EAC Upper Shillong', period: 'Jan 2020 – Aug 2021', score: 'Percentage: 79%' },
  ],
  highlights: [
    'B.Tech CSE at Sister Nivedita University (CGPA 7.00)',
    'Full Stack Developer & Data Analyst',
    'Python, SQL, JavaScript & React.js',
    'National Level Football Player (U-19)',
    'National Level Athlete — 100m & 200m Sprint',
    'College Football Team Captain',
    'Musical Instrument Player — Guitar & Drumset',
    'Leadership through Sports & Team Management',
  ],
  stats: [
    { label: 'Projects Built', value: 8, suffix: '' },
    { label: 'Technologies', value: 25, suffix: '+' },
    { label: 'Certifications', value: 25, suffix: '+' },
    { label: 'Internships', value: 4, suffix: '' },
  ],
  skills: [
    { title: 'Programming Languages', color: '#2563EB', items: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript'] },
    { title: 'Web Development', color: '#60A5FA', items: ['HTML', 'CSS', 'React.js', 'Node.js'] },
    { title: 'Data Analysis & ML', color: '#818CF8', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Excel', 'MySQL', 'Machine Learning', 'Statistical Analysis'] },
    { title: 'Design & Tools', color: '#34D399', items: ['UI/UX Design', 'Figma', 'Jupyter Notebook', 'VS Code', 'Git', 'GitHub'] },
    { title: 'Core Skills', color: '#F472B6', items: ['Data Structures & Algorithms', 'Problem Solving', 'Software Development'] },
  ],
  softSkills: ['Adaptability', 'Problem Solving', 'Collaboration', 'Attention to Detail', 'Quick Learner', 'Leadership', 'Discipline'],
  experience: [
    { role: 'Frontend Developer', company: 'PAWMAX', period: 'Ongoing', desc: 'Building responsive, performance-optimized UI components and integrating REST APIs for a modern grooming platform.', tags: ['React', 'HTML', 'CSS', 'JavaScript'] },
    { role: 'Gen AI Prompt Engineer', company: 'RTNS (RT Network) × iMerit', period: '1 Month', desc: 'Designed and optimized prompts for generative AI workflows, improving output quality and consistency across LLM-powered applications.', tags: ['Generative AI', 'Prompt Engineering', 'LLMs'] },
    { role: 'AWS DevOps Intern', company: 'XPMC', period: '3 Months', desc: 'Managed CI/CD pipelines, cloud infrastructure on AWS, and deployment automation for scalable applications.', tags: ['AWS', 'DevOps', 'CI/CD', 'Cloud'] },
    { role: 'Data Analytics Virtual Experience', company: 'Deloitte (Simulation)', period: 'Completed', desc: 'Completed data analytics simulation analyzing business datasets, cleaning data, and delivering actionable insights for decision-making.', tags: ['Data Analysis', 'Excel', 'Visualization', 'Statistics'] },
  ],
  projects: [
    {
      id: 'carprice',
      title: 'Used Car Price Analysis',
      cat: 'Data Science',
      desc: 'Analyzed 28 years of automotive sales data (1992–2020) with 4,340+ records across 29 car brands. Engineered Vehicle Age and Brand features, identified Diesel resale trends and Manual transmission dominance (89%), and built a Random Forest model for price prediction.',
      img: 'images/projects/carprice.jpg',
      icon: 'car',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      features: ['4,340+ Records · 29 Brands', 'Random Forest Model', 'Vehicle Age Feature Engineering', 'Depreciation Trend Visualization', 'Diesel vs Petrol Resale Analysis', 'Manual Transmission Market Insights'],
      github: 'https://github.com/tanishdey8730-web/used-car-prediction',
      live: 'https://tanishdey8730-web.github.io/used-car-prediction/',
      stats: [{ l: 'Records', v: '4340+' }, { l: 'Years', v: '28' }, { l: 'Brands', v: '29' }],
    },
    {
      id: 'placepro',
      title: 'PlacePro AI',
      cat: 'AI/ML',
      desc: 'AI Placement Preparation Platform helping students ace placements with coding practice, aptitude prep, ATS resume analysis, mock interviews, and placement assistance.',
      img: 'images/projects/placepro.jpg',
      icon: 'briefcase',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'NLP'],
      features: ['Coding Practice', 'Aptitude Preparation', 'ATS Resume Analysis', 'Mock Interviews', 'Placement Assistance', 'Career Guidance'],
      github: 'https://github.com/tanishdey8730-web/ai-resume-analyzer',
      live: 'https://place-pro-web.vercel.app/',
      stats: [{ l: 'Modules', v: '6' }, { l: 'Platform', v: 'AI/ML' }, { l: 'Focus', v: 'Placements' }],
    },
    {
      id: 'promptcraft',
      title: 'PromptCraft',
      cat: 'AI/ML',
      desc: 'AI-Powered Image Generation Platform using OpenAI DALL·E 3. Converts text prompts into AI-generated visuals through a full-stack image generation application.',
      img: 'images/projects/promptcraft.jpg',
      icon: 'sparkles',
      tech: ['React', 'OpenAI DALL·E 3', 'Node.js', 'TypeScript'],
      features: ['DALL·E 3 Integration', 'Text-to-Image Generation', 'Prompt Templates', 'Gallery Management', 'Full-Stack Architecture'],
      github: 'https://github.com/tanishdey8730-web',
      stats: [{ l: 'Model', v: 'DALL·E 3' }, { l: 'Type', v: 'Full Stack' }, { l: 'AI', v: 'Generative' }],
    },
    {
      id: 'truthguard',
      title: 'TruthGuard AI',
      cat: 'AI/ML',
      desc: 'AI-Powered Cybersecurity & Misinformation Detection Platform with fake news detection, deepfake detection, AI-generated content detection, and analytics dashboard.',
      img: 'images/projects/truthguard.jpg',
      icon: 'shield-check',
      tech: ['Python', 'TensorFlow', 'React', 'Flask', 'AI Analytics'],
      features: ['Fake News Detection', 'Deepfake Detection', 'AI Content Detection', 'Analytics Dashboard', 'Real-time Threat Monitoring'],
      github: 'https://github.com/tanishdey8730-web',
      stats: [{ l: 'Modules', v: '4' }, { l: 'Focus', v: 'Security' }, { l: 'AI', v: 'Detection' }],
    },
    {
      id: 'sharda',
      title: 'Sharda Setu (SIH 2025)',
      cat: 'Full Stack',
      desc: 'Low-Bandwidth EdTech Platform for rural education. Reduced page load size by 60% with Service Workers, text-first UI, government exam prep, study materials, and career roadmaps.',
      img: 'images/projects/sharda-setu.jpg',
      icon: 'book-open',
      tech: ['React', 'Node.js', 'PWA', 'Service Workers', 'MongoDB'],
      features: ['60% Smaller Page Load', 'Service Workers', 'Text-First UI', 'Government Exam Prep', 'Study Materials', 'Career Roadmaps'],
      github: 'https://github.com/tanishdey8730-web',
      live: 'https://tanishdey8730-web.github.io/shardasetu01/',
      stats: [{ l: 'SIH', v: '2025' }, { l: 'Load ↓', v: '60%' }, { l: 'Target', v: 'Rural Ed' }],
    },
    {
      id: 'nexus',
      title: 'NEXUS AI',
      cat: 'AI/ML',
      desc: 'AI Chatbot Platform with real-time conversational AI assistant built using modern web technologies and an interactive UI.',
      img: 'images/projects/nexus-ai.jpg',
      icon: 'bot',
      tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'Redis'],
      features: ['Real-time Conversational AI', 'Interactive UI', 'Modern Web Stack', 'Multi-turn Conversations', 'Streaming Responses'],
      github: 'https://github.com/tanishdey8730-web',
      live: 'https://tanishdey8730-web.github.io/AI-CHATBOT_NEXUS/',
      stats: [{ l: 'Type', v: 'Chatbot' }, { l: 'UI', v: 'Interactive' }, { l: 'Stack', v: 'Modern' }],
    },
    {
      id: 'medic',
      title: 'Medic For You',
      cat: 'AI/ML',
      desc: 'AI-Powered Medical Assistance Platform providing smart healthcare support and user-friendly healthcare solutions through intelligent conversations.',
      img: 'images/projects/medic-for-you.jpg',
      icon: 'heart-pulse',
      tech: ['React', 'Python', 'FastAPI', 'AI/NLP', 'Firebase'],
      features: ['Smart Healthcare Support', 'Symptom Analysis', 'Health Query Responses', 'User-Friendly Interface', 'AI Medical Assistant'],
      github: 'https://github.com/tanishdey8730-web/Medic_for_u',
      live: 'https://tanishdey8730-web.github.io/Medic_for_u/',
      stats: [{ l: 'Focus', v: 'Healthcare' }, { l: 'AI', v: 'Powered' }, { l: 'UX', v: 'Friendly' }],
    },
    {
      id: 'tripgo',
      title: 'TripGo (SIH 2024)',
      cat: 'Full Stack',
      desc: 'Smart travel planning platform for SIH 2024 with hotel booking, ticket reservation, and comprehensive travel management features.',
      img: 'images/projects/tripgo.jpg',
      icon: 'plane',
      tech: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Stripe'],
      features: ['Hotel Booking', 'Ticket Reservation', 'Travel Management', 'Smart Planning', 'SIH 2024 Project'],
      github: 'https://github.com/tanishdey8730-web/tripgoo',
      live: 'https://tanishdey8730-web.github.io/tripgoo/',
      stats: [{ l: 'SIH', v: '2024' }, { l: 'Hotels', v: 'Booking' }, { l: 'Tickets', v: 'Reserve' }],
    },
  ],
  profiles: [
    { name: 'LeetCode', url: 'https://leetcode.com/u/shantanu_dey', color: '#FFA116', stats: { platform: 'Active', focus: 'DSA' } },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/shantanu_dey', color: '#00EA64', stats: { platform: 'Active', focus: 'Coding' } },
    { name: 'GeeksforGeeks', url: 'https://auth.geeksforgeeks.org/user/shantanu_dey', color: '#2F8D46', stats: { platform: 'Active', focus: 'DSA' } },
  ],
  certs: [
    { title: 'Trees, Graphs Basics', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80' },
    { title: 'Foundation DSA', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
    { title: 'Advanced DSA', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
    { title: 'RSA and Quantum Algorithms', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80' },
    { title: 'Dynamic Programming', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
    { title: 'Greedy Algorithms for Sorting', issuer: 'University of Colorado Boulder', year: '2024', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
    { title: 'Data Analytics Job Simulation', issuer: 'Deloitte', year: '2024', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
    { title: 'Internship Certificate', issuer: 'XPMC', year: '2024', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80' },
    { title: 'Python Programming Completion', issuer: 'Code With Harry', year: '2024', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80' },
    { title: 'Data Science Completion', issuer: 'Code With Harry', year: '2024', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
    { title: 'Internship Certificate', issuer: 'PAWMAX', year: '2024', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
    { title: 'Athlete Certificate', issuer: 'National Sports', year: '2024', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba1191?w=400&q=80' },
    { title: 'Design Thinking: Insights to Inspiration', issuer: 'Instructor Network (Coursera)', year: '2024', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
    { title: 'Active Listening: Enhancing Communication', issuer: 'University of Virginia (Coursera)', year: '2024', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80' },
    { title: 'Generative AI', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80' },
    { title: 'Introduction to AI', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80' },
    { title: 'Machine Learning with Python', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80' },
    { title: 'Prompt Engineering Basics', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1535378917042-10a22c959517?w=400&q=80' },
    { title: 'Generative AI: Introduction & Applications', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80' },
    { title: 'Python for Data Science, AI & Development', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80' },
    { title: 'LLM Architecture & Data Preparation', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80' },
    { title: 'Deep Learning & Neural Networks with Keras', issuer: 'IBM', year: '2024', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80' },
  ],
  achievements: [
    { icon: '⚽', title: 'National Level Football Player', sub: 'U-19 Category' },
    { icon: '🏃', title: 'National Level Athlete', sub: '100m & 200m Sprint' },
    { icon: '🏆', title: 'College Football Team Captain', sub: 'Leadership & Team Management' },
    { icon: '🎸', title: 'Musical Instrument Player', sub: 'Guitar & Drumset' },
    { icon: '🎯', title: 'Leadership Experience', sub: 'Sports & Team Management' },
    { icon: '🎓', title: '25+ Professional Certifications', sub: 'IBM · Coursera · Deloitte · XPMC' },
  ],
  testimonials: [
    { name: 'Dr. Ananya Sharma', role: 'Professor, Sister Nivedita University', text: 'Shantanu demonstrates exceptional problem-solving abilities and consistently delivers high-quality projects. His passion for AI, data analytics, and full stack development is truly remarkable.', avatar: 'AS' },
    { name: 'Rahul Verma', role: 'Tech Lead, PAWMAX', text: 'Working with Shantanu was a pleasure. He brings creative solutions, clean code, and a strong work ethic to every sprint. A developer who truly understands product thinking.', avatar: 'RV' },
    { name: 'Priya Kapoor', role: 'Mentor, RTNS × iMerit', text: 'His prompt engineering skills and understanding of generative AI workflows exceeded our expectations. Shantanu is a fast learner with impressive technical depth.', avatar: 'PK' },
  ],
  languages: [
    { name: 'Python', pct: 30, color: '#3776AB' },
    { name: 'JavaScript', pct: 25, color: '#F7DF1E' },
    { name: 'HTML/CSS', pct: 20, color: '#E34F26' },
    { name: 'Java', pct: 15, color: '#ED8B00' },
    { name: 'Other', pct: 10, color: '#6B7280' },
  ],
};

const CATEGORIES = ['All', 'AI/ML', 'Full Stack', 'Data Science'];
let activeCategory = 'All';
let searchQuery = '';
let certIndex = 0;
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

document.addEventListener('DOMContentLoaded', init);

function init() {
  renderAbout();
  renderContactInfo();
  renderEducation();
  renderStats();
  renderSkills();
  renderSoftSkills();
  renderExperience();
  renderProjects();
  renderProfiles();
  renderAchievements();
  renderTestimonials();
  renderCert();
  renderLangBars();
  initLoader();
  initNavbar();
  initTheme();
  initScrollEffects();
  initTyping();
  initParticles();
  initAmbientLighting();
  initProjectFilters();
  initCertSlider();
  initCommandPalette();
  initChat();
  initContactForm();
  initCounters();
  initProfile3d();
  initResumeModal();
}

function renderContactInfo() {
  const mailto = `mailto:${PORTFOLIO.email}`;
  const heroEmail = document.getElementById('hero-email-link');
  const contactEmail = document.getElementById('contact-email-link');
  const contactPhone = document.getElementById('contact-phone-link');
  const footerEmail = document.getElementById('footer-email-link');

  if (heroEmail) heroEmail.href = mailto;
  if (contactEmail) {
    contactEmail.href = mailto;
    contactEmail.textContent = PORTFOLIO.email;
  }
  if (contactPhone) {
    contactPhone.href = `tel:${PORTFOLIO.phoneTel}`;
    contactPhone.textContent = PORTFOLIO.phone;
  }
  if (footerEmail) {
    footerEmail.href = mailto;
    footerEmail.textContent = PORTFOLIO.email;
  }
}

function renderAbout() {
  const summary = document.getElementById('about-summary');
  const highlights = document.getElementById('about-highlights');
  const heroDesc = document.getElementById('hero-summary');
  const profileImg = document.getElementById('profile-photo');
  const profileName = document.querySelector('.hero-profile-name');
  const profileRole = document.querySelector('.hero-profile-role');
  if (summary) summary.textContent = PORTFOLIO.summary;
  if (heroDesc) heroDesc.textContent = PORTFOLIO.summary;
  if (profileImg) profileImg.src = PORTFOLIO.profilePhoto;
  if (profileName) profileName.textContent = PORTFOLIO.name;
  if (profileRole) profileRole.textContent = PORTFOLIO.roles.slice(0, 2).join(' · ');
  if (highlights) {
    highlights.innerHTML = PORTFOLIO.highlights.map(h => `
      <div class="highlight-item">
        <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
        ${h}
      </div>`).join('');
  }
}

function renderEducation() {
  const el = document.getElementById('education-list');
  if (!el) return;
  el.innerHTML = PORTFOLIO.education.map(e => `
    <div class="edu-item glass reveal">
      <div class="edu-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>
      </div>
      <div>
        <p class="edu-degree">${e.degree}</p>
        <p class="edu-school">${e.school}</p>
        <p class="edu-meta">${e.period} · ${e.score}</p>
      </div>
    </div>`).join('');
}

function renderStats() {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = PORTFOLIO.stats.map(s => `
    <div class="stat-card glass reveal">
      <div class="stat-value gradient-text" data-count="${s.value}" data-suffix="${s.suffix}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
}

function renderSoftSkills() {
  const el = document.getElementById('soft-skills-grid');
  if (!el) return;
  el.innerHTML = PORTFOLIO.softSkills.map(s => `
    <span class="soft-skill-tag glass reveal">${s}</span>`).join('');
}

function renderLangBars() {
  const el = document.getElementById('lang-bars');
  if (!el) return;
  el.innerHTML = PORTFOLIO.languages.map(l => `
    <div class="lang-bar-wrap">
      <div class="lang-bar-header"><span>${l.name}</span><span>${l.pct}%</span></div>
      <div class="lang-bar"><div class="lang-fill" data-pct="${l.pct}" style="background:${l.color}"></div></div>
    </div>`).join('');
}

function renderSkills() {
  const el = document.getElementById('skills-grid');
  if (!el) return;
  el.innerHTML = PORTFOLIO.skills.map(s => `
    <div class="skill-card glass reveal">
      <h3 class="skill-title"><span class="skill-dot" style="background:${s.color};box-shadow:0 0 12px ${s.color}"></span>${s.title}</h3>
      <div class="skill-tags">${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}</div>
    </div>`).join('');
}

function renderExperience() {
  const el = document.getElementById('timeline');
  if (!el) return;
  el.innerHTML = PORTFOLIO.experience.map(e => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg></div>
      <div class="timeline-card glass">
        <span class="timeline-period">${e.period}</span>
        <h3 class="timeline-role">${e.role}</h3>
        <p class="timeline-company">${e.company}</p>
        <p class="timeline-desc">${e.desc}</p>
        <div class="tag-row">${e.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  const filtered = PORTFOLIO.projects.filter(p => {
    const matchCat = activeCategory === 'All' || p.cat === activeCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery) || p.tech.some(t => t.toLowerCase().includes(searchQuery));
    return matchCat && matchSearch;
  });
  el.innerHTML = filtered.map(p => `
    <article class="project-card glass reveal" data-id="${p.id}">
      <div class="project-img">
        <img src="${p.img}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${projectCoverFallback(p.id)}'">
        <div class="project-img-overlay"></div>
        <div class="project-icon-hero" aria-hidden="true">${projectIcon(p.icon)}</div>
        <span class="project-cat">${p.cat}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title} ${projectLiveLink(p)}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">${p.tech.slice(0,4).map(t => `<span>${t}</span>`).join('')}</div>
        <div class="project-stats">${p.stats.slice(0,2).map(s => `<div><div class="project-stat-val">${s.v}</div><div class="project-stat-lbl">${s.l}</div></div>`).join('')}</div>
      </div>
    </article>`).join('') || '<p style="text-align:center;color:var(--text-muted);grid-column:1/-1;padding:3rem">No projects found.</p>';
  el.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => openModal(card.dataset.id)));
  observeReveals(el);
}

function renderProfiles() {
  const el = document.getElementById('profiles-grid');
  const badge = document.getElementById('coding-badge');
  if (badge) {
    badge.textContent = '🏆 ' + PORTFOLIO.codingPlatforms.join(' · ');
    const sub = document.getElementById('coding-badge-sub');
    if (sub) sub.textContent = '🏆 ' + PORTFOLIO.codingPlatforms.join(' · ');
  }
  if (!el) return;
  el.innerHTML = PORTFOLIO.profiles.map(p => `
    <a href="${p.url}" target="_blank" rel="noopener" class="profile-card glass reveal">
      <div class="profile-icon" style="background:${p.color}">${p.name.charAt(0)}</div>
      <h3>${p.name}</h3>
      <p style="font-size:0.875rem;color:var(--text-muted);margin-bottom:0.5rem">Competitive Programming</p>
      <div class="profile-stats">${Object.entries(p.stats).map(([k,v]) => `<div class="profile-stat"><div style="font-weight:700;color:${p.color}">${v}</div><div style="font-size:0.75rem;color:var(--text-muted);text-transform:capitalize">${k}</div></div>`).join('')}</div>
      <span style="font-size:0.875rem;color:var(--primary-light)">View Profile →</span>
    </a>`).join('');
}

function renderAchievements() {
  const el = document.getElementById('achievements-grid');
  if (!el) return;
  el.innerHTML = PORTFOLIO.achievements.map(a => `
    <div class="achievement-card glass reveal">
      <div class="achievement-icon">${a.icon}</div>
      <h3 style="font-weight:700;margin-bottom:0.5rem">${a.title}</h3>
      <p style="font-size:0.875rem;color:var(--text-muted)">${a.sub}</p>
    </div>`).join('');
}

function renderTestimonials() {
  const el = document.getElementById('testimonials-grid');
  if (!el) return;
  el.innerHTML = PORTFOLIO.testimonials.map(t => `
    <div class="testimonial-card glass reveal">
      <div class="testimonial-quote">"</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.avatar}</div>
        <div><p style="font-size:0.875rem;font-weight:600">${t.name}</p><p style="font-size:0.75rem;color:var(--text-muted)">${t.role}</p></div>
      </div>
    </div>`).join('');
}

function renderCert() {
  const c = PORTFOLIO.certs[certIndex];
  const card = document.getElementById('cert-card');
  const counter = document.getElementById('cert-counter');
  const dots = document.getElementById('cert-dots');
  if (!card) return;
  card.innerHTML = `
    <div class="cert-img"><img src="${c.img}" alt="${c.title}"></div>
    <div class="cert-info">
      <div style="width:3rem;height:3rem;border-radius:0.75rem;background:rgba(37,99,235,0.2);display:flex;align-items:center;justify-content:center;color:var(--primary-light);margin-bottom:1rem">🏅</div>
      <h3 style="font-size:1.5rem;font-weight:700;margin-bottom:0.5rem">${c.title}</h3>
      <p style="color:var(--primary-light);margin-bottom:0.25rem">${c.issuer}</p>
      <p style="font-size:0.875rem;color:var(--text-muted)">Issued ${c.year}</p>
    </div>`;
  if (counter) counter.textContent = `${certIndex + 1} / ${PORTFOLIO.certs.length}`;
  if (dots) {
    const maxDots = Math.min(PORTFOLIO.certs.length, 8);
    dots.innerHTML = Array.from({ length: maxDots }, (_, i) => {
      const idx = Math.floor(certIndex / PORTFOLIO.certs.length * maxDots);
      return `<button class="cert-dot${i === idx % maxDots ? ' active' : ''}" data-i="${i}" aria-label="Certificate group ${i+1}"></button>`;
    }).join('');
  }
}

function openModal(id) {
  const p = PORTFOLIO.projects.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="modal-img">
      <img src="${p.img}" alt="" onerror="this.onerror=null;this.src='${projectCoverFallback(p.id)}'">
      <div class="project-img-overlay"></div>
      <div class="project-icon-hero project-icon-hero--modal">${projectIcon(p.icon)}</div>
      <button class="modal-close" id="modal-close" aria-label="Close">✕</button>
    </div>
    <div class="modal-content">
      <span class="project-cat" style="position:static;display:inline-block;margin-bottom:0.5rem">${p.cat}</span>
      <h2 class="modal-project-title">${p.title} ${projectLiveLink(p, 'project-live-link--modal')}</h2>
      <p style="color:var(--text-muted);margin-bottom:1.5rem;line-height:1.6">${p.desc}</p>
      <div class="modal-stats">${p.stats.map(s => `<div class="modal-stat"><div class="gradient-text" style="font-size:1.25rem;font-weight:700">${s.v}</div><div style="font-size:0.75rem;color:var(--text-muted)">${s.l}</div></div>`).join('')}</div>
      <h4 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.5rem">Tech Stack</h4>
      <div class="tag-row" style="margin-bottom:1.5rem">${p.tech.map(t => `<span class="tag" style="background:rgba(37,99,235,0.1);border-color:rgba(37,99,235,0.2);color:var(--primary-light)">${t}</span>`).join('')}</div>
      <h4 style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--text-muted);margin-bottom:0.5rem">Features</h4>
      <ul style="margin-bottom:1.5rem;display:grid;gap:0.5rem;list-style:none">${p.features.map(f => `<li style="font-size:0.875rem;color:var(--text-muted)">★ ${f}</li>`).join('')}</ul>
      <div class="btn-row" style="margin:0">${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn btn-outline">GitHub</a>` : ''}${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-primary">Visit Live Site</a>` : ''}</div>
    </div>`;
  overlay.classList.add('open');
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.onclick = e => { if (e.target === overlay) closeModal(); };
}

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');
}

function observeReveals(root) {
  const scope = root && root.querySelectorAll ? root : document;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '-50px' });
  scope.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-fill');
  let p = 0;
  const interval = setInterval(() => {
    p += 2;
    fill.style.width = p + '%';
    if (p >= 100) { clearInterval(interval); setTimeout(() => loader.classList.add('hidden'), 300); }
  }, 30);
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobile-menu');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 500);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('scroll-progress').style.width = (docH > 0 ? window.scrollY / docH : 0) * 100 + '%';
  });
  document.getElementById('menu-btn').addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initTheme() {
  const btn = document.getElementById('theme-btn');
  if (localStorage.getItem('theme') === 'light') document.body.classList.add('light');
  btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
}

function initScrollEffects() {
  observeReveals(document);
  const langObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.lang-fill').forEach(bar => { bar.style.width = bar.dataset.pct + '%'; });
        langObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  const langSection = document.getElementById('lang-section');
  if (langSection) langObserver.observe(langSection);
}

function initTyping() {
  const el = document.getElementById('typing-text');
  if (!el) return;
  function type() {
    const word = PORTFOLIO.roles[typingIndex];
    if (!isDeleting) {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) setTimeout(() => { isDeleting = true; type(); }, 2000);
      else setTimeout(type, 80);
    } else {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) { isDeleting = false; typingIndex = (typingIndex + 1) % PORTFOLIO.roles.length; setTimeout(type, 80); }
      else setTimeout(type, 40);
    }
  }
  type();
}

function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = reducedMotion ? 20 : 55;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() * 1.8 + 0.4,
      sx: (Math.random() - 0.5) * (reducedMotion ? 0.15 : 0.35),
      sy: (Math.random() - 0.5) * (reducedMotion ? 0.15 : 0.35),
      o: Math.random() * 0.35 + 0.08,
      hue: Math.random() > 0.5 ? '96,165,250' : '56,189,248',
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.sx;
      p.y += p.sy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      if (!reducedMotion) {
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(96,165,250,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  };
  resize();
  draw();
  window.addEventListener('resize', resize);
}

function initAmbientLighting() {
  const bg = document.getElementById('bg-effects');
  if (!bg) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let targetX = window.innerWidth * 0.5;
  let targetY = window.innerHeight * 0.35;
  let currentX = targetX;
  let currentY = targetY;
  let rafId = null;

  const setMouse = (x, y) => {
    targetX = x;
    targetY = y;
  };

  const animateSpotlight = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    bg.style.setProperty('--mouse-x', `${currentX}px`);
    bg.style.setProperty('--mouse-y', `${currentY}px`);
    rafId = requestAnimationFrame(animateSpotlight);
  };

  const onScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    bg.style.setProperty('--scroll-glow', progress.toFixed(3));
  };

  if (!reducedMotion) {
    window.addEventListener('mousemove', (e) => setMouse(e.clientX, e.clientY), { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    animateSpotlight();
  } else {
    bg.style.setProperty('--mouse-x', `${window.innerWidth * 0.5}px`);
    bg.style.setProperty('--mouse-y', `${window.innerHeight * 0.35}px`);
  }
}

function initProjectFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderProjects();
    });
  });
  document.getElementById('project-search').addEventListener('input', e => {
    searchQuery = e.target.value.toLowerCase();
    renderProjects();
  });
}

function initCertSlider() {
  document.getElementById('cert-prev').addEventListener('click', () => { certIndex = (certIndex - 1 + PORTFOLIO.certs.length) % PORTFOLIO.certs.length; renderCert(); });
  document.getElementById('cert-next').addEventListener('click', () => { certIndex = (certIndex + 1) % PORTFOLIO.certs.length; renderCert(); });
}

function initCommandPalette() {
  const palette = document.getElementById('command-palette');
  const input = document.getElementById('palette-input');
  const results = document.getElementById('palette-results');
  const navTargets = ['#home','#about','#education','#skills','#experience','#projects','#github','#profiles','#certifications','#achievements','#contact'];
  const navLabels = ['Home','About','Education','Skills','Experience','Projects','GitHub','Coding Profiles','Certifications','Achievements','Contact'];
  const commands = [
    ...navLabels.map((l,i) => ({ label: l, group: 'Navigation', action: () => document.querySelector(navTargets[i]).scrollIntoView({ behavior: 'smooth' }) })),
    ...PORTFOLIO.projects.map(p => ({ label: p.title, group: 'Projects', action: () => { document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => openModal(p.id), 400); } })),
    { label: 'Download Resume', group: 'Actions', action: () => openResumeModal() },
    { label: 'Send Email', group: 'Social', action: () => window.location.href = 'mailto:' + PORTFOLIO.email },
  ];
  function renderResults(q = '') {
    const filtered = commands.filter(c => c.label.toLowerCase().includes(q.toLowerCase()));
    results.innerHTML = filtered.map((c, i) => `<button class="palette-item${i===0?' active':''}" data-i="${i}"><span><strong>${c.label}</strong> <span style="font-size:0.75rem;opacity:0.6">${c.group}</span></span>→</button>`).join('') || '<p style="padding:2rem;text-align:center;color:var(--text-muted)">No results</p>';
    results.querySelectorAll('.palette-item').forEach(btn => btn.addEventListener('click', () => { filtered[+btn.dataset.i].action(); closePalette(); }));
    results._filtered = filtered;
  }
  function openPalette() { palette.classList.add('open'); input.value = ''; renderResults(); input.focus(); }
  function closePalette() { palette.classList.remove('open'); }
  document.getElementById('cmd-open').addEventListener('click', openPalette);
  palette.addEventListener('click', e => { if (e.target === palette) closePalette(); });
  input.addEventListener('input', () => renderResults(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Escape') closePalette(); if (e.key === 'Enter' && results._filtered?.[0]) { results._filtered[0].action(); closePalette(); } });
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); palette.classList.contains('open') ? closePalette() : openPalette(); } });
}

function initChat() {
  const toggle = document.getElementById('chat-toggle');
  const panel = document.getElementById('chat-panel');
  const close = document.getElementById('chat-close');
  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  const messages = document.getElementById('chat-messages');
  toggle.addEventListener('click', () => { panel.classList.add('open'); toggle.style.display = 'none'; });
  close.addEventListener('click', () => { panel.classList.remove('open'); toggle.style.display = 'flex'; });
  function reply(text) {
    const lower = text.toLowerCase();
    if (/skill|tech|stack/.test(lower)) return `Skills: ${PORTFOLIO.skills.flatMap(s=>s.items).slice(0,12).join(', ')}, and more. Soft skills: ${PORTFOLIO.softSkills.join(', ')}.`;
    if (/project/.test(lower)) return `Projects: ${PORTFOLIO.projects.map(p=>p.title).join(', ')}.`;
    if (/experience|work|intern/.test(lower)) return `Experience: PAWMAX (Frontend, Ongoing), RTNS × iMerit (Gen AI, 1 Month), XPMC (AWS DevOps, 3 Months), Deloitte Data Analytics Simulation.`;
    if (/education|university|cgpa/.test(lower)) return PORTFOLIO.education.map(e => `${e.degree} at ${e.school} (${e.score})`).join('. ');
    if (/cert/.test(lower)) return `${PORTFOLIO.certs.length}+ certifications from IBM, Coursera, Deloitte, XPMC, Code With Harry, and University of Colorado Boulder.`;
    if (/achievement|sport|football|guitar/.test(lower)) return PORTFOLIO.achievements.map(a => a.title).join(', ');
    if (/contact|email/.test(lower)) return `Email: ${PORTFOLIO.email} | GitHub: ${PORTFOLIO.github}`;
    if (/hello|hi|who/.test(lower)) return `I'm ${PORTFOLIO.name}'s portfolio assistant. Ask about skills, projects, education, certifications, or experience!`;
    return "Ask me about Shantanu's skills, projects, experience, education, certifications, or achievements.";
  }
  function addMsg(text, role) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + role;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
  function sendMsg() {
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    setTimeout(() => addMsg(reply(text), 'bot'), 500);
  }
  send.addEventListener('click', sendMsg);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
}

function initContactForm() {
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    const data = new FormData(e.target);
    window.location.href = `mailto:${PORTFOLIO.email}?subject=${encodeURIComponent('Portfolio Contact from ' + data.get('name'))}&body=${encodeURIComponent(data.get('message') + '\n\nFrom: ' + data.get('email'))}`;
    msg.className = 'form-msg success';
    msg.textContent = 'Opening your email client...';
    e.target.reset();
  });
}

function initCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('[data-count]').forEach(el => {
        const end = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        const startTime = performance.now();
        const animate = now => {
          const p = Math.min((now - startTime) / 2000, 1);
          el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * end) + suffix;
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
      observer.unobserve(e.target);
    });
  }, { threshold: 0.3 });
  const stats = document.getElementById('stats-grid');
  if (stats) observer.observe(stats);
}

function renderProfile3dContent() {
  const el = document.getElementById('profile-3d-content');
  if (!el) return;

  const skills = [...new Set(PORTFOLIO.skills.flatMap(s => s.items))].slice(0, 14);
  const projects = PORTFOLIO.projects.slice(0, 5);

  el.innerHTML = `
    <div class="profile-3d-header">
      <div class="profile-3d-avatar">
        <img src="${PORTFOLIO.profilePhoto}" alt="${PORTFOLIO.name}">
      </div>
      <h2 class="profile-3d-name">${PORTFOLIO.name}</h2>
      <p class="profile-3d-role">${PORTFOLIO.roles.slice(0, 3).join(' · ')}</p>
      <p class="profile-3d-location">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${PORTFOLIO.location}
      </p>
    </div>
    <div class="profile-3d-body">
      <div class="profile-3d-section">
        <h3 class="profile-3d-section-title">Skills</h3>
        <div class="profile-3d-skills">
          ${skills.map(skill => `<span class="profile-3d-skill">${skill}</span>`).join('')}
        </div>
      </div>
      <div class="profile-3d-section">
        <h3 class="profile-3d-section-title">Projects</h3>
        <div class="profile-3d-projects">
          ${projects.map(p => `
            <div class="profile-3d-project">
              <span>${p.title}</span>
              <span class="profile-3d-project-cat">${p.cat}</span>
            </div>`).join('')}
        </div>
      </div>
      <div class="profile-3d-section">
        <h3 class="profile-3d-section-title">Highlights</h3>
        <div class="profile-3d-stats">
          ${PORTFOLIO.stats.map(s => `
            <div class="profile-3d-stat">
              <div class="profile-3d-stat-val">${s.value}${s.suffix}</div>
              <div class="profile-3d-stat-lbl">${s.label}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function initProfile3d() {
  const trigger = document.getElementById('profile-trigger');
  const modal = document.getElementById('profile-3d-modal');
  const closeBtn = document.getElementById('profile-3d-close');
  const scene = document.getElementById('profile-3d-scene');
  const card = document.getElementById('profile-3d-card');
  const shine = document.getElementById('profile-3d-shine');
  if (!trigger || !modal || !scene || !card) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rotateX = 0;
  let rotateY = 0;
  let targetX = 0;
  let targetY = 0;
  let rafId = null;
  let isOpen = false;

  renderProfile3dContent();

  const applyTransform = () => {
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isOpen ? 1 : 0.92})`;
    if (shine) {
      const shineX = 50 + rotateY * 1.4;
      const shineY = 50 - rotateX * 1.4;
      shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.22), transparent 58%)`;
    }
  };

  const animateCard = () => {
    if (!isOpen) {
      rafId = null;
      return;
    }
    rotateX += (targetX - rotateX) * 0.1;
    rotateY += (targetY - rotateY) * 0.1;
    applyTransform();
    rafId = requestAnimationFrame(animateCard);
  };

  const startAnimation = () => {
    if (reducedMotion || rafId) return;
    rafId = requestAnimationFrame(animateCard);
  };

  const stopAnimation = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  };

  const setTilt = (clientX, clientY) => {
    const rect = scene.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    targetY = x * 28;
    targetX = -y * 22;
  };

  const resetTilt = () => {
    targetX = 0;
    targetY = 0;
  };

  const openProfile3d = () => {
    renderProfile3dContent();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    isOpen = true;
    applyTransform();
    startAnimation();
  };

  const closeProfile3d = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isOpen = false;
    resetTilt();
    stopAnimation();
    rotateX = 0;
    rotateY = 0;
    applyTransform();
  };

  trigger.addEventListener('click', openProfile3d);
  closeBtn?.addEventListener('click', closeProfile3d);
  modal.addEventListener('click', e => { if (e.target === modal) closeProfile3d(); });

  if (!reducedMotion) {
    scene.addEventListener('mousemove', e => setTilt(e.clientX, e.clientY));
    scene.addEventListener('mouseleave', resetTilt);
    scene.addEventListener('touchmove', e => {
      if (!e.touches[0]) return;
      setTilt(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    scene.addEventListener('touchend', resetTilt);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeProfile3d();
  });
}

function openResumeModal() {
  const modal = document.getElementById('resume-modal');
  const frame = document.getElementById('resume-frame');
  const downloadLink = document.getElementById('resume-download-link');
  if (!modal || !frame) return;
  frame.src = `${PORTFOLIO.resumeUrl}#toolbar=0&navpanes=0`;
  if (downloadLink) {
    downloadLink.href = PORTFOLIO.resumeUrl;
    downloadLink.setAttribute('download', PORTFOLIO.resumeDownloadName);
  }
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeResumeModal() {
  const modal = document.getElementById('resume-modal');
  const frame = document.getElementById('resume-frame');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (frame) frame.src = '';
}

function initResumeModal() {
  const openBtn = document.getElementById('resume-open-btn');
  const modal = document.getElementById('resume-modal');
  const closeBtn = document.getElementById('resume-close');
  if (!modal) return;

  openBtn?.addEventListener('click', openResumeModal);
  closeBtn?.addEventListener('click', closeResumeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeResumeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeResumeModal();
  });
}

