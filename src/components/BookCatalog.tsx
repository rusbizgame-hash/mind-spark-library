import { useState } from "react";
import { books, categories, type Category } from "@/data/books";
import BookCard from "@/components/BookCard";

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
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookCatalog;
