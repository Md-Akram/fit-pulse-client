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
    )
}

export default Navbar