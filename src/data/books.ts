export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  category: string;
  ozonUrl: string;
}

export const categories = [
  "Все",
  "ТРИЗ",
  "Траблшутинг",
  "Критическое мышление",
  "Когнитивная эффективность",
  "Логика",
  "Аргументация",
] as const;

export type Category = (typeof categories)[number];

export const books: Book[] = [
  // --- Траблшутинг ---
  {
    id: "1",
    title: "Траблшутинг: Как решать нерешаемые задачи",
    author: "Сергей Фаер",
    description: "Практическое руководство по решению сложных задач, посмотрев на проблему с другой стороны.",
    category: "Траблшутинг",
    ozonUrl: "https://www.ozon.ru/product/trablshuting-kak-reshat-nereshaemye-zadachi-posmotrev-na-problemu-s-drugoy-storony-obl-faer-1176070424/?at=28t0GnK8qfW7YG67f0RZVQyF0R651vc325BPTYZYKyR",
  },
  // --- ТРИЗ ---
  {
    id: "2",
    title: "Найти идею: Введение в ТРИЗ",
    author: "Генрих Альтшуллер",
    description: "Классический труд основателя ТРИЗ — теории решения изобретательских задач.",
    category: "ТРИЗ",
    ozonUrl: "https://www.ozon.ru/product/nayti-ideyu-vvedenie-v-triz-teoriyu-resheniya-izobretatelskih-zadach-nauchnaya-literatura-482214488/?at=46tRWLYlNtzQVGVmTgEJ7rRT44WN3fKB4QO2iQqrK7X",
  },
  {
    id: "3",
    title: "ТРИЗ: пошаговое руководство для бизнеса в схемах",
    author: "Антон Кожемяко",
    description: "Практическое руководство по применению ТРИЗ в бизнесе с наглядными схемами.",
    category: "ТРИЗ",
    ozonUrl: "https://www.ozon.ru/product/triz-poshagovoe-rukovodstvo-dlya-biznesa-v-shemah-anton-kozhemyako-2262586280/?at=16tLmvnqyfOmKJG6tQ1EmjmT3ZW50gcyV72AofKWNZQ9",
  },
  {
    id: "4",
    title: "Ленинградская школа ТРИЗ",
    author: "Кислов, Пчёлкина",
    description: "Фундаментальные работы ленинградской школы теории решения изобретательских задач.",
    category: "ТРИЗ",
    ozonUrl: "https://www.ozon.ru/search/?text=%D0%9A%D0%98%D0%A1%D0%9B%D0%9E%D0%92+%D0%98+%D0%9F%D0%A7%D0%95%D0%9B%D0%9A%D0%98%D0%9D%D0%90&from_global=true",
  },
  {
    id: "5",
    title: "ТРИЗ и алгоритмы мышления",
    author: "А. Кислов",
    description: "Алгоритмы мышления на основе ТРИЗ для системного подхода к решению задач.",
    category: "ТРИЗ",
    ozonUrl: "https://www.ozon.ru/product/triz-i-algoritmy-myshleniya-kislov-a-1765937860/?at=BrtzmEP8QTOwEqOXi0BmOrRFX3WMzpcy511xnI5oygo9",
  },
  // --- Критическое мышление ---
  {
    id: "6",
    title: "Критическое мышление: анализируй, сомневайся, формируй своё мнение",
    author: "",
    description: "Книга по саморазвитию и формированию навыков критического мышления.",
    category: "Критическое мышление",
    ozonUrl: "https://www.ozon.ru/product/kriticheskoe-myshlenie-analiziruy-somnevaysya-formiruy-svoe-mnenie-knigi-po-samorazvitiyu-i-252642936/?at=mqtkYE9Y1c4R9N1JCKz8JglFDrYxKVCogMOr0tpQkrPW",
  },
  {
    id: "7",
    title: "Анатомия заблуждений: большая книга по критическому мышлению",
    author: "Никита Непряхин",
    description: "Разбор когнитивных искажений и заблуждений с практическими инструментами критического анализа.",
    category: "Критическое мышление",
    ozonUrl: "https://www.ozon.ru/product/anatomiya-zabluzhdeniy-bolshaya-kniga-po-kriticheskomu-myshleniyu-nepryahin-nikita-yurevich-226982193/?at=36tWMLOM7uWPV0KOCBKo00ksP53Kk0Ckwn0KkHQgKnYq",
  },
  {
    id: "8",
    title: "Критическое мышление: как думать под давлением",
    author: "Василий Пимкин",
    description: "Практические техники критического мышления в условиях стресса и давления.",
    category: "Критическое мышление",
    ozonUrl: "https://www.ozon.ru/product/kriticheskoe-myshlenie-kak-dumat-pod-davleniem-pimkin-vasiliy-2919985625/?at=EqtkGRYG1cPmNOBNU9j6Dg6CjGqPKrfnxrOZWHwB4BrK",
  },
  {
    id: "9",
    title: "Искусство системного мышления",
    author: "",
    description: "Необходимые знания о системах и творческом подходе к решению проблем.",
    category: "Критическое мышление",
    ozonUrl: "https://www.ozon.ru/product/iskusstvo-sistemnogo-myshleniya-neobhodimye-znaniya-o-sistemah-i-tvorcheskom-podhode-k-resheniyu-147743868/?at=oZt6GxQGlf1NvxmphpkZvBVi39RxK2CJ5Mqp3h1kPly2",
  },
  // --- Когнитивная эффективность ---
  {
    id: "10",
    title: "Сытый мозг — счастливый мозг",
    author: "Рафаэль Келлман",
    description: "Еда лечит депрессию, тревогу и гнев. Научный подход к питанию для мозга.",
    category: "Когнитивная эффективность",
    ozonUrl: "https://www.ozon.ru/product/sytyy-mozg-schastlivyy-mozg-eda-lechit-depressiyu-trevogu-i-gnev-kellman-rafael-elektronnaya-kniga-909372037/?at=mqtkYE9Y1cVrzn5Gf2WmWrVInB1LNVHQyP5rQUq598Pk",
  },
  {
    id: "11",
    title: "Теория игр. Как нами правят чужие стратегии",
    author: "",
    description: "Введение в теорию игр и стратегическое мышление в повседневной жизни.",
    category: "Когнитивная эффективность",
    ozonUrl: "https://www.ozon.ru/product/teoriya-igr-kak-nami-pravyat-chuzhie-strategii-1868825350/?at=99trKoDKRsRgPPQmHxJ0AwqHxEGqBkFDqXr1mcQnzwP9",
  },
  // --- Логика ---
  {
    id: "12",
    title: "Логика. Лучшие советские учебники",
    author: "Георгий Челпанов",
    description: "Классический учебник по логике, переизданный как лучший советский учебник.",
    category: "Логика",
    ozonUrl: "https://www.ozon.ru/product/logika-luchshie-sovetskie-uchebniki-chelpanov-georgiy-ivanovich-1771376941/?at=Y7tjZGwZkUDARKNmipmX4MjhKDkROZfKo0ADJiWYJWVk",
  },
  {
    id: "13",
    title: "Логика. Упражнения по логике. Логические ошибки",
    author: "Сергей Виноградов",
    description: "Комплект по логике: теория, упражнения и разбор типичных логических ошибок.",
    category: "Логика",
    ozonUrl: "https://www.ozon.ru/product/logika-uprazhneniya-po-logike-logicheskie-oshibki-komplekt-vinogradov-sergey-nikolaevich-kuzmin-855200631/?at=NOtwxvzxVcjyz9YpCLyB9Yms28MK49iMm89Z5I3XkoJ8",
  },
  // --- Аргументация ---
  {
    id: "14",
    title: "Искусство спора. О теории и практике спора",
    author: "С.И. Поварнин",
    description: "Репринт классического издания 1923 года о теории и практике спора.",
    category: "Аргументация",
    ozonUrl: "https://www.ozon.ru/product/iskusstvo-spora-o-teorii-i-praktike-spora-s-i-povarnin-reprint-izdaniya-1923g-povarnin-754393260/?at=gpt4WVDWPi1p4WzZfZ6xowzTJyjAQWCOkojxoUBJjmqq",
  },
  {
    id: "15",
    title: "Психология убеждения: 60 доказанных способов быть убедительным",
    author: "Роберт Чалдини",
    description: "60 научно доказанных методов убеждения от ведущего эксперта в области влияния.",
    category: "Аргументация",
    ozonUrl: "https://www.ozon.ru/product/psihologiya-ubezhdeniya-60-dokazannyh-sposobov-byt-ubeditelnym-neon-pocketbooks-chaldini-robert-1551780095/?at=LZtlOE2DxsPMZkBwux4x72KCxnwKm0hkAKo0KtQx3DRj",
  },
];

