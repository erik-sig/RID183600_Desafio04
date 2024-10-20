import { ProjectCardProps } from "../../types/project-card";

export default function ProjectCard({
  title,
  text,
  img,
  href,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center justify-start gap-10 border-b-2 pb-5 sm:flex-row sm:items-start">
      <a className="min-w-[246px] duration-100 hover:scale-110" href={href}>
        <img className="w-[246px]" src={img} alt={title} />
      </a>

      <div className="flex flex-col items-start justify-start gap-2">
        <h2 className="text-3xl font-bold text-[#21243D]">{title}</h2>
        <p className="text-[#21243D]">{text}</p>
      </div>
    </div>
  );
}
