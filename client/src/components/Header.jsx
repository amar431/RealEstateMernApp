// import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Header = () => {
    const {currentUser} = useSelector(state=>state.user)
    return (
        <header className="bg-blue-400 py-4  shadow-md">
            <div className='flex justify-between items-center max-w-6xl mx-auto p-2'>
            <Link to='/'>
            <h1  className='flex flex-wrap'>
            <span className="text-white text-sm sm:text-xl font-bold ">Amar</span>
            <span className="text-white text-sm sm:text-xl font-bold">Estates</span>
            </h1>
            </Link>
            <form>
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>

                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:w-22" placeholder="Search..." type="text" name="search"/>
            </label>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline hover:underline cursor-pointer'>Home</li>
                </Link>
                <Link to='/about'>
                <li className='hidden sm:inline hover:underline cursor-pointer'>About</li>
                </Link>
                <Link to='/profile'>
                    {currentUser ? (
                        <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile'  />
                    ): (

                     <li className='hover:underline cursor-pointer'>Sign in</li>
                    )}
                </Link>
            </ul>
            </div>
        </header>
    );
}

export default Header;
