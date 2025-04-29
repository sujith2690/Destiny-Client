import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()
    const navigation = [
        { name: 'Home', href: '/', current: true },
        { name: 'About', href: '/about', current: false },
        { name: 'Services', href: '/services', current: false },
        { name: 'Contact', href: '/contact', current: false },
    ]
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
    }
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="p-4 bg-gray-100 shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <a href="#" className="flex items-center justify-center  text-2xl font-bold h-full">
                    <div className="flex items-center justify-center h-full">
                        <img
                            src="./logo.png"
                            alt="Logo"
                            className="h-10 sm:h-16 object-contain"
                        />
                    </div>
                </a>
                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-6 text-md font-medium">

                    {navigation.map((item) => (
                        <Link key={item.name}
                            to={item.href}
                            className={classNames(
                                item.href === location.pathname
                                    ? 'bg-gray-900 text-white'
                                    : '',
                                'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:delay-100 hover:text-blue-600'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to={'/profile'} className='flex items-center gap-1 cursor-pointer'>
                        <div className='bg-red-700 h-12 w-12 rounded-full overflow-hidden'>
                            <img className='object-cover w-full h-full' src="./Vagamon.jpg" alt="" />
                        </div>
                        Profile
                    </Link>
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
                <div className="md:hidden bg-gray-100">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
                        {navigation.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={toggleMenu}
                                    // className="transition-colors duration-300 hover:delay-150 hover:text-blue-600"
                                    className={classNames(
                                        item.href === location.pathname
                                            ? 'bg-gray-900 text-white'
                                            : 'text-black',
                                        'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 hover:delay-100 hover:text-blue-600')}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <Link to={'/profile'} className='flex items-center gap-1 text-sm cursor-pointer'>
                            <div className='bg-red-700 h-12 w-12 rounded-full overflow-hidden'>
                                <img className='object-cover w-full h-full' src="./Vagamon.jpg" alt="" />
                            </div>
                            Profile
                        </Link>
                    </ul>

                </div>
            )
            }
        </header >
    );
};

export default Navbar;
