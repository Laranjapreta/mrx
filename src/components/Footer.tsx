import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "home", href: "/" },
  { label: "trabalhos", href: "#projetos" },
  { label: "sobre", href: "#sobre" },
  { label: "servicos", href: "#servicos" },
  { label: "colaboracao", href: "#colaboracao" },
  { label: "contato", href: "#contato" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
];

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-background">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <p className="text-muted text-sm uppercase tracking-widest mb-4">
          Bem-vindo ao lar de realidades digitais estelares
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Nos <span className="text-accent">#fazemosMelhor</span>
        </h2>
        <a
          href="mailto:contato@mrx.com.br"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 text-lg font-medium transition-colors duration-200"
        >
          Vamos trabalhar juntos
          <ArrowUpRight size={20} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter">
            MRX<span className="text-accent">.</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted">
            <span>&copy; 2026 MRX&trade;</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                politica de cookies
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                politica de privacidade
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                termos e condicoes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
