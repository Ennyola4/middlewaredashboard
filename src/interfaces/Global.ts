import { type ReactNode } from "react";

export interface RouteProps {
  path: string;
  name: string;
  element: ReactNode;
  children?: RouteProps[];
}

export interface NavSection {
  title: string;
  icon: ReactNode;
  links: {
    title: string;
    href: string;
    icon: ReactNode;
  }[];
}

