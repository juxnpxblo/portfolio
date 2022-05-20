import tsLogo from '../assets/ts-logo.png';
import reactLogo from '../assets/react-logo.png';
import nodelogo from '../assets/node-logo.png';
import postgresLogo from '../assets/postgres-logo.png';

import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiHeroku,
  SiReact,
} from 'react-icons/si';
import { FaGitAlt, FaFigma } from 'react-icons/fa';

const SKILLS = {
  title: 'O que eu sei fazer',
  topics: ['Linguagens', 'Front-end', 'Back-end'],
  skills: [
    {
      name: 'Typescript',
      icon: tsLogo,
      subSkills: [
        { name: 'ES6', Icon: null, offset: { x: '-left-14', y: '-top-6' } },
        {
          name: 'Figma',
          Icon: FaFigma,
          offset: { x: '-left-20', y: 'bottom-16' },
        },
        {
          name: 'Git',
          Icon: FaGitAlt,
          offset: { x: '-right-16', y: 'top-4' },
        },
        {
          name: 'RegEx',
          Icon: null,
          offset: { x: '-right-20', y: 'bottom-14' },
        },
      ],
    },
    {
      name: 'React',
      icon: reactLogo,
      subSkills: [
        {
          name: 'React Native',
          Icon: SiReact,
          offset: { x: '-left-28', y: 'top-6' },
        },
        {
          name: 'TailwindCSS',
          Icon: SiTailwindcss,
          offset: { x: '-left-28', y: 'top-24' },
        },
        {
          name: 'Context',
          Icon: null,
          offset: { x: '-right-12', y: 'top-2' },
        },
        {
          name: 'Hooks',
          Icon: null,
          offset: { x: '-right-16', y: 'top-12' },
        },
        {
          name: 'Redux',
          Icon: SiRedux,
          offset: { x: '-right-12', y: 'top-28' },
        },
      ],
    },
    {
      name: 'Node.js',
      icon: nodelogo,
      subSkills: [
        {
          name: 'Express',
          Icon: SiExpress,
          offset: { x: '-left-16', y: '-top-2' },
        },
        {
          name: 'WebSocket',
          Icon: SiSocketdotio,
          offset: { x: '-left-24', y: 'bottom-10' },
        },
        {
          name: 'Heroku',
          Icon: SiHeroku,
          offset: { x: '-right-20', y: 'bottom-24' },
        },
      ],
    },
    {
      name: 'PostgreSQL',
      icon: postgresLogo,
      subSkills: [
        {
          name: 'Rest API',
          Icon: null,
          offset: { x: '-left-24', y: 'top-8' },
        },
        {
          name: 'CRUD',
          Icon: null,
          offset: { x: '-right-14', y: 'bottom-14' },
        },
      ],
    },
  ],
};

export default SKILLS;
