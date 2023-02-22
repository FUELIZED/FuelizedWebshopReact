import { MdDateRange, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';


export const Event = (arg) => {
    const linkTo = () => {
        if (arg.link) {
            window.open(arg.link, '_blank');
        }
    }
    // reverse date
    let d = arg.date.split('-');
    d = `${d[2]}-${d[1]}-${d[0]}`;
    if (d < new Date().toISOString().slice(0, 10)) return null; // comment deze lijn om past events ook te laten zien
    return (
        <div className="bg-zinc-700 rounded-lg drop-shadow-xl hover:bg-zinc-600 transition">
            <div className="flex flex-col">
                <div className={`w-80 aspect-video ${arg.image ? "bg-none" : "bg-zinc-50"} rounded-t-lg`}><img src={arg.image} alt="event foto" className={`h-full w-full justify-center rounded-t-lg ${arg.link ? "cursor-pointer":""}`} onClick={linkTo}/></div>
                <div className="w-80 p-3 pt-2 flex flex-col">
                    <h1 className="text-3xl font-semibold mb-1">{arg.eventname}</h1>
                    <p className="text-sm flex place-items-center gap-2"><MdDateRange/> {arg.date}<span className="text-xs">{arg.time}</span></p>
                    {/* <a href="" className='text-sm my-1'>More info</a> */}
                    <a href={arg.location} target="_blank" className="text-sm bg-blue-800 hover:bg-blue-700 hover:drop-shadow-lg py-1 rounded-full px-2 mt-2 w-max flex place-items-center gap-1"><MdLocationPin/> {arg.locationName}</a>
                    {/* <Link to={arg.location} className="text-sm">{arg.locationName}</Link> */}
                </div>
            </div>
        </div>
    )
}
