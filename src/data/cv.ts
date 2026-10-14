export interface Entry {
  org: string;
  logo?: string;
  role: string;
  period: string;
  details?: string[];
}

export const EDUCATION: Entry[] = [
  {
    org: 'Korea Advanced Institute of Science and Technology (KAIST)',
    logo: '/logos/kaist.svg',
    role: 'Ph.D. in Artificial Intelligence',
    period: 'Sep. 2025 - Present',
    details: ['Advisor: <b>Eunho Yang</b>'],
  },
  {
    org: 'Korea Advanced Institute of Science and Technology (KAIST)',
    logo: '/logos/kaist.svg',
    role: 'M.S. in Artificial Intelligence',
    period: 'Sep. 2023 - Aug. 2025',
    details: ['Advisor: <b>Eunho Yang</b>'],
  },
  {
    org: 'Korea Advanced Institute of Science and Technology (KAIST)',
    logo: '/logos/kaist.svg',
    role: 'B.S. in School of Computing',
    period: 'Mar. 2018 - Aug. 2023 (GPA 3.81/4.3)',
  },
];

export const EXPERIENCE: Entry[] = [
  {
    org: 'NAVER Cloud',
    logo: '/logos/naver.svg',
    role: 'Research Intern, Omni Foundation Model team',
    period: 'Jul. 2026 - Present',
    details: ['Vision tokenizer pretraining for omni foundation models', 'Real-time (full-duplex) video understanding models'],
  },
  {
    org: 'NAVER Cloud',
    logo: '/logos/naver.svg',
    role: 'Intern, Image Vision team',
    period: 'Sep. 2024 - Mar. 2025',
    details: [
      'Supervised fine-tuning of a text-to-image based background inpainting model for advertising',
      'Performance optimization, evaluation metric development, and scaling to SD 3.0 and DiT-based models',
    ],
  },
  {
    org: 'Machine Learning & Intelligence Lab (MLILAB), KAIST',
    logo: '/logos/kaist.svg',
    role: 'Research Intern',
    period: 'Jul. 2022 - Aug. 2023',
    details: ['Multi-source warping-based talking-head video-to-video generation', 'Counterfactual explanation of error cases with diffusion models'],
  },
  {
    org: 'AITRICS',
    logo: '/logos/aitrics.svg',
    role: 'Research Intern',
    period: 'Dec. 2020 - Aug. 2021',
    details: ['Prediction model for the early detection of cachexia', 'Counterfactual trajectory prediction on clinical time-series data'],
  },
  {
    org: 'SK hynix',
    logo: '/logos/skhynix.svg',
    role: 'Intern, Solution SW – Mobile PV team',
    period: 'Jul. 2020 - Aug. 2020',
    details: ['Memory device operation characteristics analysis'],
  },
];

export const SERVICES = [{ title: 'Conference Reviewer', detail: 'ICLR 2027' }];

export const SKILLS = [
  { category: 'Languages', items: 'English, Korean' },
  { category: 'Programming Languages', items: 'Python (PyTorch Libraries), C/C++, JavaScript, R, MATLAB, LaTeX' },
  { category: 'Developer Tools', items: 'CUDA, Bash' },
];

export const ACTIVITIES = [
  { title: 'Leading an ML/DL Paper Reading Study', note: '', period: '2021' },
  { title: 'CS101 (Introduction to Programming) Teaching Assistant', note: '', period: '2020 - 2023' },
  { title: 'CS101 (Introduction to Programming) Freshman Tutoring Program Tutor', note: '', period: '2019 - 2020' },
  { title: 'KAIST Undergraduate Student Council', note: 'Executive, 2020', period: '2018 - 2022' },
  { title: 'KAIST School of Computing Student Council', note: 'Executive, 2020', period: '2019 - 2020' },
];
