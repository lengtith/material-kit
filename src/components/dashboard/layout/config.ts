import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'project', title: 'Project', href: paths.dashboard.project, icon: 'chart-pie' },
  { key: 'visualize', title: 'Visualize', href: paths.dashboard.visualize, icon: 'chart-line' },
  { key: 'dataset', title: 'Dataset', href: paths.dashboard.dataset, icon: 'database' },
  { key: 'helps', title: 'Helps', href: paths.dashboard.helps, icon: 'chats-circle' }
] satisfies NavItemConfig[];
