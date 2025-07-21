import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const socialLinks = [
    {
      icon: <FaInstagram size={19} />,
      href: "https://www.instagram.com/s.h.i.v__20/",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin size={19} />,
      href: "https://www.linkedin.com/in/shiv-kumarjha/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub size={19} />,
      href: "https://github.com/Shib2001",
      label: "GitHub",
    },
    {
      icon: <MdEmail size={19} />,
      href: "mailto:shivjha1983@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="w-full px-8 pb-4 mt-12">
      <div className="flex justify-between items-end w-full">
        {/* Copyright - Bottom Left */}
        <div className="text-gray-400 text-xs opacity-50 mb-1">
          © {new Date().getFullYear()} Shiv Kumar Jha. All rights reserved.
        </div>
        {/* Social Icons - Bottom Right */}
        <div className="flex space-x-4 mb-1">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              aria-label={link.label}
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 opacity-60 hover:opacity-80 text-xs"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
