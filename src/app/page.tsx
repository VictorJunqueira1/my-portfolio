import Navbar from '../components/Navbar';
import Apresentation from '@/components/Apresentation';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div className="dark:bg-black bg-slate-200 dark:text-white mx-auto min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-col max-w-7xl mx-auto w-full p-4">
          <Apresentation />
        </main>
        <section className='flex flex-col max-w-7xl mx-auto w-full p-4'>
          <AboutMe />
          <Projects />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}