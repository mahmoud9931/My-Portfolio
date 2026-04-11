import course1 from '../assets/Web Designer.png'
import course2 from '../assets/MEAN-Stack Web Development .jpg'
import course3 from '../assets/Interactive React for the Web.png'
const coursesData = [
  {
    id: 1,
    courseName: 'Web Designer',
    provider: 'NTI',
    completedDate: '2025',
    description:
      'A web design course focused on creating responsive and visually consistent user interfaces.',
    certificateImage:course1,
  },
  {
    id: 2,
    courseName: 'MEAN-Stack',
    provider: 'NTI',
    completedDate: '2025',
    description:
      'course focused on building complete web applications , understanding client-server architecture.',
    certificateImage: course2,
  },
  {
    id: 3,
    courseName: 'Interactive React for the Web',
    provider: 'LinkedIn Learning',
    completedDate: '2025',
    description:
      'A hands-on course focused on building interactive user interfaces using React.',
    certificateImage: course3,
  },
];

export default coursesData;
