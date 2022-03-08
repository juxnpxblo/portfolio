import { SectionTitle, Project } from './exports';

const Projects = ({ content: { title, projects } }) => {
  return (
    <section id="projects" className="section mt-16 lg:mt-32 xl:mt-44">
      <div className="mb-10 lg:mb-14">
        <SectionTitle title={title} />
      </div>
      {projects.map((project, i) => (
        <Project
          project={project}
          even={(i + 1) % 2 === 0}
          key={project.name}
        />
      ))}
    </section>
  );
};

export default Projects;
