import { Menu } from "lucide-react";
import Avatar from "~/svg/Avatar";
import DewuroLogo from "~/svg/DewuroLogo";

type HeaderProps = {
  readonly title?: string;
};

export default function Header({ title = "Dewuro" }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 bg-gray-100 shadow-sm">
      <Menu className="w-8 h-8 text-gray-600" />
      {/* <h1 className="text-2xl font-bold text-[#805CF7]">{title}</h1> */}
      <DewuroLogo className="w-24 h-8" />
      <Avatar className="w-9 h-9" />
    </header>
  );
}
