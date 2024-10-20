import { TecCardProps } from "../../types/tec-card";

export default function TecCard({ src, alt }: TecCardProps) {
  return (
    <img
      className="duration-100 hover:scale-110"
      width={96}
      src={src}
      alt={alt}
    />
  );
}
