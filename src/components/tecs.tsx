import { tecsData } from "../data/tecs-data";
import Container from "./container";
import TecCard from "./micro-componentes/tec-card";

export default function Tecs() {
  return (
    <div id="tecs" className="mt-20 bg-[#EDF7FA]">
      <Container>
        <h2 className="py-5 text-2xl font-bold">Principais Tecnologias</h2>
        <div className="flex flex-col items-center justify-center gap-5 pb-5 sm:flex-row">
          {tecsData.map((item) => (
            <TecCard src={item.src} alt={item.alt} />
          ))}
        </div>
      </Container>
    </div>
  );
}
