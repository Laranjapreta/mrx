import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Brain,
  Code2,
  Zap,
  Star,
  Users,
  Lightbulb,
  Target,
  GraduationCap,
  Quote,
} from "lucide-react";
import { Container } from "@/components/Container";

/* ───────────────────────────── NEON COLORS ───────────────────────────── */

const neon = {
  purple: "#bf5af2",
  green: "#30d158",
  blue: "#0a84ff",
  red: "#ff453a",
  yellow: "#ffd60a",
  pink: "#ff375f",
  cyan: "#64d2ff",
};

/* ───────────────────────────── DATA ───────────────────────────── */

const clients = [
  "AnnSacks",
  "Kohler",
  "Men's Health",
  "Calimero",
  "Daytona",
  "Klafs",
  "RoboKiller",
  "MassVentures AI",
];

const projects = [
  {
    tag: "App Mobile",
    title: "Kohler Moments",
    description:
      "Um app essencial para profissionais de design, construção e reforma. Descubra como apoiamos a Kohler desenvolvendo essa ferramenta.",
  },
  {
    tag: "Inteligência Artificial",
    title: "MassVentures AI",
    description:
      "Sistema de IA customizado para rastreamento de grants. Uma solução de IA pronta para produção desenvolvida do zero.",
  },
  {
    tag: "IA Jurídica",
    title: "SportLawyer AI",
    description:
      "O primeiro assistente jurídico com IA para o futebol. Uma solução inovadora que combina direito esportivo e inteligência artificial.",
    comingSoon: true,
  },
  {
    tag: "Privacidade de Dados",
    title: "Calimero",
    description:
      "Framework de aplicativos para privacidade de dados. Explore nossa colaboração que resultou em uma experiência de rebranding bem-sucedida.",
  },
];

const services = [
  {
    icon: Zap,
    number: "01",
    title: "Transformação Digital",
    description:
      "Pesquisa, descoberta e planejamento estratégico para modernizar sistemas e processos, alinhando metas imediatas e de longo prazo.",
    color: neon.yellow,
  },
  {
    icon: Code2,
    number: "02",
    title: "Soluções de Software",
    description:
      "Criamos soluções tecnológicas sob medida para negócios de todas as escalas, desde a descoberta do produto até a engenharia completa.",
    color: neon.green,
  },
  {
    icon: Monitor,
    number: "03",
    title: "Desenvolvimento Web",
    description:
      "Soluções web full-stack e multiplataforma com design responsivo, SEO otimizado e aplicações web customizadas.",
    color: neon.blue,
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Desenvolvimento Mobile",
    description:
      "Design e deploy de apps iOS e Android para marketing, vendas, saúde, entretenimento e engajamento de usuários.",
    color: neon.pink,
  },
  {
    icon: Brain,
    number: "05",
    title: "IA & Dados",
    description:
      "Integração de dados, machine learning e resolução de problemas com IA. Modelos customizados, apps orientados a dados e consultoria.",
    color: neon.purple,
  },
];

const testimonial = {
  company: "Kohler",
  location: "Fabricante de Produtos para Cozinha e Banheiro, Wisconsin",
  quote:
    "Eles estabeleceram nosso design system em parceria com nossos times de plataforma, realmente se tornaram uma extensão da nossa equipe e rapidamente entenderam nossas formas internas de trabalho. Demonstraram profundidade de expertise e profissionalismo.",
  author: "Romina Uceda",
  role: "Diretora de Experiência Digital, Kohler Co.",
  rating: 5.0,
};

