import { navigationLinks } from "@/data/siteContent";
import Link from "next/link";
import Button from "./Button";
import { Mail, PhoneCall } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mx-container py-4 flex items-center justify-between">
      {/* Logo section */}
      <div>
        <h1 className="font-bold text-2xl">AWADA GROUP</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 font-bold">
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Contact Section */}
      <div className="flex gap-2">
        <Button>
          <PhoneCall size={15} /> Call
        </Button>
        <Button>
          <Mail size={18} /> Email
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
