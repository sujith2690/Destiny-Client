
import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaRoute } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const userId = useSelector((state) => state.user.userDetails._id)
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const path = location.pathname;

    console.log('Current path:', path);

    const navigation = [
        { name: 'Home', href: 'home', path: '/home' },
        { name: 'About', href: 'about', path: '/home' },
        { name: 'Packages', href: 'packages', path: '/home' },
        { name: 'Contact', href: 'contact', path: '/home' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <header className={`p-4 fixed sm:px-10 top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md backdrop-blur-md' : 'bg-white/0 backdrop-blur-lg'}`}>
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <RouterLink to="/home" className="cursor-pointer">                    <p className={`sm:text-5xl text-2xl  flex gap-2 ${scrolled ? 'text-black' : 'text-white'}`}>
                    <FaRoute className='transform scale-x-[-1] text-yellow-400' />
                    <span className='font-bold'>DESTINY</span>
                </p>
                </RouterLink>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-2 text-md font-medium">
                    {navigation.map((item) =>
                        path === '/home' ? (
                            <ScrollLink
                                key={item.name}
                                to={item.href}
                                smooth={true}
                                duration={500}
                                offset={-60}
                                className={classNames(
                                    `cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:delay-100 hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`
                                )}
                            >
                                {item.name}
                            </ScrollLink>
                        ) : (
                            <RouterLink
                                key={item.name}
                                to={item.path}
                                className={classNames(
                                    `cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:delay-100 hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`
                                )}
                            >
                                {item.name}
                            </RouterLink>
                        )
                    )}

                    {
                        userId ? (
                            <RouterLink to="/profile" className={`flex items-center gap-1 cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>
                                {/* <div className="bg-red-700 h-12 w-12 rounded-full overflow-hidden">
                            <img className="object-cover w-full h-full" src="./Vagamon.jpg" alt="Profile" />
                        </div> */}
                                Profile
                            </RouterLink>
                        ) : (
                            <RouterLink to="/login" className={`flex items-center gap-1 cursor-pointer ${scrolled ? 'text-black' : 'text-white'}`}>
                                <button className='px-2 py-1 bg-yellow-400 rounded-md text-white hover:bg-yellow-500 transition-colors duration-300'>
                                    Login
                                </button>
                            </RouterLink>
                        )
                    }
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <HiOutlineX className="w-8 h-8" />
                        ) : (
                            <HiOutlineMenuAlt3 className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
                        {navigation.map((item, index) => (
                            <ScrollLink
                                key={index}
                                to={item.href}
                                smooth={true}
                                duration={500}
                                offset={-60}
                                onClick={toggleMenu}
                                className="text-black rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:delay-100 hover:text-blue-600 cursor-pointer"
                            >
                                {item.name}
                            </ScrollLink>
                        ))}
                        <RouterLink to="/profile" className="flex items-center gap-1 text-sm cursor-pointer" onClick={toggleMenu}>
                            {/* <div className="bg-red-700 h-12 w-12 rounded-full overflow-hidden">
                                <img className="object-cover w-full h-full" src="./Vagamon.jpg" alt="Profile" />
                            </div> */}
                            Profile
                        </RouterLink>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
