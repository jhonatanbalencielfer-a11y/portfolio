# Portfólio de Jhonatan

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript. A página apresenta uma breve apresentação, áreas de conhecimento, processo de estudo e projetos públicos obtidos pela API do GitHub.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- API pública do GitHub

## Estrutura do projeto

```text
portfolio/
├── assets/
│   ├── css/       # Folhas de estilo organizadas por seção
│   └── js/        # Módulos de interface e integração com o GitHub
├── index.html     # Página principal
├── .gitignore     # Arquivos ignorados pelo Git
└── README.md      # Documentação do projeto
```

## Executando localmente

Como o JavaScript utiliza módulos ES, use um servidor local:

```powershell
npx serve .
```

Depois, acesse o endereço exibido pelo servidor no navegador.

## Integração com o GitHub

A aplicação consulta a API pública do GitHub para exibir o perfil e os repositórios públicos do usuário configurado em `assets/js/config.js`.
