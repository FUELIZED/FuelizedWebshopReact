import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Event = (arg) => {
    return (
        <div className="bg-zinc-700 w-full rounded-lg">
            <div className="flex">
                <div className="bg-zinc-50 w-80 aspect-square mr-4 rounded-l-lg"></div>
                <div className="">
                    <h1 className="text-5xl font-semibold my-2">{arg.eventname}</h1>
                    <p className="text-sm flex place-items-center gap-2"><MdDateRange/> {arg.date}<span className="text-xs">{arg.time}</span></p>
                    <a href={arg.location} target="_blank" className="text-sm">{arg.locationName}</a>
                    {/* <Link to={arg.location} className="text-sm">{arg.locationName}</Link> */}

                </div>
            </div>
        </div>
    )
}
