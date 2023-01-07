import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="">
                <h1 className="pb-4 text-white text-2xl">⚠️404 Not Found⚠️</h1>
                <Link to="/" className="ml-auto place-self-center text-white hover:text-indigo-400 bold">← Go back</Link>
            </div>
        </div>
    )
};