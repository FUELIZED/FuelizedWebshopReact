import { Link } from "react-router-dom"
import {IoMdPhotos, IoIosMusicalNotes, IoMdBasket, IoMdContact, IoMdInformationCircleOutline, IoMdInformation, IoMdCloudDownload, IoMdBriefcase} from "react-icons/io"
import {GiCalendar} from "react-icons/gi"
import { RiAccountCircleFill } from "react-icons/ri"
import { FaEnvelope } from "react-icons/fa"
import { useOnHoverOutside } from "../../hooks/usOnHoverOutside"
import { useRef, useState } from "react"

const navStyle = `block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 flex gap-2 place-items-center hover:text-white`;

function Dropdown(arg) { // arg.active = title arg.el = array of objects with title and link
    const dropdownRef = useRef(null);
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
    
    const closeOnHoverMenu= () => {
        setMenuDropDownOpen(false);
    }
    
    useOnHoverOutside(dropdownRef, closeOnHoverMenu);
    
    return (
        <>
        <div class="mobile:hidden" ref={dropdownRef}>
            <button
              class={`text-dark-grey-100 ${arg.active === arg.title.toLowerCase() ? "text-blue-400": "text-gray-400"}`}
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
              >{arg.title}</button>
            {isMenuDropDownOpen && <Menu el={arg.el}/>}
          </div>
        </>
    )
}
function Menu(arg) {
    console.log(arg.el)
    return (
        <>
            <div className="dropdown-menu absolute pt-1 bg-zinc-900 px-3 pb-3 transform -translate-x-5 rounded-lg shadow-lg shadow-zinc-900">
                <ul>
                {arg.el.map((item) => {
                    console.log(item)
                    return (
                        <li>
                            <Link to={item.link} className={`dropdown-item ${navStyle} text-gray-400 m-2`}>{item.title}</Link>
                        </li>
                    )
                })}
                </ul>
            </div>
        </>
    )
}

export const Nav = (arg) => {
    const galleryIcon = <IoMdPhotos className={`${arg.active === "gallery" ? "fill-blue-400": "fill-gray-400"}`}/>
    const musicIcon = <IoIosMusicalNotes className={`${arg.active === "music" ? "fill-blue-400": "fill-gray-400"}`}/>
    const shopIcon = <IoMdBasket className={`${arg.active === "shop" ? "fill-blue-400": "fill-gray-400"}`}/>
    const contactIcon = <FaEnvelope className={`${arg.active === "contact" ? "fill-blue-400": "fill-gray-400"}`}/>
    const downloadsIcon = <IoMdCloudDownload className={`${arg.active === "downloads" ? "fill-blue-400": "fill-gray-400"}`}/>
    const eventsIcon = <GiCalendar className={`${arg.active === "events" ? "fill-blue-400": "fill-gray-400"}`}/>
    const accountIcon = <RiAccountCircleFill className={`${arg.active === "account" ? "fill-blue-400": "fill-gray-400"}`}/>


    return (
        <nav id="navbartop" className="bg-zinc-900 border-zinc-200 px-2 sm:px-4 py-2.5">
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
                        <Link to="/contact" className={`${navStyle} ${arg.active === "contact" ? "text-blue-400": "text-gray-400"}`}>
                            {contactIcon}Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className={`${navStyle} ${arg.active === "events" ? "text-blue-400": "text-gray-400"}`}>
                            {eventsIcon}Events
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={`${navStyle} ${arg.active === "gallery" ? "text-blue-400": "text-gray-400"}`}>
                            {galleryIcon}Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/music" className={`${navStyle} ${arg.active === "music" ? "text-blue-400": "text-gray-400"}`}>
                            <div className="flex place-items-center gap-1">
                                <p className="place-self-start pt-1">{musicIcon}</p>
                                <Dropdown active={arg.active} title="Music" el ={[
                                    {link:"releases",title:"Releases"},
                                    {link:"freedownloads",title:"Free Downloads"},
                                    {link:"labels",title:"Labels"},
                                    // /Downloads niet hier            <<<<<<<------------------------------------------
                                    ]} />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/shop" className={`${navStyle} ${arg.active === "shop" ? "text-blue-400": "text-gray-400"}`}>
                            <div className="flex place-items-center gap-1">
                                <p className="place-self-start pt-1">{shopIcon}</p>
                                <Dropdown active={arg.active} title="Shop" el={[
                                    {link:"hoodies",title:"Hoodies"},
                                    {link:"tshirts",title:"T-Shirts"},
                                    {link:"goodiebags",title:"Goodiebags"},
                                    ]}/>
                            </div>
                        </Link>
                    </li>
                    <li> 
                        <Link to="/downloads" className={`${navStyle} ${arg.active === "downloads" ? "text-blue-400": "text-gray-400"}`}>
                            {downloadsIcon}Downloads
                        </Link>
                    </li>
                
                    <li>
                        <Link to="/account" className={`${navStyle} ${arg.active === "account" ? "text-blue-400": "text-gray-400"}`}>
                            <div className="flex place-items-center gap-1">
                                <p className="place-self-start pt-1">{accountIcon}</p>
                                <Dropdown active={arg.active} title="Account" el={[
                                    {link:"account",title:"My Account"},
                                    {link:"accountdetails",title:"Account details"},
                                    {link:"myorders",title:"My orders"},
                                    // /Downloads moet hier komen! Aangezien je een track koopt, komt de download in je account.          <<<<<<<------------------------------------------
                                    ]}/>
                            </div>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/myaccount" className={`${navStyle} ${arg.active === "myaccount" ? "text-blue-400": "text-gray-400"}`}>
                            {myaccountIcon}My account
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/accountdetails" className={`${navStyle} ${arg.active === "accountdetails" ? "text-blue-400": "text-gray-400"}`}>
                            {accountdetailsIcon}Account details
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/myorders" className={`${navStyle} ${arg.active === "myorders" ? "text-blue-400": "text-gray-400"}`}>
                            {myordersIcon}My orders
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/freedownloads" className={`${navStyle} ${arg.active === "freedownloads" ? "text-blue-400": "text-gray-400"}`}>
                        {freedownloadsIcon}Free Downloads
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/labels" className={`${navStyle} ${arg.active === "labels" ? "text-blue-400": "text-gray-400"}`}>
                        {labelsIcon}Labels
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/musicreleases" className={`${navStyle} ${arg.active === "musicreleases" ? "text-blue-400": "text-gray-400"}`}>
                            {musicreleasesIcon}Music Releases
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/hoodies" className={`${navStyle} ${arg.active === "hoodies" ? "text-blue-400": "text-gray-400"}`}>
                            {hoodiesIcon}Hoodies
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/tshirts" className={`${navStyle} ${arg.active === "tshirts" ? "text-blue-400": "text-gray-400"}`}>
                            {tshirtsIcon}T-Shirts
                        </Link>
                    </li> */}
                    {/* <li>
                        <Link to="/goodiebags" className={`${navStyle} ${arg.active === "goodiebags" ? "text-blue-400": "text-gray-400"}`}>
                            {goodiebagsIcon}Goodiebags
                        </Link>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    )
}
