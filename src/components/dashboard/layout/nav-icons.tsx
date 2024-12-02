import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { ChartLine } from "@phosphor-icons/react/dist/ssr/ChartLine";
import { Database } from "@phosphor-icons/react/dist/ssr/Database";
import { ChatsCircle } from "@phosphor-icons/react/dist/ssr";

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'chart-line': ChartLine,
  'chats-circle': ChatsCircle,
  database: Database,
} as Record<string, Icon>;
