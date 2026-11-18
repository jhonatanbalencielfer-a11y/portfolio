export const CATEGORY_INFO = {
  frontend: {
    label: "Front-end",
    icon: "◫",
    description:
      "Projeto relacionado à construção de interfaces, páginas e experiências para aplicações web.",
  },
  backend: {
    label: "Back-end / API",
    icon: "{ }",
    description:
      "Projeto relacionado à lógica de servidor, desenvolvimento de APIs e comunicação entre aplicações.",
  },
  logic: {
    label: "Lógica",
    icon: "⌘",
    description:
      "Projeto voltado aos fundamentos da programação, algoritmos e resolução de problemas.",
  },
  other: {
    label: "Desenvolvimento",
    icon: "✳",
    description:
      "Repositório de estudos ou desenvolvimento. Consulte o GitHub para ver os detalhes e arquivos.",
  },
};

const KNOWN_DESCRIPTIONS = {
  "r1-front":
    "Repositório de desenvolvimento front-end. Acesse os arquivos para conferir a implementação e os recursos utilizados.",
  "FRONT-EClasses":
    "Projeto de interface relacionado à plataforma E-Classes, com foco na camada front-end.",
  "apiE-Classes":
    "Projeto de API relacionado ao E-Classes, voltado à comunicação e ao processamento de dados da aplicação.",
  "api-biblioteca":
    "Projeto de API com temática de biblioteca. Consulte o repositório para conhecer suas rotas e funcionalidades.",
  Formulario_HTML:
    "Exercício ou projeto de formulários com HTML, trabalhando estrutura e campos de entrada.",
  "logica.js":
    "Repositório de estudos de lógica de programação utilizando JavaScript.",
  "jhonatanbalencielfer-a11y-AV2_back_end_Jhonatan":
    "Projeto acadêmico de back-end, desenvolvido como atividade prática.",
  portfolio: "Repositório destinado ao desenvolvimento de portfólio pessoal.",
};

export function getRepositoryDescription(repo) {
  return (
    repo.description?.trim() ||
    KNOWN_DESCRIPTIONS[repo.name] ||
    CATEGORY_INFO[repo.category].description
  );
}
