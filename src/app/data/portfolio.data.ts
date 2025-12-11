export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  stack: string;
  link: string;
}

export interface Skill {
  icon: string;
  name: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
}

export const SERVICES: Service[] = [
  {
    icon: 'code',
    title: 'Front-End',
    description:
      'Building modern Angular applications and transforming UI/UX designs into pixel-perfect, fully responsive websites.',
  },
  {
    icon: 'database',
    title: 'Back-End',
    description:
      'Scalable and secure back-end development using .NET Core RESTful APIs and Microservices architecture.',
  },
];
export const PROJECTS = [
  {
    title: 'CMS for Assiut University',
    stack: 'BACKEND .NET CORE WEB APIs',
    image: 'assets/images/projects/assuit-cms.jpg',
    link: 'https://github.com/AmirMostafa99/CouncilManagmentSystem',
  },
  {
    title: 'GoDoctor',
    stack: 'FULL STACK .NET CORE MVC',
    image: 'assets/images/projects/godoctor.png',
    link: 'https://github.com/AmirMostafa99/GoDoctor',
  },
  {
    title: 'OmniFood',
    stack: 'FRONTEND (HTML, CSS, JAVASCRIPT)',
    image: 'assets/images/projects/omnifood.jpg',
    link: 'https://omnifood-prooject.netlify.app/',
  },
  {
    title: 'CarLink Platform',
    stack: 'Platform for buying and selling cars',
    image: 'assets/images/projects/carlink.png',
    link: 'https://car-link-theta.vercel.app/index.html',
  },
  {
    title: 'Umrah Platform – Taysir',
    stack: 'Umrah platform for Taysir Saudi company',
    image: 'assets/images/projects/taysir-umrah.png',
    link: 'https://tasyir.vercel.app/',
  },
];

export const SKILLS: Skill[] = [
  { icon: 'fab fa-html5', name: 'HTML', color: '#FF5722' },
  { icon: 'fab fa-css3-alt', name: 'CSS', color: '#2196F3' },
  { icon: 'fab fa-js', name: 'JavaScript', color: '#FFD700' },
  { icon: 'fab fa-js', name: 'TypeScript', color: '#3178C6' },
  { icon: 'fab fa-bootstrap', name: 'Bootstrap', color: '#8B3DFF' },
  { icon: 'fab fa-js', name: 'jQuery', color: '#0EA5E9' },
  { icon: 'fab fa-angular', name: 'Angular', color: '#FF0042' },
  { icon: 'fas fa-database', name: 'SQL', color: '#FF4444' },
  { icon: 'fas fa-code', name: 'C#', color: '#C75BF0' },
  { icon: 'fas fa-cube', name: 'OOP', color: '#B968FF' },
  { icon: 'fas fa-code', name: 'ASP.NET Core', color: '#7B3FF2' },
  { icon: 'fas fa-database', name: 'EF Core', color: '#8B5CF6' },
  { icon: 'fas fa-database', name: 'MVC & APIs', color: '#A855F7' },
  { icon: 'fas fa-broadcast-tower', name: 'SignalR', color: '#C084FC' },
  { icon: 'fas fa-file-code', name: 'JSON', color: '#FDE047' },
  { icon: 'fab fa-sass', name: 'Sass', color: '#FF69B4' },
  { icon: 'fab fa-git-alt', name: 'Git', color: '#FF6B35' },
  { icon: 'fab fa-github', name: 'GitHub', color: '#FFFFFF' },
];

export const CONTACT: ContactInfo = {
  phone: '+201012744025',
  email: 'amir.mustafa.ibrahem@gmail.com',
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/amir-mustafa',
  github: 'https://github.com/amirmustafa',
  facebook: 'https://www.facebook.com/amir.mustafa',
  whatsapp: 'https://wa.me/201012744025',
};
