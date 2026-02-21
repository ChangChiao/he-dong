"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brown-dark/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif-tc text-xl font-bold tracking-[4px] text-gold"
        >
          永豐佛具店
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-tan-light transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-tan-light md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "關閉選單" : "開啟選單"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="border-t border-brown-mid bg-brown-dark px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm text-tan-light transition-colors hover:text-gold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
