import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { books, categories, resources, type Category } from "@/data/books";
import BookCard from "@/components/BookCard";
import { ExternalLink } from "lucide-react";

const ResourceItem = ({ res, index }: { res: typeof import("@/data/books").resources[number]; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref}
      href={res.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between rounded-lg border border-border/50 bg-card p-5 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {res.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{res.description}</p>
      </div>
      <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
};

const BookCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Все");

  const filtered =
    activeCategory === "Все"
      ? books
      : books.filter((b) => b.category === activeCategory);

  return (
    <section id="catalog" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Каталог книг
      </h2>

      {/* Category tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Book grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((book, i) => (
          <BookCard key={book.id} book={book} index={i} />
        ))}
      </div>

      {/* Resources section */}
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Полезные ресурсы
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {resources.map((res, i) => (
            <ResourceItem key={res.id} res={res} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCatalog;
