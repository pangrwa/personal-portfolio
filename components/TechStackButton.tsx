export default function TechStackButton({ tech }: { tech: string }) {
  return (
    <div
      className="rounded-full bg-white text-black px-3 py-1 text-xs font-light transition duration-500 hover:scale-110 cursor-pointer border-2 border-my-purple/[0.2]"
    >
      {tech}
    </div>
  );
}
