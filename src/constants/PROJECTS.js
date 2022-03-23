import preview1 from '../assets/preview-1.png';
import preview2 from '../assets/preview-2.png';
import preview3 from '../assets/preview-3.png';

const PROJECTS = {
  title: 'Personal projects',
  projects: [
    {
      name: 'Real-time chat',
      link: 'https://chat-juxnpxblo.herokuapp.com/',
      ghLink: 'https://github.com/juxnpxblo/chat',
      preview: preview1,
      stacks: ['Typescript', 'React', 'Redux', 'Socket.io', 'PostgreSQL'],
      description:
        "A simple chat app that uses the WebSocket protocol through the Socket.io library to make the real-time feature possible. It also has a simple register/login system, where the register component will check the user input while they're typing and will dynamically respond to errors on the client or server-side, when registering the user into the database.",
    },
    {
      name: 'To-do list',
      link: 'https://todo-list-juxnpxblo.herokuapp.com/',
      ghLink: 'https://github.com/juxnpxblo/todo-list',
      preview: preview2,
      stacks: ['Typescript', 'React', 'Redux', 'PostgreSQL'],
      description:
        "A simple to-do app that allows the user to create, edit, remove and check their todos. On the top there's a counter of how many (of the total) todos are checked. When you click on the cog, you get offered some options of background colors, that is stored in the browser storage so it can persist after reloading.",
    },
    {
      name: 'Insta UI clone',
      link: 'https://insta-ui-clone.vercel.app/',
      ghLink: 'https://github.com/juxnpxblo/insta-ui-clone',
      preview: preview3,
      stacks: ['React', 'TailwindCSS'],
      description:
        "This was my attempt to replicate the Instagram's web app UI. I did the login, feed and profile interfaces. The one that I dedicated the most amount of time to was the login page, that has this cool fading effect on the iPhone screen on a loop — as it was implemented, you just need to place one image above the other (last to first) and choose a delay. It also has this other cool effect on the input's placeholder: it contracts on typing.",
    },
  ],
};

export default PROJECTS;
