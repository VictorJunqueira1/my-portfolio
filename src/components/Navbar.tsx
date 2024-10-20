import Link from 'next/link';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


const Navbar = () => {
    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#skills', label: 'Habilidades' },
        { href: '#projects', label: 'Projetos' },
        { href: '#contact', label: 'Contato' },
    ];

    return (
        <>
            {/* Desktop Nabar */}
            <div className='hidden md:block'>
                <nav className="bg-black shadow-md fixed top-0 w-full z-10">
                    <div className="max-w-7xl p-4 mx-auto flex justify-between items-center border-b border-gray-800 pb-4">
                        <div className="text-white text-3xl font-bold">
                            {'{V}'}
                        </div>
                        <div className="flex space-x-4 text-xl">
                            <Link href="#home" className="text-white hover:bg-stone-900 py-2 px-4 rounded-lg transition duration-300">
                                Home
                            </Link>
                            <Link href="#skills" className="text-white hover:bg-stone-900 py-2 px-4 rounded-lg transition duration-300">
                                Habilidades
                            </Link>
                            <Link href="#projects" className="text-white hover:bg-stone-900 py-2 px-4 rounded-lg transition duration-300">
                                Projetos
                            </Link>
                            <Link href="#contact" className="text-white hover:bg-stone-900 py-2 px-4 rounded-lg transition duration-300">
                                Contato
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <div className='block md:hidden'>
                <div className="bg-black  border-b border-gray-800 shadow-md fixed top-0 w-full z-10 flex justify-between items-center p-4">
                    <div className="text-white text-3xl font-bold">
                        {'{V}'}
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-3">
                                <Menu size={24} className="text-white" />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="bg-black text-white max-h-screen overflow-y-auto">
                            <SheetHeader>
                                <div className='border-b border-gray-800'>
                                    <SheetTitle className="text-white text-xl mb-2 font-semibold flex items-start">
                                        {'{V}'}
                                    </SheetTitle>
                                </div>
                            </SheetHeader>
                            <div className="mt-4 space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block p-3 text-lg font-semibold text-white hover:bg-stone-900 transition duration-300 rounded-md"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    );
};

export default Navbar;