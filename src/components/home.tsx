import Container from "./container";
import cv from "/curriculum/cv.pdf";

export default function Home() {
  return (
    <Container>
      <div className="mt-20 flex flex-col items-start justify-center gap-5">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Olá, eu sou Erik
          <br />
          Desenvolvedor Full-stack
        </h1>
        <p className="text-[#21243D]">
          Estudante de ciência da computação atualmente, já estudei 2 anos de
          engenharia da computação, atuei como autônomo com consultoria de
          marketing digital e agora me especializo e aprimoro habilidades no
          desenvolvimento WEB, tanto com o front quanto o back, me tornando um
          profissional FullStack.
        </p>
        <button className="rounded bg-[#FF6464] px-4 py-2 text-white duration-100 hover:bg-[#fa4c4c]">
          <a href="/curriculum/cv.pdf" download={cv} target="_blank">
            Donwload resume
          </a>
        </button>
      </div>
    </Container>
  );
}
