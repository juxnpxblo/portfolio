import screen from '../assets/printscreen.png';

const PROJECTS = {
  title: 'Personal projects',
  projects: [
    {
      name: 'Real-time chat',
      ghLink: 'https://github.com/juxnpxblo/chat',
      preview: screen,
      stacks: ['Typescript', 'React', 'Redux', 'WebSocket', 'PostgreSQL'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor dolor ante, eu pretium purus lacinia at. Phasellus fermentum egestas turpis, ut mollis neque consequat in. Curabitur posuere, augue ut mollis convallis, augue est fringilla lectus, ut congue velit odio at lacus. Integer blandit sem nec neque hendrerit fermentum. Mauris.',
    },
    {
      name: 'To-do list',
      ghLink: 'https://github.com/juxnpxblo/todo-list',
      preview: screen,
      stacks: ['Typescript', 'React', 'Redux', 'PostgreSQL'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor dolor ante, eu pretium purus lacinia at. Phasellus fermentum egestas turpis, ut mollis neque consequat in. Curabitur posuere, augue ut mollis convallis, augue est fringilla lectus, ut congue velit odio at lacus. Integer blandit sem nec neque hendrerit fermentum. Mauris.',
    },
    {
      name: 'Insta UI clone',
      ghLink: 'https://github.com/juxnpxblo/insta-ui-clone',
      preview: screen,
      stacks: ['React', 'TailwindCSS'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor dolor ante, eu pretium purus lacinia at. Phasellus fermentum egestas turpis, ut mollis neque consequat in. Curabitur posuere, augue ut mollis convallis, augue est fringilla lectus, ut congue velit odio at lacus. Integer blandit sem nec neque hendrerit fermentum. Mauris.',
    },
  ],
};

export default PROJECTS;
