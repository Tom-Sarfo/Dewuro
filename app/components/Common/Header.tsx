import { Menu, BarChart3 } from "lucide-react";

type HeaderProps = {
  readonly title?: string;
};

export default function Header({ title = "Dewuro" }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gray-100">
      <Menu className="w-6 h-6 text-gray-600" />
      <h1 className="text-xl font-bold text-[#805CF7]">{title}</h1>
      <BarChart3 className="w-6 h-6 text-gray-600" />
    </header>
  );
}
