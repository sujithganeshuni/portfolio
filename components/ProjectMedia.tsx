import { Project } from "@/lib/projects";

export default function ProjectMedia({ media }: { media: Project["media"] }) {
  if (media.type === "image") {
    return (
      <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/5">
        <img
          src={media.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] rounded-xl bg-black/5 flex items-center justify-center text-sm text-[#6E6E73]">
      Video Preview
    </div>
  );
}