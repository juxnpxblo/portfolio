import { SectionTitle, Skill, SubSkill } from './exports';

const Skills = ({ content: { title, topics, skills } }) => {
  return (
    <section id="skills" className="section pt-20">
      <div className="mb-20 lg:mb-24 xl:mb-40">
        <SectionTitle title={title} />
      </div>
      <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-x-10 gap-y-20">
        <Skill odd icon={skills[0].icon} name={skills[0].name}>
          {skills[0].subSkills.map(({ name, Icon, offset }) => (
            <SubSkill name={name} Icon={Icon} offset={offset} key={name} />
          ))}
          <span className="skill-topic">{topics[0]}</span>
        </Skill>
        <Skill icon={skills[1].icon} name={skills[1].name}>
          {skills[1].subSkills.map(({ name, Icon, offset }) => (
            <SubSkill name={name} Icon={Icon} offset={offset} key={name} />
          ))}
          <span className="skill-topic -left-6 lg:-top-16 xl:-top-24">
            {topics[1]}
          </span>
        </Skill>
        <Skill odd icon={skills[2].icon} name={skills[2].name}>
          {skills[2].subSkills.map(({ name, Icon, offset }) => (
            <SubSkill name={name} Icon={Icon} offset={offset} key={name} />
          ))}
          <span className="skill-topic top-20 left-40">{topics[2]}</span>
        </Skill>
        <Skill icon={skills[3].icon} name={skills[3].name}>
          {skills[3].subSkills.map(({ name, Icon, offset }) => (
            <SubSkill name={name} Icon={Icon} offset={offset} key={name} />
          ))}
        </Skill>
      </div>
    </section>
  );
};

export default Skills;
