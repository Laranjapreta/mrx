import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const footerLinks = [
  { label: "home", href: "/" },
  { label: "trabalhos", href: "#projetos" },
  { label: "sobre", href: "#sobre" },
  { label: "serviços", href: "#servicos" },
  { label: "colaboração", href: "#colaboracao" },
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
      <Container className="py-24 text-center">
        <p className="text-muted text-sm uppercase tracking-widest mb-4">
          Bem-vindo ao lar de realidades digitais estelares
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Nós <span className="italic">#fazemosMelhor</span>
        </h2>
        <a
          href="mailto:contato@mrx.com.br"
          className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80 px-8 py-4 text-lg font-medium transition-colors duration-200"
        >
          Vamos trabalhar juntos
          <ArrowUpRight size={20} />
        </a>
      </Container>

      <div className="border-t border-border">
        <Container className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            MRX.
          </Link>

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
        </Container>

        <div className="border-t border-border">
          <Container className="py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted">
            <span>&copy; 2026 MRX&trade;</span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-foreground transition-colors">
                política de cookies
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                política de privacidade
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                termos e condições
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
