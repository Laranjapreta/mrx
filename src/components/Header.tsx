"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";

const navItems = [
  { label: "home", href: "/" },
  { label: "trabalhos", href: "#projetos" },
  { label: "sobre", href: "#sobre" },
  { label: "serviços", href: "#servicos" },
  { label: "colaboração", href: "#colaboracao" },
  { label: "contato", href: "#contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          MRX.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
