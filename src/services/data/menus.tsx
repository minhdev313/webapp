import {
  InfoCircle,
  Error404,
  ServerOff,
  Home,
  Users,
  WifiOff,
  // Login,
  // UserPlus,
  // Shield,
  Settings2,
  Category2,
  Package
} from "tabler-icons-react";

interface MenuItem {
  title: string;
  link?: string;
  icon?: JSX.Element;
  children?: MenuItem[];
  isOpen?: boolean; // New property to track open/closed state
}

const menus: MenuItem[] = [
  {
    icon: <Home size={18} strokeWidth={2} />,
    title: "Dashboard",
    link: "/dashboard",
    isOpen: false,
  },
  {
    icon: <Category2 size={18} strokeWidth={2} />,
    title: "Categories",
    link: "/categories",
    isOpen: false,
  },
  {
    icon: <Package size={18} strokeWidth={2} />,
    title: "Products",
    link: "/products",
    isOpen: false,
  },
  {
    icon: <Users size={18} strokeWidth={2} />,
    title: "Users",
    link: "/users",
    isOpen: false,
  },
  {
    icon: <Settings2 size={18} strokeWidth={2} />,
    title: "Settings",
    link: "/settings",
    isOpen: false,
  },
];

export default menus;
