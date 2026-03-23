import { BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Book } from "@/data/books";
import { getBookCover } from "@/data/books";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const cover = getBookCover(book.id);

  return (
    <Card className="group flex flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Cover */}
      <div className="relative h-48 overflow-hidden bg-secondary/50">
        {cover ? (
          <img
            src={cover}
            alt={book.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen className="h-12 w-12 text-muted-foreground/40 transition-colors group-hover:text-primary/60" />
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-2">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-primary/80">{book.author}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {book.description}
        </p>

        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full gap-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={book.ozonUrl} target="_blank" rel="noopener noreferrer">
            Купить на Ozon
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
