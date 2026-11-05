import { Aurora, BackToTop, CursorGlow, PhotoWall, ScrollProgress } from "@/components/Effects";
import { Header, Navbar } from "@/components/Header";
import { Bio, Contact, Footer, News, Projects, Resume, Skills } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div className="relative">
        <PhotoWall />
        <Aurora />
        <main className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <Header />
          <Navbar />
          <Bio />
          <News />
          <Resume />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
      <BackToTop />
    </>
  );
}
