import About from "@/components/About";
import Banner from "@/components/Banner";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/projects";
import Tech from "@/components/Tech"

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        {/* <Certificates/> */}
        <Tech/>
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