const collaborationModels = [
  {
    icon: Users,
    title: "Integração Adaptativa de Talentos",
    description:
      "Equipes autônomas integradas ao seu fluxo de trabalho ou especialistas suplementando seu time interno.",
    color: neon.blue,
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description:
      "Orientação para organizações em transformação digital, validação de ideias e implementação de IA.",
    color: neon.yellow,
  },
  {
    icon: Target,
    title: "Projetos de Escopo Fixo",
    description:
      "Equipe dedicada entregando resultados definidos dentro de parâmetros específicos de prazo e orçamento.",
    color: neon.red,
  },
  {
    icon: GraduationCap,
    title: "Workshop Hub",
    description:
      "Sessões de transferência de conhecimento e treinamento prático lideradas por especialistas da indústria.",
    color: neon.green,
  },
];

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.03] via-background to-background" />

        <Container className="relative z-10 pt-32 pb-20 text-center">
          <p className="text-muted text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            Onde criatividade encontra tecnologia
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Transformamos
            <br />
            <span className="italic" style={{ color: neon.purple, textShadow: `0 0 20px ${neon.purple}40` }}>visões</span> em
            <br />
            realidades digitais
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-12" style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
            A MRX é um hub criativo de especialistas em software e engenharia de
            dados. Com nossa ampla gama de serviços e modelos de colaboração,
            estamos prontos para transformar suas ideias em soluções digitais
            extraordinárias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-foreground text-background hover:bg-foreground/80 px-8 py-4 text-base font-medium transition-colors duration-200"
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-border hover:border-foreground text-foreground px-8 py-4 text-base font-medium transition-colors duration-200"
            >
              Nossos serviços
            </a>
          </div>
        </Container>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted uppercase tracking-widest">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="py-20 border-t border-border">
        <Container>
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-12 text-center">
            Clientes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center py-6 text-muted/50 hover:text-foreground transition-colors duration-300 text-lg font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projetos" className="py-24 border-t border-border">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
                Projetos
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Nossos trabalhos
              </h2>
            </div>
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors"
            >
              Ver todos
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative bg-card hover:bg-card-hover border border-border transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-card to-border flex items-center justify-center">
                  <span className="text-muted/20 text-8xl font-bold select-none">
                    {project.title.charAt(0)}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted uppercase tracking-wider font-medium">
                      {project.tag}
                    </span>
                    {project.comingSoon && (
                      <span className="text-xs text-muted border border-border px-2 py-0.5">
                        Em breve
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 border-t border-border bg-card">
        <Container className="text-center">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            O que nossos clientes dizem
          </h2>

          <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
            <Quote size={40} className="text-muted/30 mb-6 mx-auto" />

            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{ color: neon.yellow, fill: neon.yellow, filter: `drop-shadow(0 0 3px ${neon.yellow})` }}
                  />
                ))}
                <span className="text-sm text-muted ml-2">
                  {testimonial.rating}
                </span>
              </div>
            </div>

            <p className="text-xs text-muted mt-4">
              {testimonial.company} &mdash; {testimonial.location}
            </p>
          </div>
        </Container>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="servicos" className="py-24 border-t border-border">
        <Container>
          <div className="mb-16 text-center">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
              Serviços
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que fazemos
            </h2>
            <p className="text-muted text-lg" style={{ maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              Alguns aspectos do nosso trabalho são universais, mas nossa
              abordagem é o que faz toda a diferença.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="border border-border p-8 hover:bg-card transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      style={{ color: service.color, filter: `drop-shadow(0 0 6px ${service.color})` }}
                    />
                    <span className="text-xs text-muted font-mono">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}

            <div className="border border-border p-8 flex flex-col justify-center items-center text-center hover:bg-card transition-colors duration-300">
              <p className="text-sm text-muted mb-4">
                Quer saber mais sobre como podemos ajudar?
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-foreground hover:text-muted font-medium transition-colors"
              >
                Fale conosco
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── COLLABORATION ─── */}
      <section id="colaboracao" className="py-24 border-t border-border">
        <Container>
          <div className="mb-16 text-center">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
              Colaboração
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Modelos de colaboração
            </h2>
            <p className="text-muted text-lg" style={{ maxWidth: "560px", marginLeft: "auto", marginRight: "auto" }}>
              Uma colaboração bem-sucedida é a chave para alcançar seus
              objetivos de negócio minimizando riscos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="border border-border p-8 hover:border-foreground/30 transition-all duration-300 group"
                >
                  <Icon
                    size={32}
                    className="mb-6"
                    strokeWidth={1.5}
                    style={{ color: model.color, filter: `drop-shadow(0 0 6px ${model.color})` }}
                  />
                  <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {model.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section id="sobre" className="py-24 border-t border-border bg-card">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
                Sobre nós
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="italic" style={{ color: neon.pink, textShadow: `0 0 20px ${neon.pink}40` }}>#fazemosMelhor</span> não é
                apenas uma hashtag
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                É um princípio que guia nossas decisões e ações todos os dias.
                Trazemos adaptabilidade e ambição para nos alinhar com seus
                objetivos e manter o impulso forte.
              </p>
              <p className="text-muted leading-relaxed">
                Movidos pela curiosidade e compromisso com a qualidade, nosso
                time prospera em ambientes colaborativos, criando soluções
                impactantes e entregando experiências de usuário significativas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Inovação", desc: "Resolução criativa de problemas" },
                { label: "Colaboração", desc: "Ambientes colaborativos" },
                { label: "Integridade", desc: "Abordagem cuidadosa" },
                { label: "Excelência", desc: "Experiências significativas" },
              ].map((value) => (
                <div
                  key={value.label}
                  className="border border-border p-6 hover:border-foreground/30 transition-colors"
                >
                  <h4 className="font-bold mb-1">{value.label}</h4>
                  <p className="text-sm text-muted">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
