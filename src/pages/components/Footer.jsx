import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <div className="h-20 bg-zinc-800 grid place-items-center">
            <div className="w-4/5">
                <ul className="flex justify-between">
                    <div>

                    </div>
                    <div className="flex gap-8">
                        <li>
                        <Link to="/termsandconditions" className={`text-gray-400`}>
                                    Terms & Conditions
                                </Link>
                        </li>
                        <li>
                            <Link to="/privacypolicy" className={`text-gray-400`}>
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <a href="mailto:contact@fuelized.com" className={`text-gray-400 hover:underline`}>contact@fuelized.com</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

