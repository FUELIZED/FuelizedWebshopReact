import { Link } from "react-router-dom"

export const Nav = (arg) => {
    return (
        <nav className="bg-zinc-900 border-zinc-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" class="flex items-center">
                    <img src="src\assets\wit_zwart_randje.png" className="self-center text-xl font-semibold whitespace-nowrap text-white w-32" alt="Fuelized" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-col p-4 mt-4 border border-zinc-700 rounded-lg bg-zinc-800 md:flex-row md:space-x-8 md:mt-0 
                    md:text-sm md:font-medium md:border-0 md:bg-zinc-900 dark:border-zinc-700">
                    <li>
                        <Link to="/gallery" className={`block py-2 pl-3 pr-4 ${arg.active === "gallery" ? "text-blue-400": "text-gray-400"} bg-blue-700 rounded md:bg-transparent md:p-0`}>
                            Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/music" className={`block py-2 pl-3 pr-4 ${arg.active === "music" ? "text-blue-400": "text-gray-400"} bg-blue-700 rounded md:bg-transparent md:p-0`}>
                            Music
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className={`block py-2 pl-3 pr-4 ${arg.active === "shop" ? "text-blue-400": "text-gray-400"} bg-blue-700 rounded md:bg-transparent md:p-0`}>
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/labels" className={`block py-2 pl-3 pr-4 ${arg.active === "labels" ? "text-blue-400": "text-gray-400"} bg-blue-700 rounded md:bg-transparent md:p-0`}>
                        Labels
                        </Link>
                    </li>
                    <li>
                        <Link to="/freedownloads" className={`block py-2 pl-3 pr-4 ${arg.active === "freedownloads" ? "text-blue-400": "text-gray-400"} bg-blue-700 rounded md:bg-transparent md:p-0`}>
                        Free Downloads
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

