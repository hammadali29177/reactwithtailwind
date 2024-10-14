import React, { useState } from 'react';
import { HeroSection } from './HeroSection';
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";


export const Header = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        // <main>
        //     <nav className='bg-[#3b5d50] flex justify-between px-8 items-center py-6'>
        //         <section className='bg-cyan-700 flex items-center gap-4'>
        //             <IoIosMenu className='text-3xl' />
        //             <Link href={"/"} className='text-4xl font-mono'>
        //                 Logo
        //             </Link>
        //         </section>


        //         {/* sidebar mobile menu */}

        //         <div className='fixed h-full w-screen lg:hidden  backdrop-blur-sm top-0 right-0'>
        //             <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen gap-8 z-50 flex'>

        //             </section>

        //         </div>

        //         <section className='bg-green-600 flex items-center gap-4'>
        //             <FaRegUser  className='text-3xl' />
        //         </section>
        //     </nav>
        //     <hr className='border-white' />
        // </main>

        <>
            <div>
                <nav className='bg-[#3b5d50] p-4'>
                    <div className='flex items-center justify-between'>
                        {/* <div className='text-white text-2xl font-bold'>Furnni</div> */}
                        <a href='/' className='text-white text-2xl font-bold'>Furnni
                            <span>.</span>
                        </a>

                        <div className=' flex ml-48 mr-48 ' >
                            {/* <ul className='bg-red-500 hidden md:flex space-x-8 ml-14 mr-14'> */}
                            <ul className=' flex space-x-8 '>
                                <li className='text-[#dbd0d0] hover:text-[#ffffff] cursor-pointer'><a href='#' ></a>Home</li>
                                <li className='text-[#dbd0d0] hover:text-[#ffffff] cursor-pointer'><a href='#' ></a>Shop</li>
                                <li className='text-[#dbd0d0] hover:text-[#ffffff] cursor-pointer'><a href='#' ></a>About us</li>
                                <li className='text-[#dbd0d0] hover:text-[#ffffff] cursor-pointer'><a href='#' ></a>Services</li>
                                <li className='text-[#dbd0d0] hover:text-[#ffffff] cursor-pointer'><a href='#' ></a>Contact us</li>
                            </ul>

                            <ul className=' hidden md:flex space-x-4 ml-9 pr-5'>
                                <li className='text-white'><a href='#' ></a>
                                    <FiUser className='text-2xl' />
                                </li>
                                <li className='text-white'><a href='#' ></a>
                                    <BsCart2 className='text-2xl' />
                                </li>
                            </ul>
                        </div>


                        <div className='md:hidden'>
                            <button className='text-white' onClick={toggleMenu}>
                                <svg
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-linecap='round '
                                    stroke-linejoin='round '
                                    stroke-wdth='2'
                                    viewBox='0 0 24 24'
                                    className='w-6 h-6'>
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>


                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen ? (
                        <ul className='flex-col md:hidden '>
                            <li className='py-2'><a href='#' className='text-white'></a>Home</li>
                            <li className='py-2'><a href='#' className='text-white'></a>Shop</li>
                            <li className='py-2'><a href='#' className='text-white'></a>About us</li>
                            <li className='py-2'><a href='#' className='text-white'></a>Services</li>
                            <li className='py-2'><a href='#' className='text-white'></a>Blog</li>
                            <li className='py-2'><a href='#' className='text-white'></a>Contact us</li>
                        </ul>
                    ) : null}


                </nav>
                <HeroSection />
            </div>
        </>



    )
}
