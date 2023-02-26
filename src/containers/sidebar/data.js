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
      },
      {
        name: 'International Courses',
        icon: Mortarboard,
      },
    ],
  },

  {
    heading: 'Account Settings',
    items: [
      {
        name: 'Dashboard',
        icon: Pressure,
      },
      {
        name: 'Notification',
        icon: Bell,
      },
      {
        name: 'Profile',
        icon: User,
      },
      {
        name: 'Settings',
        icon: Setting,
      },
    ],
  },
  {
    heading: 'Tests and Exams',
    items: [
      {
        name: 'Exam Information',
        icon: Edit,
      },
      {
        name: 'Results',
        icon: Order,
      },
    ],
  },
];
