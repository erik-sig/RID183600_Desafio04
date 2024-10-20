import Container from "./container";

export default function Header() {
  return (
    <Container>
      <header className="flex justify-center py-5 sm:justify-end">
        <nav className="flex items-center gap-5 text-xl font-bold">
          <h2 className="duration-100 hover:opacity-80">
            <a href="#projects">Projetos</a>
          </h2>
          <h2 className="duration-100 hover:opacity-80">
            <a href="#tecs">Tecnologias</a>
          </h2>
          <h2 className="duration-100 hover:opacity-80">
            <a href="#footer">Contato</a>
          </h2>
        </nav>
      </header>
    </Container>
  );
}