export interface Resource {
  id: string;
  name: string;
  url: string;
  description: string;
}

export const resources: Resource[] = [
  {
    id: "r1",
    name: "Центр дизайн-мышления",
    url: "https://dtcenter.ru",
    description: "Образовательный центр по дизайн-мышлению",
  },
  {
    id: "r2",
    name: "Российская ассоциация ТРИЗ",
    url: "https://ratriz.ru",
    description: "Официальный сайт Российской ассоциации ТРИЗ",
  },
  {
    id: "r3",
    name: "Анна Обухова — Нейробиология продуктивности",
    url: "https://rutube.ru/video/98296064c8270d70d8c4243fed6f6971/",
    description: "Интервью о нейробиологии продуктивности и эффективной работе мозга",
  },
  {
    id: "r4",
    name: "Тест самодиагностики депрессии (для подростков)",
    url: "https://dszn.ru/testing/depres",
    description: "⚠️ Требует последующей валидации у терапевта!",
  },
  {
    id: "r5",
    name: "Тест Бека — диагностика депрессии (для взрослых)",
    url: "https://yasno.live/tests/depressiya-beka",
    description: "Шкала депрессии Бека для самодиагностики у взрослых",
  },
  {
    id: "r6",
    name: "Тест тревоги (HADS)",
    url: "https://yasno.live/tests/hads",
    description: "Госпитальная шкала тревоги и депрессии",
  },
  {
    id: "r7",
    name: "Тест на когнитивные искажения",
    url: "https://yasno.live/tests/kognitivnye-narusheniya",
    description: "Выявление когнитивных нарушений и искажений мышления",
  },
  {
    id: "r8",
    name: "Стратегии реагирования на стресс (опросник Лазаруса)",
    url: "https://yasno.live/tests/oprosnik-lazarusa-koping-strategii",
    description: "Определение ваших копинг-стратегий при стрессе",
  },
];
