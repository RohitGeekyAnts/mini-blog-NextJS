import Link from "next/link";
import { Book, Palette, PenTool } from "../../components/Icons";

const features = [
  {
    id: 1,
    title: "Design Basics",
    description: "Learn the core fundamentals of visual design and layout.",
    icon: Book,
  },
  {
    id: 2,
    title: "Color Theory",
    description: "Explore palettes, contrasts, and the psychology of color.",
    icon: Palette,
  },
  {
    id: 3,
    title: "Creative Tools",
    description: "Discover tools and workflows that enhance your creativity.",
    icon: PenTool,
  },
];

export default function DesignPage() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-16 py-12">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Design Insights</h1>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto">
          Ideas, principles, and inspiration for modern design.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] text-center justify-items-center">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article
              key={feature.id}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className=" justify-items-center rounded-2xl bg-white p-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <Icon className="h-8 w-8 text-indigo-600">
                    {features.icon}
                  </Icon>
                </span>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-4 text-md text-gray-600">
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
