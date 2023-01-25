import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <div className="h-20 bg-zinc-800">
            footer
            <ul>
                <li>
                    <Link to="/privacypolicy" className={`text-gray-400`}>
                        Privacy Policy
                    </Link>
                </li>
            </ul>
        </div>
    )
}

