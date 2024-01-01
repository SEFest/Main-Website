import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/image4.jpg',
    title: 'Competitive ',
    information:
      'Welcome to our electrifying Competitive Module featuring diverse challenges at the Science and Engineering Fest. Teams compete in strategic quizzes, problem-solving quests, innovative scientific demonstrations. With a tantalizing cash prize for the victorious team, the stakes are high and the energy is contagious.Competitive module also features Pet Show Competition, where furry friends compete for top honors and their owners showcase the ultimate bond for a chance to win prestigious titles and fabulous prizes.',
    points: ['Brain Fest', '3D Models Display', 'Poster Competition', 'Pet Show', 'Math Treasure'],
  },
  {
    id: 2,
    cover: '/images/courses/image1.jpg',
    title: 'Workshop ',
    information:
      'Engage in our Workshop Module, a fusion of science and creativity guiding participants to craft unique masterpieces. Participants unleash their artistic prowess while applying scientific principles. This workshop lays the foundation for an exciting contest where imaginative creations take center stage, showcasing the harmonious blend of intellect and artistic expression.',
    points: ['Microbial Culture Art', '3D Printing', 'Robotics', 'Robo Race', 'Line Follower'],
  },
  {
    id: 3,
    cover: '/images/courses/image2.jpg',
    title: 'Exhibition & Shows ',
    information: 'An exhibition that transforms complex concepts into visually stunning narratives.',
    points: ['Departmental Project Display', 'Mini Zoo', 'Nutrition Camps', 'Science Circus', 'Science Cinema'],
  },
  {
    id: 4,
    cover: '/images/courses/image3.jpg',
    title: 'Fun & Games ',
    information: 'Where precision and strategy come together for an engaging and entertaining experience.',
    points: ['Human Ludo', 'Jenga Jam', 'Brain Games', "Rubik's Rubble", 'Paper Plane'],
  },
]
