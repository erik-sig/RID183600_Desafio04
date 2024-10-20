import { ProjectCardProps } from "../types/project-card";

export const projectData: ProjectCardProps[] = [
  {
    title: "Dev Control",
    text: "Projeto com o objetivo de ser um help desk, foi montado com Next, TypeScript, Tailwind, MongoDB com Prisma e o sistema de autenticação NextAuth.",
    img: "/projects/dev-control.png",
    href: "https://dev-controle-plum.vercel.app",
  },
  {
    title: "GitHub Finder",
    text: "Projeto com o intuito de buscas na API do github, foi montado com React, Axios e Sass para estilização.",
    img: "/projects/git-hub-finder-project.png",
    href: "https://git-hub-finder-react.vercel.app",
  },
  {
    title: "DalyGames",
    text: "Projeto com Next com o intuito de ser uma galeria de games, ele foi construído com TypeScript, uso de APIS externas com o próprio fetch usando de revalidates para o cache e voltado muito para o SEO e os metadados dinâmicos do Next.",
    img: "/projects/game-project.png",
    href: "https://projeto-games-next.vercel.app",
  },
];
