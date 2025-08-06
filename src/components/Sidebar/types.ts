export interface NavSection {
  title: string;
  icon: React.ReactNode;
  links: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
}

export type TransactionData = {
  hour: string;
  transactions: number;
  volume: number;
};