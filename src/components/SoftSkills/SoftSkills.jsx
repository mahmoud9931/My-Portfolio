import './SoftSkills.css';
import useReveal from '../../hooks/useReveal';
import softSkillsData from '../../data/softSkillsData';
import { MdGroups2, MdRecordVoiceOver, MdPsychology, MdSchedule, MdAutorenew, MdAutoAwesome } from 'react-icons/md';

const softSkillIcons = [
  MdGroups2,
  MdRecordVoiceOver,
  MdPsychology,
  MdSchedule,
  MdAutorenew,
  MdAutoAwesome,
];

export default function SoftSkills() {
  const sectionRef = useReveal();

  return (
    <section
      id="soft-skills"
      className="soft-skills reveal"
      ref={sectionRef}
      style={{ '--reveal-delay': '55ms' }}
    >
      <div className="top-section">
        <h5>Beyond the stack</h5>
        <h2>Soft Skills</h2>
      </div>

      <div className="container soft-skills__grid">
        {softSkillsData.map((item, index) => {
          const Icon = softSkillIcons[index % softSkillIcons.length];
          return (
            <article key={item.id} className="soft-skills__card surface-card hover-lift">
              <div className="soft-skills__icon-wrap" aria-hidden="true">
                <Icon className="soft-skills__icon" />
              </div>
              <div className="soft-skills__body">
                <h3 className="soft-skills__name">{item.name}</h3>
                <p className="soft-skills__desc text-light">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
