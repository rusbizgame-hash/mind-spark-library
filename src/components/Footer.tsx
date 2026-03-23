import { BookOpen, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-base font-semibold text-foreground">MindLibrary</span>
          </a>

          {/* Credit */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Сделано КОРИТМ центром с любовью ко всем, кто думает
            <Heart className="h-3.5 w-3.5 text-primary" />
          </p>

          {/* Disclaimer */}
          <p className="max-w-md text-xs text-muted-foreground/70">
            Ссылки на книги ведут в магазин Ozon, а ресурсы — на их официальные сайты.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Telegram", url: "https://t.me/" },
              { name: "Дзен", url: "https://dzen.ru/" },
              { name: "ВКонтакте", url: "https://vk.com/" },
              { name: "Рутуб", url: "https://rutube.ru/" },
              { name: "МАХ", url: "#" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary px-4 py-2 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
