import './Education.css';
import useReveal from '../../hooks/useReveal';
import educationData from '../../data/educationData';

export default function Education() {
  const sectionRef = useReveal();

  return (
    <section
      id="education"
      className="education reveal"
      ref={sectionRef}
      style={{ '--reveal-delay': '25ms' }}
    >
      <div className="top-section">
        <h5>Degree & institution</h5>
        <h2>University education</h2>
      </div>

      <div className="container education__container">
        <div className="education__rail" aria-hidden="true" />
        <ul className="education__list">
          {educationData.map((item, index) => (
            <li
              key={item.id}
              className="education__item surface-card hover-lift"
              style={{ '--edu-index': index }}
            >
              <span className="education__dot" aria-hidden="true" />
              <p className="education__period">{item.period}</p>
              <h3 className="education__school">{item.school}</h3>
              <p className="education__title">{item.title}</p>
              <p className="education__description text-light">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
