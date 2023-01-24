import { Link } from "react-router-dom"
import {IoMdPhotos, IoIosMusicalNotes, IoMdBasket, IoMdDownload} from "react-icons/io"
import {FaRecordVinyl} from "react-icons/fa"


export const Nav = (arg) => {
    const navStyle = `block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 flex gap-2 place-items-center`
    const galleryIcon = <IoMdPhotos className={`${arg.active === "gallery" ? "fill-blue-400": "fill-gray-400"}`}/>
    const musicIcon = <IoIosMusicalNotes className={`${arg.active === "music" ? "fill-blue-400": "fill-gray-400"}`}/>
    const shopIcon = <IoMdBasket className={`${arg.active === "shop" ? "fill-blue-400": "fill-gray-400"}`}/>
    const labelsIcon = <FaRecordVinyl className={`${arg.active === "labels" ? "fill-blue-400": "fill-gray-400"}`}/>
    const freedownloadsIcon = <IoMdDownload className={`${arg.active === "freedownloads" ? "fill-blue-400": "fill-gray-400"}`}/>

    return (
        <nav className="bg-zinc-900 border-zinc-200 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <img src="src\assets\wit_zwart_randje.png" className="self-center text-xl font-semibold whitespace-nowrap text-white w-32" alt="Fuelized" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 border border-zinc-700 rounded-lg bg-zinc-800 md:flex-row md:space-x-8 md:mt-0 
                    md:text-sm md:font-medium md:border-0 md:bg-zinc-900 dark:border-zinc-700">
                    <li>
                        <Link to="/freedownloads" className={`${navStyle} ${arg.active === "freedownloads" ? "text-blue-400": "text-gray-400"}`}>
                        {freedownloadsIcon}Free Downloads
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={`${navStyle} ${arg.active === "gallery" ? "text-blue-400": "text-gray-400"}`}>
                            {galleryIcon}Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/labels" className={`${navStyle} ${arg.active === "labels" ? "text-blue-400": "text-gray-400"}`}>
                        {labelsIcon}Labels
                        </Link>
                    </li>
                    <li>
                        <Link to="/music" className={`${navStyle} ${arg.active === "music" ? "text-blue-400": "text-gray-400"}`}>
                            {musicIcon}Music
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className={`${navStyle} ${arg.active === "shop" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/musicreleases" className={`${navStyle} ${arg.active === "musicreleases" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Music Releases
                        </Link>
                    </li>
                    <li>
                        <Link to="/hoodies" className={`${navStyle} ${arg.active === "hoodies" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Hoodies
                        </Link>
                    </li>
                    <li>
                        <Link to="/tshirts" className={`${navStyle} ${arg.active === "tshirts" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}T-Shirts
                        </Link>
                    </li>
                    <li>
                        <Link to="/goodiebags" className={`${navStyle} ${arg.active === "goodiebags" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Goodiebags
                        </Link>
                    </li>
                    <li>
                        <Link to="/myaccount" className={`${navStyle} ${arg.active === "myaccount" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}My account
                        </Link>
                    </li>
                    <li>
                        <Link to="/accountdetails" className={`${navStyle} ${arg.active === "accountdetails" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Account details
                        </Link>
                    </li>
                    <li>
                        <Link to="/downloads" className={`${navStyle} ${arg.active === "downloads" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Downloads
                        </Link>
                    </li>
                    <li>
                        <Link to="/myorders" className={`${navStyle} ${arg.active === "myorders" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}My orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/termsandconditions" className={`${navStyle} ${arg.active === "termsandconditions" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Terms & Conditions
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacypolicy" className={`${navStyle} ${arg.active === "privacypolicy" ? "text-blue-400": "text-gray-400"}`}>
                            {shopIcon}Privacy Policy
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

