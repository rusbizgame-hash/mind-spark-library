import { BookOpen, Heart } from "lucide-react";

const socialLinks = [
  { name: "Telegram", url: "https://t.me/coritmer" },
  { name: "Дзен", url: "https://dzen.ru/coritmer" },
  { name: "ВКонтакте", url: "https://vk.com/coritmer" },
  { name: "Рутуб", url: "https://rutube.ru/channel/58862919/" },
  { name: "МАХ", url: "https://max.ru/id781401280702_biz" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="/" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-base font-semibold text-foreground">MindLibrary</span>
          </a>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Сделано КОРИТМ центром с любовью ко всем, кто думает
            <Heart className="h-3.5 w-3.5 text-primary" />
          </p>

          <p className="max-w-md text-xs text-muted-foreground/70">
            Ссылки на книги ведут в магазин Ozon, а ресурсы — на их официальные сайты.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
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
