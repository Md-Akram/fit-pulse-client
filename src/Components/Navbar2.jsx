import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../hooks/AuthProvider";




function NavList() {
    const { currentUser, logOut } = useContext(AuthContext)



    const active = 'inline-block rounded border-teal-600 bg-teal-600 px-4 py-2 text-sm font-medium text-white'
    const inActive = 'inline-block rounded px-4 py-2 text-sm font-medium text-teal'

    return (
        <ul className="my-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='/' className={({ isActive }) => isActive ? active : inActive}>
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='gallery' className={({ isActive }) => isActive ? active : inActive}>
                    Gallery
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='trainers' className={({ isActive }) => isActive ? active : inActive}>
                    Trainers
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='classes' className={({ isActive }) => isActive ? active : inActive}>
                    Classes
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='dashboard' className={({ isActive }) => isActive ? active : inActive}>
                    Dashboard
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <NavLink to='community' className={({ isActive }) => isActive ? active : inActive}>
                    Community
                </NavLink>
            </Typography>


            {
                currentUser && <div className="flex flex-row items-center">
                    <Avatar src={currentUser.photoUrl || "https://images.unsplash.com/photo-1527980965255-d3b416303d12"} className="h-6 w-6" />
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-medium"
                    >
                        <p className="flex items-center">
                            {currentUser.displayName || "user"}
                        </p>
                    </Typography>
                </div>
            }

            {currentUser ? <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <button onClick={() => logOut()} className={active}>
                    Log Out
                </button>
            </Typography> : <>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <NavLink to='login' className={({ isActive }) => isActive ? active : inActive}>
                        Login
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <NavLink to='register' className={({ isActive }) => isActive ? active : inActive}>
                        Register
                    </NavLink>
                </Typography>
            </>}

        </ul>
    );
}

export function NavbarSimple() {


    const [openNav, setOpenNav] = useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className=" max-w-none px-6 py-3 bg-black rounded-none border-none">
            <div className="flex items-center justify-between text-blue-gray-900">
                <div className="flex flex-row gap-2 items-center">
                    <Avatar src="https://images.pexels.com/photos/39308/runners-silhouettes-athletes-fitness-39308.jpeg" alt="avatar" className="h-8 w-8" />
                    <Typography
                        as="li"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        <Link to="/">
                            Fit Pulse
                        </Link>
                    </Typography>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
