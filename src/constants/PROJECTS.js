import preview1 from '../assets/preview-1.png';
import preview2 from '../assets/preview-2.png';
import preview3 from '../assets/preview-3.png';

const PROJECTS = {
  title: 'Projetos pessoais',
  projects: [
    {
      name: 'Real-time chat',
      link: 'https://chat-juxnpxblo.herokuapp.com/',
      ghLink: 'https://github.com/juxnpxblo/chat',
      preview: preview1,
      stacks: ['Typescript', 'React', 'Redux', 'Socket.io', 'PostgreSQL'],
      description:
        'Um chat que se utiliza do protocolo WebSocket, através da biblioteca Socket.io, para oferecer a funcionalidade de comunicação em tempo real. Também possui um sistema de registro e login, onde as entradas do usuário são testadas em tempo real no front-end e, posteriormente, no back-end, sendo o usuário informado em caso de inconsistências.',
    },
    {
      name: 'To-do list',
      link: 'https://todo-list-juxnpxblo.herokuapp.com/',
      ghLink: 'https://github.com/juxnpxblo/todo-list',
      preview: preview2,
      stacks: ['Typescript', 'React', 'Redux', 'PostgreSQL'],
      description:
        'Uma aplicação de organização de tarefas pessoais que permite ao usuário criar, editar, remover, marcar e desmarcar suas tarefas. No topo da interface há um contador do total de tarefas concluídas, e a aplicação também oferece uma paleta de cores de fundo, que, no momento da escolha, ela é armazenada no navegador do usuário e, então, persiste após o recarregamento da página.',
    },
    {
      name: 'Insta UI clone',
      link: 'https://insta-ui-clone.vercel.app/',
      ghLink: 'https://github.com/juxnpxblo/insta-ui-clone',
      preview: preview3,
      stacks: ['React', 'TailwindCSS'],
      description:
        'Uma réplica da interface do site do Instagram. Foram replicadas as telas de login, feed e perfil. Com destaque para a tela de login, com o efeito de fade em loop na tela do iPhone — que sua implementação exigiu certa complexidade — e também o efeito de contração dos placeholders na presença de texto.',
    },
  ],
};

export default PROJECTS;
