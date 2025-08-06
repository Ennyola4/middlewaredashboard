import { Link } from "react-router-dom";

import { cn } from "../../lib/utils";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;

}

export const NavItem = ({ href, icon, children }: NavItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-md text-xs text-grey-100 font-serif",
      "hover:bg-white hover:text-gray-500",
      "dark:hover:bg-gray-800 dark:hover:text-white",
      "transition-all duration-500 ease-out",
      "hover:shadow-sm hover:scale-[1] active:scale-[0.98]",
      "group transform-gpu" // GPU acceleration
    )}
  >
    <span className="text-lg transition-transform duration-500 group-hover:rotate-12">
      {icon}
    </span>
    <span className="transition-all duration-200 group-hover:translate-x-1">
      {children}
    </span>
  </Link>
);




















