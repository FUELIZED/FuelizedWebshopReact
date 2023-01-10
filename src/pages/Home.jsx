import { Nav } from './components/Nav.jsx';

const latestDate = '08-01-2023';
const latest = "Fuelized - ID";
const latestLinks = {
    spotify: 'https://open.spotify.com/track/3GmqBJnp5Pj7QGX6ZKlQTJ?si=9114459cf7cd4e71',
    apple: 'https://music.apple.com/us/album/stay/1623265206?i=1623265212',
    soundcloud: 'https://soundcloud.com/fuelizeddnb/stay'
}
const latestInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl" + 
        " aliquet nisl, eget aliquam nunc nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget" +
        " aliquam nunc nisl eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl" +
        " eget nisl. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nunc nisl eget nisl.";

export const Home = () => {

    const roundedBtn = 'inline-block rounded-full text-zinc-100 hover:text-zinc-900 w-64 py-4 text-center font-bold m-4 transition duration-200 ease-in-out';
    
    return (
        <>
            <div className='overflow-hidden'>
            <div className='h-screen overflow-scroll mandatory-snap-y'>
                <div className='h-screen bg-zinc-800 snap-start grey-bg-image'>
                    <Nav active="home"/>
                    <div className='grid place-items-center grid-cols-2 grid-flow-row h-4/5'>
                        <div className='grid place-items-center'>
                            <p className='m-4 font-semibold text-xl'>Listen to my music below:</p>
                            <div className='text-center'>
                                <a href='https://open.spotify.com/artist/2xcgEqf4X5xcerwDFEcefI' target="_blank" className={`${roundedBtn} bg-green-600 hover:bg-green-500`}>SPOTIFY</a>
                                <a href='https://music.apple.com/us/artist/fuelized/1388443720' target="_blank" className={`${roundedBtn} bg-rose-500 hover:bg-rose-400`}>APPLE MUSIC</a>
                            </div>
                            <a href='https://soundcloud.com/fuelizeddnb' target="_blank" className={`${roundedBtn} bg-orange-600 hover:bg-orange-500`}>SOUNDCLOUD</a>
                        </div>
                        {/* <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'><img src="src/assets/mixing.jpg" alt="image fuelized spinning" className='overflow-hidden rounded-3xl' /></div> */}
                        <div className='bg-zinc-500 w-3/4 max-w-xl aspect-video rounded-3xl'>
                            <video autoPlay loop muted className='overflow-hidden rounded-3xl'>
                                <source src="src/assets/FUELIZED_SOLAR (1).mp4" type="video/mp4"/>
                                no video support in this browser
                            </video>
                        </div>
                    </div>
                </div>

                <div className='h-screen bg-zinc-900 snap-start'>
                    <div className='grid place-items-center grid-cols-2 grid-flow-row h-full'>
                        <div className='bg-zinc-500 w-3/4 max-w-md aspect-square rounded-3xl'><img src="" alt="image artwork release" className='overflow-hidden rounded-3xl' /></div>
                        <div className='grid place-items-center'>
                            <p className='m-4 font-semibold text-xl'>Latest release {latestDate}</p>
                            <p>{latest}</p>
                            <p className='text-center w-4/5'>{latestInfo}</p>
                            <div className='text-center'>
                                <a href='https://open.spotify.com/artist/2xcgEqf4X5xcerwDFEcefI' target="_blank" className={`${roundedBtn} bg-green-600 hover:bg-green-500`}>LISTEN ON SPOTIFY</a>
                                <a href='https://music.apple.com/us/artist/fuelized/1388443720' target="_blank" className={`${roundedBtn} bg-rose-500 hover:bg-rose-400`}>LISTEN ON APPLE MUSIC</a>
                            </div>
                            <a href='https://soundcloud.com/fuelizeddnb' target="_blank" className={`${roundedBtn} bg-orange-600 hover:bg-orange-500`}>LISTEN ON SOUNDCLOUD</a>
                        </div>
                    </div>
                </div>

                <div className='h-screen bg-zinc-800 snap-start'>
                    <div className='grid place-items-center grid-cols-2 grid-flow-row h-full'>
                        <div className='grid place-items-center'>
                            <h1 className='m-4 font-semibold text-xl'>Bookings</h1>
                            <a href='https://docs.google.com/forms/d/e/1FAIpQLSeRwXcI6kC9edDFMYPxkGXb4Kg6xturkMV6ui-RrBl0M12Pmw/viewform' target="_blank" className={`${roundedBtn} bg-blue-600 hover:bg-blue-500`}>Book me for your next event</a>
                        </div>
                        <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'><img src="src/assets/IMG_1618.jpg" alt="image" className='overflow-hidden rounded-3xl' /></div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};