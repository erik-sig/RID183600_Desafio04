import { projectData } from "../data/project-data";
import Container from "./container";
import ProjectCard from "./micro-componentes/project-card";

export default function Projects() {
  return (
    <Container>
      <h2 id="projects" className="mb-10 mt-20 text-2xl font-bold">
        Projetos
      </h2>
      <section className="flex flex-col gap-5">
        {projectData.map((item) => (
          <ProjectCard
            title={item.title}
            text={item.text}
            img={item.img}
            href={item.href}
          />
        ))}
      </section>
    </Container>
  );
}
