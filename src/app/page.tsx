import AboutMe from '@/components/AboutMe';
import Navbar from '../components/Navbar';
import Apresentation from '@/components/Apresentation';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-black text-white mx-auto min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-col max-w-7xl mx-auto w-full p-4">
          <Apresentation />
          <AboutMe />
        </main>
        <Projects />
        <Footer />
      </div>
    </>
  );
}