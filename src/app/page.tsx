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
      "Um app essencial para profissionais de design, construcao e reforma. Descubra como apoiamos a Kohler desenvolvendo essa ferramenta.",
  },
  {
    tag: "Inteligencia Artificial",
    title: "MassVentures AI",
    description:
      "Sistema de IA customizado para rastreamento de grants. Uma solucao de IA pronta para producao desenvolvida do zero.",
  },
  {
    tag: "IA Juridica",
    title: "SportLawyer AI",
    description:
      "O primeiro assistente juridico com IA para o futebol. Uma solucao inovadora que combina direito esportivo e inteligencia artificial.",
    comingSoon: true,
  },
  {
    tag: "Privacidade de Dados",
    title: "Calimero",
    description:
      "Framework de aplicativos para privacidade de dados. Explore nossa colaboracao que resultou em uma experiencia de rebranding bem-sucedida.",
  },
];

const services = [
  {
    icon: Zap,
    number: "01",
    title: "Transformacao Digital",
    description:
      "Pesquisa, descoberta e planejamento estrategico para modernizar sistemas e processos, alinhando metas imediatas e de longo prazo.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Solucoes de Software",
    description:
      "Criamos solucoes tecnologicas sob medida para negocios de todas as escalas, desde a descoberta do produto ate a engenharia completa.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Desenvolvimento Web",
    description:
      "Solucoes web full-stack e multiplataforma com design responsivo, SEO otimizado e aplicacoes web customizadas.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Desenvolvimento Mobile",
    description:
      "Design e deploy de apps iOS e Android para marketing, vendas, saude, entretenimento e engajamento de usuarios.",
  },
  {
    icon: Brain,
    number: "05",
    title: "IA & Dados",
    description:
      "Integracao de dados, machine learning e resolucao de problemas com IA. Modelos customizados, apps orientados a dados e consultoria.",
  },
];

const testimonial = {
  company: "Kohler",
  location: "Fabricante de Produtos para Cozinha e Banheiro, Wisconsin",
  quote:
    "Eles estabeleceram nosso design system em parceria com nossos times de plataforma, realmente se tornaram uma extensao da nossa equipe e rapidamente entenderam nossas formas internas de trabalho. Demonstraram profundidade de expertise e profissionalismo.",
  author: "Romina Uceda",
  role: "Diretora de Experiencia Digital, Kohler Co.",
  rating: 5.0,
};

const collaborationModels = [
  {
    icon: Users,
    title: "Integracao Adaptativa de Talentos",
    description:
      "Equipes autonomas integradas ao seu fluxo de trabalho ou especialistas suplementando seu time interno.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estrategica",
    description:
      "Orientacao para organizacoes em transformacao digital, validacao de ideias e implementacao de IA.",
  },
  {
    icon: Target,
    title: "Projetos de Escopo Fixo",
    description:
      "Equipe dedicada entregando resultados definidos dentro de parametros especificos de prazo e orcamento.",
  },
  {
    icon: GraduationCap,
    title: "Workshop Hub",
    description:
      "Sessoes de transferencia de conhecimento e treinamento pratico lideradas por especialistas da industria.",
  },
];

/* ───────────────────────────── PAGE ───────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-6 font-medium">
            Onde criatividade encontra tecnologia
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Transformamos
            <br />
            <span className="text-accent">visoes</span> em
            <br />
            realidades digitais
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed mb-12">
            A MRX e um hub criativo de especialistas em software e engenharia de
            dados. Com nossa ampla gama de servicos e modelos de colaboracao,
            estamos prontos para transformar suas ideias em solucoes digitais
            extraordinarias.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 text-base font-medium transition-colors duration-200"
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-border hover:border-foreground text-foreground px-8 py-4 text-base font-medium transition-colors duration-200"
            >
              Nossos servicos
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted uppercase tracking-widest">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-12">
            Clientes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center py-6 text-muted/60 hover:text-foreground transition-colors duration-300 text-lg font-medium"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section id="projetos" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
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
              className="hidden md:inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors"
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
                    <span className="text-xs text-accent uppercase tracking-wider font-medium">
                      {project.tag}
                    </span>
                    {project.comingSoon && (
                      <span className="text-xs text-muted border border-border px-2 py-0.5">
                        Em breve
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-accent" />
                </div>
              </article>
            ))}
          </div>

          <a
            href="#"
            className="md:hidden inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mt-8"
          >
            Ver todos
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            O que nossos clientes dizem
          </h2>

          <div className="max-w-4xl">
            <Quote size={40} className="text-accent/30 mb-6" />

            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground/90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
              <div className="sm:ml-auto flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-accent fill-accent"
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
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="servicos" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
              Servicos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O que fazemos
            </h2>
            <p className="text-muted max-w-xl text-lg">
              Alguns aspectos do nosso trabalho sao universais, mas nossa
              abordagem e o que faz toda a diferenca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="bg-background p-8 hover:bg-card transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon
                      size={28}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs text-muted font-mono">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}

            <div className="bg-accent/5 p-8 flex flex-col justify-center items-start">
              <p className="text-sm text-muted mb-4">
                Quer saber mais sobre como podemos ajudar?
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
              >
                Fale conosco
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COLLABORATION ─── */}
      <section id="colaboracao" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
              Colaboracao
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Modelos de colaboracao
            </h2>
            <p className="text-muted max-w-xl text-lg">
              Uma colaboracao bem-sucedida e a chave para alcancar seus
              objetivos de negocio minimizando riscos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="border border-border p-8 hover:border-accent/30 transition-all duration-300 group"
                >
                  <Icon
                    size={32}
                    className="text-accent mb-6"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {model.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {model.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section id="sobre" className="py-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-muted uppercase tracking-[0.3em] mb-3">
                Sobre nos
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-accent">#fazemosMelhor</span> nao e
                apenas uma hashtag
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-4">
                E um principio que guia nossas decisoes e acoes todos os dias.
                Trazemos adaptabilidade e ambicao para nos alinhar com seus
                objetivos e manter o impulso forte.
              </p>
              <p className="text-muted leading-relaxed">
                Movidos pela curiosidade e compromisso com a qualidade, nosso
                time prospera em ambientes colaborativos, criando solucoes
                impactantes e entregando experiencias de usuario significativas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Inovacao", desc: "Resolucao criativa de problemas" },
                { label: "Colaboracao", desc: "Ambientes colaborativos" },
                { label: "Integridade", desc: "Abordagem cuidadosa" },
                { label: "Excelencia", desc: "Experiencias significativas" },
              ].map((value) => (
                <div
                  key={value.label}
                  className="border border-border p-6 hover:border-accent/30 transition-colors"
                >
                  <h4 className="font-bold mb-1">{value.label}</h4>
                  <p className="text-sm text-muted">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
