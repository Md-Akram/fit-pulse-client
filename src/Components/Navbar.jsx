import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const active = 'inline-block rounded border-teal-600 bg-teal-600 px-4 py-2 text-sm font-medium text-white'
    const inActive = 'inline-block rounded px-4 py-2 text-sm font-medium text-teal'

    return (
        <header className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="flex flex-row gap-2 items-center text-teal-600" to="/">
                            <span className="sr-only">Home</span>
                            <img
                                alt="Man"
                                src="https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg?auto=compress&cs=tinysrgb&w=600"
                                className="h-14 w-14 rounded-full object-cover"
                            />
                            <p className='text-teal-600 font-bold text-2xl' >Fit Pulse</p>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <NavLink to='/' className={({ isActive }) => isActive ? active : inActive}>
                                        Home
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='gallery' className={({ isActive }) => isActive ? active : inActive}>
                                        Gallery
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='trainer' className={({ isActive }) => isActive ? active : inActive}>
                                        Trainer
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='classes' className={({ isActive }) => isActive ? active : inActive}>
                                        Classes
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='dashboard' className={({ isActive }) => isActive ? active : inActive}>
                                        Dashboard
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to='community' className={({ isActive }) => isActive ? active : inActive}>
                                        Community
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <NavLink to='login' className={({ isActive }) => isActive ? active : inActive}>
                                Login
                            </NavLink>

                            <div className="hidden sm:flex">
                                <NavLink to='register' className={({ isActive }) => isActive ? active : inActive}>
                                    Register
                                </NavLink>
                            </div>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2 items-center text-teal-600">
                        <img
                            alt="Man"
                            src="https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="h-14 w-14 rounded-full object-cover"
                        />
                        <p className='text-sm' >Fit user</p>
                    </div>
                </div>
            </div>
        </header>

        // <nav class="bg-gray-800">
        //     <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        //         <div class="relative flex h-16 items-center justify-between">
        //             <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

        //                 <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
        //                     <span class="absolute -inset-0.5"></span>
        //                     <span class="sr-only">Open main menu</span>

        //                     <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                     </svg>

        //                     <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                     </svg>
        //                 </button>
        //             </div>
        //             <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        //                 <div class="flex flex-shrink-0 items-center">
        //                     <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
        //                 </div>
        //                 <div class="hidden sm:ml-6 sm:block">
        //                     <div class="flex space-x-4">

        //                         <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
        //                         <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        //                 <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        //                     <span class="absolute -inset-1.5"></span>
        //                     <span class="sr-only">View notifications</span>
        //                     <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
        //                         <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        //                     </svg>
        //                 </button>


        //                 <div class="relative ml-3">
        //                     <div>
        //                         <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        //                             <span class="absolute -inset-1.5"></span>
        //                             <span class="sr-only">Open user menu</span>
        //                             <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        //                         </button>
        //                     </div>


        //                     <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">

        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
        //                         <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>


        //     <div class="sm:hidden" id="mobile-menu">
        //         <div class="space-y-1 px-2 pb-3 pt-2">

        //             <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
        //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
        //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
        //             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        //         </div>
        //     </div>
        // </nav>

    )
}

export default Navbar