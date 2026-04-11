import './Projects.css'
import project1 from '../../assets/my-portfolio.png'
import project2 from '../../assets/2.png'
import project3 from '../../assets/3.png'
import project4 from '../../assets/4.png'
import project5 from '../../assets/5.png'
import useReveal from '../../hooks/useReveal'


export default function Projects() {
  const sectionRef = useReveal();

  const portfolioData = [
    {
      id: 10,
      image: project1,
      title: 'My-Portfolio',
      stack: ['React', 'JavaScript'],
      role: 'Frontend Developer',
      outcome: 'A modern portfolio showcasing my frontend projects and skills with a clean and responsive design.',
      github: 'https://github.com/mahmoud9931/My-Portfolio',
      demo: 'https://my-portfolio-iota-nine-88.vercel.app/'
    },
  {
    id: 1,
    image: project2,
    title: 'Prayer App',
    stack: ['React', 'JavaScript', 'API'],
    role: 'Frontend Developer',
    outcome: 'A responsive Prayer Times web app built with React, focusing on clean code, and a simple, user-friendly interface.',
    github: 'https://github.com/mahmoud9931/Prayer',
    demo: 'https://prayer-inky.vercel.app/'
  },
  {
    id: 2,
    image: project3,
    title: 'To-Do List',
    stack: ['React','JavaScript', 'State Management'],
    role: 'Frontend Developer',
    outcome: 'Delivered task management with clear interactions and lightweight performance.',
    github: 'https://github.com/mahmoud9931/To-Do-List',
    demo: 'https://to-do-list-silk-rho-96.vercel.app/'
  },
  {
    id: 3,
    image: project4,
    title: 'Product Management System',
    stack: ['JavaScript', 'CRUD', 'Responsive UI'],
    role: 'Frontend Developer',
    outcome: 'Implemented complete product workflows and form-driven dashboards.',
    github: 'https://github.com/mahmoud9931/Full-product-management-system',
    demo: 'https://mahmoud9931.github.io/Full-product-management-system/'
  },
  {
    id: 4,
    image: project5,
    title: 'Postat',
    stack: ['JavaScript', 'CSS', 'API'],
    role: 'Frontend Developer',
    outcome: 'Created an engaging post browsing experience with reusable UI structure.',
    github: 'https://github.com/mahmoud9931/postat',
    demo: 'https://mahmoud9931.github.io/postat/'
  },
];

  return (
    <section className='projects reveal' id='projects' ref={sectionRef} style={{ '--reveal-delay': '90ms' }}>
      <div className="top-section">
        <h5>My Recent Work</h5>
        <h2>My Projects</h2>
      </div>
      <div className="container projects_container">
        {
          portfolioData.map(({id, image, title, stack, role, outcome, github, demo}) => {
            return (
              <article key={id} className='project_item surface-card hover-lift'>
                <div className="project_item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p className='project_role'>{role}</p>
                <p className='project_outcome'>{outcome}</p>
                <div className="project_stack">
                  {stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="project_item_btns">
                  <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
