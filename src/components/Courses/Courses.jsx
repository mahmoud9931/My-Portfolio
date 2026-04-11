import './Courses.css';
import useReveal from '../../hooks/useReveal';
import coursesData from '../../data/coursesData';

export default function Courses() {
  const sectionRef = useReveal();

  return (
    <section
      id="courses"
      className="courses reveal"
      ref={sectionRef}
      style={{ '--reveal-delay': '35ms' }}
    >
      <div className="top-section">
        <h5>Learning & certifications</h5>
        <h2>Courses</h2>
      </div>

      <div className="container courses__inner">
        <div className="courses__grid">
          {coursesData.map((course) => (
            <article key={course.id} className="courses__card surface-card hover-lift">
              <div className="courses__cert">
                {course.certificateImage ? (
                  <img
                    src={course.certificateImage}
                    alt={`Certificate: ${course.courseName}`}
                    className="courses__cert-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="courses__cert-placeholder">
                    <span className="courses__cert-placeholder-title">Certificate</span>
                    <span className="courses__cert-placeholder-text">
                      Add image in coursesData.js
                    </span>
                  </div>
                )}
              </div>
              <div className="courses__body">
                <p className="courses__meta">
                  <span className="courses__provider">{course.provider}</span>
                  <span className="courses__meta-sep" aria-hidden="true">
                    ·
                  </span>
                  <span className="courses__date">{course.completedDate}</span>
                </p>
                <h3 className="courses__name">{course.courseName}</h3>
                <p className="courses__description text-light">{course.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
