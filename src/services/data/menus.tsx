import { FaBookOpen } from "react-icons/fa";
import {
  Category2,
  Home,
  Package,
  Settings2,
  Users
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
    title: "Home",
    link: "/dashboard",
    isOpen: false,
  },
  // {
  //   icon: <Category2 size={18} strokeWidth={2} />,
  //   title: "Categories",
  //   link: "/categories",
  //   isOpen: false,
  // },
  // {
  //   icon: <Package size={18} strokeWidth={2} />,
  //   title: "Products",
  //   link: "/products",
  //   isOpen: false,
  // },
  {
    icon: <Users size={18} strokeWidth={2} />,
    title: "Students",
    link: "/students",
    isOpen: false,
  },
  {
    icon: <FaBookOpen size={18} strokeWidth={2} />,
    title: "Major",
    link: "/majors",
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
