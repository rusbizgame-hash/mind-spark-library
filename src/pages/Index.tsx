import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookCatalog from "@/components/BookCatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BookCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
