import {
  Bell,
  Book,
  Edit,
  Mortarboard,
  Order,
  Pressure,
  Setting,
  User,
} from '../../assets/Icons';

export const SidebarItemsList = [
  {
    heading: 'Courses',
    items: [
      {
        name: 'National Courses',
        icon: Book,
        link: '/main/national-courses',
      },
      {
        name: 'International Courses',
        icon: Mortarboard,
        link: '/main/international-courses',
      },
    ],
  },

  {
    heading: 'Account Settings',
    items: [
      {
        name: 'Dashboard',
        icon: Pressure,
        link: '/main/main',
      },
      {
        name: 'Notification',
        icon: Bell,
        link: '/main/notifications',
      },
      {
        name: 'Profile',
        icon: User,
        link: '/main/profile',
      },
      {
        name: 'Settings',
        icon: Setting,
        link: '/main/settings',
      },
    ],
  },
  {
    heading: 'Tests and Exams',
    items: [
      {
        name: 'Exam Information',
        icon: Edit,
        link: '/main/test-information',
      },
      {
        name: 'Results',
        icon: Order,
        link: '/main/results',
      },
    ],
  },
];
