import { Experience } from './experience';
import { Comment, Post } from './post';
import { Project, Tecnology } from './project';
import { Testimonial } from './testimonial';

export const SKILLS: Tecnology[] = [
  {
    id: 1,
    name: 'Figma',
    progress: 90,
    logo: 'img/skill/figma.svg',
  },
  {
    id: 2,
    name: 'Webflow',
    progress: 85,
    logo: 'img/skill/webflow.svg',
  },
  {
    id: 3,
    name: 'Tailwind',
    progress: 90,
    logo: 'img/skill/tailwind.svg',
  },
  {
    id: 4,
    name: 'HTML5',
    progress: 95,
    logo: 'img/skill/html.svg',
  },
  {
    id: 5,
    name: 'CSS3',
    progress: 95,
    logo: 'img/skill/css.svg',
  },
  {
    id: 6,
    name: 'Javascript',
    progress: 75,
    logo: 'img/skill/js.svg',
  },
  {
    id: 7,
    name: 'jQuery',
    progress: 70,
    logo: 'img/skill/jquery.svg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    imageUrl: 'img/testimonial/author1.png',
    rate: 5,
    text: `Working with Reddick is a game-changer. Their coding expertise and commitment to quality make every project a success.`,
    userJob: 'Developer',
    userName: 'Alex Johnson',
  },
  {
    id: 2,
    imageUrl: 'img/testimonial/author2.png',
    rate: 5,
    text: `Reddick exceeds expectations with top-tier coding skills. Reliable, collaborative, and a true asset to any project. Highly recommended`,
    userJob: 'CEO-itTheme',
    userName: 'Mily Martin',
  },
  {
    id: 3,
    imageUrl: 'img/testimonial/author2.png',
    rate: 5,
    text: `Reddick delivers excellence in every line of code. Dependable, innovative, and a key player in project success. Outstanding performance.`,
    userJob: 'Devloper',
    userName: 'Alex Johnson',
  },
];

export const COMMENTS: Comment[] = [
  {
    id: 1,
    useravatar: 'img/blog/comment-author.png',
    created: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    username: 'Mily Martin',
  },
  {
    id: 2,
    useravatar: 'img/blog/comment-author.png',
    created: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    username: 'Mily Martin',
  },
  {
    id: 3,
    useravatar: 'img/blog/comment-author.png',
    created: new Date(),
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    username: 'Mily Martinx',
  },
];

export const POSTS: Post[] = [
  {
    id: 1,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article1.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Elevate your mornings with perfectly brewed coffee',
    writenBy: 'Adrinao Smith',
  },
  {
    id: 2,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article2.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Mastering the clock: A guide to time management',
    writenBy: 'Adrinao Smith',
  },
  {
    id: 3,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article3.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Homeward bound: Crafting a productive home pffice',
    writenBy: 'Adrinao Smith',
  },
  {
    id: 4,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article4.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Design Specialization brings a user design-centric.',
    writenBy: 'Adrinao Smith',
  },
  {
    id: 5,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article5.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Design Specialization brings a user design-centric.',
    writenBy: 'Adrinao Smith',
  },
  {
    id: 6,
    category: ['Tips & Tricks', 'Design'],
    comments: [...COMMENTS],
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.',
    imageUrls: {
      default: 'img/blog/article6.webp',
      large: 'img/blog/article1-xl.webp',
      'intern-1': 'img/blog/article-inner2.webp',
      'intern-2': 'img/blog/article-inner1.webp',
    },
    publicated: new Date(),
    tags: [
      'HTML5',
      'CSS3',
      'WordPress',
      'UI Design',
      'AI',
      'Discussion',
      'Tailwind',
      'Webflow',
    ],
    title: 'Design Specialization brings a user design-centric.',
    writenBy: 'Adrinao Smith',
  },
];

export const WORKS: Experience[] = [
  {
    id: 1,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: 'Mar, 2022 - Current',
    place: 'Envato Market',
    title: 'Lead UX Designer',
  },
  {
    id: 2,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: '2018 - 2022',
    place: 'Google',
    title: 'UX Designer',
  },
  {
    id: 3,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: '2014-2018',
    place: 'Apple',
    title: 'Human Interface Designer',
  },
];

export const EDUCATION: Experience[] = [
  {
    id: 1,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: '2016-2018',
    place: 'Oxford University',
    title: 'Diploma in Computer',
  },
  {
    id: 2,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: '2018 - 2022',
    place: 'Google',
    title: 'BSc in Engineering',
  },
  {
    id: 3,
    description:
      'Owing to advancements in product other designer technologies aute voluptate.',
    period: '2014-2018',
    place: 'Oxford University',
    title: 'Php Development',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img1.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 2,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img2.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 3,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img3.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 4,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img4.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 5,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img5.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 6,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img6.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 7,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img7.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 8,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img8.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 9,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img9.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
  {
    id: 10,
    client: 'Envato Theme',
    description:
      'Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.',
    duration: '108 hrs',
    imageUrls: {
      default: 'img/portfolio/portfolio-img10.webp',
      large: 'img/portfolio/portfolio-img1-xl.webp',
      'intern-1': 'img/portfolio/portfolio-img1-2.webp',
      'intern-2': 'img/portfolio/portfolio-img1-1.webp',
    },
    services: ['Tips & Tricks', 'Design'],
    tecnologies: [...SKILLS],
    title: 'Three wine glasses filled with candies',
  },
];
