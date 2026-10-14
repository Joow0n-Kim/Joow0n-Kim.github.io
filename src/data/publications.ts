export interface Publication {
  title: string;
  authors: string; // "*" marks equal contribution; the site owner's name is bolded automatically
  venue: string; // short badge, e.g. "NeurIPS 2026"
  venueFull?: string; // shown only when the venue badge is hidden
  hideBadge?: boolean;
  status: 'published' | 'preprint';
  selected?: boolean;
  img?: string;
  thumbText?: string; // text tile shown instead of an image
  links?: { label: string; url: string }[];
}

export const ME = 'Joowon Kim';

export const PUBLICATIONS: Publication[] = [
  {
    title: 'CollabVR: Collaborative Video Reasoning with Vision-Language and Video Generation Models',
    authors: 'Joowon Kim*, Seungho Shin*, Eunho Yang, Joonhyung Park',
    venue: 'NeurIPS 2026',
    venueFull: 'Advances in Neural Information Processing Systems (NeurIPS), 2026',
    status: 'published',
    selected: true,
    img: '/papers/collabvr.webp',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2605.08735' },
      { label: 'Code', url: 'https://github.com/Joow0n-Kim/CollabVR' },
      { label: 'Project', url: 'https://joow0n-kim.github.io/collabvr-project-page/' },
    ],
  },
  {
    title: 'Early Timestep Zero-Shot Candidate Selection for Instruction-Guided Image Editing',
    authors: 'Joowon Kim*, Ziseok Lee*, Donghyeon Cho, Sanghyun Jo, Yeonsung Jung, Kyungsu Kim, Eunho Yang',
    venue: 'ICCV 2025',
    venueFull: 'IEEE/CVF International Conference on Computer Vision (ICCV), 2025',
    status: 'published',
    selected: true,
    img: '/papers/elect.webp',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2504.13490' },
      { label: 'Code', url: 'https://github.com/Joow0n-Kim/ELECT' },
      { label: 'Project', url: 'https://elect-diffusion.github.io/' },
    ],
  },
  {
    title: 'Progress by Pieces: Test-Time Scaling for Autoregressive Image Generation',
    authors: 'Joonhyung Park*, Hyeongwon Jang*, Joowon Kim, Eunho Yang',
    venue: 'CVPR 2026',
    venueFull: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2026',
    status: 'published',
    selected: true,
    img: '/papers/grid.webp',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2511.21185' },
      { label: 'Project', url: 'https://grid-ar.github.io/' },
    ],
  },
  {
    title: 'Preserve or Modify? Context-Aware Evaluation for Balancing Preservation and Modification in Text-Guided Image Editing',
    authors: 'Yoonjeon Kim*, Soohyun Ryu*, Yeonsung Jung, Hyunkoo Lee, Joowon Kim, June Yong Yang, Jaeryong Hwang, Eunho Yang',
    venue: 'CVPR 2025',
    venueFull: 'IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025',
    status: 'published',
    img: '/papers/augclip.webp',
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2410.11374' },
      { label: 'Project', url: 'https://augclip.github.io/' },
    ],
  },
  {
    title: 'Language-Interfaced Tabular Oversampling via Progressive Imputation and Self-Authentication',
    authors: 'June Yong Yang*, Geondo Park*, Joowon Kim, Hyeongwon Jang, Eunho Yang',
    venue: 'ICLR 2024',
    venueFull: 'International Conference on Learning Representations (ICLR), 2024',
    status: 'published',
    img: '/papers/tabular.webp',
    links: [{ label: 'Paper', url: 'https://openreview.net/pdf?id=8F6bws5JBy' }],
  },
  {
    title: 'ReviewScore: Misinformed Peer Review Detection with Large Language Models',
    authors:
      'Hyun Ryu, Doohyuk Jang, Hyemin S. Lee, Joonhyun Jeong, Gyeongman Kim, Donghyeon Cho, Gyouk Chu, Minyeong Hwang, Hyeongwon Jang, Changhun Kim, Haechan Kim, Jina Kim, Joowon Kim, Yoonjeon Kim, Kwanhyung Lee, Chanjae Park, Heecheol Yun, Gregor Betz, Eunho Yang',
    venue: 'EMNLP 2026 Findings',
    venueFull: 'Findings of the Conference on Empirical Methods in Natural Language Processing (EMNLP), 2026',
    status: 'published',
    img: '/papers/reviewscore.webp',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2509.21679' }],
  },
  {
    title: 'Prediction Model for the Early Detection of Cachexia in Patients with Pancreatic Adenocarcinoma',
    authors: 'H. Jeong, Y. Lee*, Joowon Kim*, Y. Ko, J. Jo, H. Lee, K. Kim, J. Park, S. Bang, S. Park, S. Song, M. Chung',
    venue: 'DDW 2022',
    venueFull: 'Gastroenterology 162(7): S-705, Digestive Disease Week (DDW) abstract, 2022',
    status: 'published',
    thumbText: 'Digestive Disease Week (DDW)',
    hideBadge: true,
  },
  {
    title: 'Look Only When Needed: Certificate-Guided Visual Routing for Efficient Diffusion VLMs',
    authors: 'Donghyeon Cho*, Joowon Kim*, Seungho Shin, Eunho Yang',
    venue: 'Under Review, 2026',
    status: 'preprint',
    selected: true,
    img: '/papers/lown.webp',
  },
  {
    title: 'Who Should Lead Decoding Now? Tracking Reliable Trajectories for Ensembling Masked Diffusion Language Models',
    authors: 'Heecheol Yun, Joonhyung Park, Joowon Kim, Eunho Yang',
    venue: 'Preprint, 2026',
    status: 'preprint',
    img: '/papers/tie.webp',
    links: [{ label: 'Paper', url: 'https://arxiv.org/abs/2606.16281' }],
  },
];
