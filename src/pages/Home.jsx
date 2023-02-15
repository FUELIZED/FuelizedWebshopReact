import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

const latestDate = '08-01-2023';
const latest = "Fuelized & D-Revenger - Toxic";
const latestLinks = {
    spotify: 'https://open.spotify.com/track/3GmqBJnp5Pj7QGX6ZKlQTJ?si=9114459cf7cd4e71',
    apple: 'https://music.apple.com/us/album/stay/1623265206?i=1623265212',
    soundcloud: 'https://soundcloud.com/fuelizeddnb/stay'
}
const latestInfo = "Out Friday the 10th of March" + 
        "Exclusive on Juno Download & Spotify" + 
        "Full release on all platforms 17.03.2023" +
        "Pre-Save/Order link available 01.03.2023";

export const Home = () => {

    const roundedBtn = 'inline-block rounded-full text-zinc-100 hover:text-zinc-900 w-64 py-4 text-center font-bold m-4 transition duration-200 ease-in-out';
    
    return (
        <>
            <div className='overflow-hidden'>
            <div id='overflow' className='h-screen overflow-scroll mandatory-snap-y'>
                <div className='h-screen bg-zinc-800 snap-start grey-bg-image relative z-50'>
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
                        <div className='bg-zinc-500 w-3/4 max-w-md aspect-square rounded-3xl'><img src="src\assets\FUELIZED_TOXIC_FINAL.jpeg" alt="image artwork release" className='overflow-hidden rounded-3xl' /></div>
                        <div className='grid place-items-center'>
                            <p className='m-4 font-semibold text-xl'>NEXT RELEASE FRIDAY 10/03/2023</p>
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
                <div className='h-screen bg-zinc-900 snap-start lastElement'>
                <div className='h-full flex flex-col'>
                    <div className='flex-grow grid'>
                        <div className='grid place-items-end relative mx-auto'>
                            <h1 className='m-4 font-semibold text-xl'>Logo's</h1>
                        </div>
                        <div className='h-max'>
                            <div className="bg-zinc-500 w-4/5 max-w-7xl h-1 rounded mx-auto mb-4"></div>
                            <div className='flex w-full justify-center relative top-4 mx-auto gap-8'>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl '>
                                    <img src="src\assets\imgs_vids\BLACK ORANGE BORDER.png" alt="src\assets\imgs_vids\2021-07-05 13.12.36.png" className='overflow-hidden rounded-3xl' />
                                </div>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'>
                                    <img src="src\assets\imgs_vids\BLACK PURPLE.png" alt="src/assets/FUELIZED_SOLAR (1).mp4" className='overflow-hidden rounded-3xl' />
                                </div>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'>
                                    <img src="src\assets\imgs_vids\BLACK GREEN BRDR.png" alt="src/assets/" className='overflow-hidden rounded-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-grow grid'>
                        <div className='grid place-items-end relative mx-auto'>
                            <h1 className='m-4 font-semibold text-xl'>Past events</h1>
                        </div>
                        <div className='h-max'>
                            <div className="bg-zinc-500 w-4/5 max-w-7xl h-1 rounded mx-auto mb-4"></div>
                            <div className='flex w-full justify-center relative top-4 mx-auto gap-8'>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl '>
                                    <img src="src\assets\imgs_vids\20210218_071438_img_0609.JPG" alt="src\assets\imgs_vids\2021-07-05 13.12.36.png" className='overflow-hidden rounded-3xl' />
                                </div>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'>
                                    <img src="src\assets\imgs_vids\IMG_8167.jpg" alt="src/assets/FUELIZED_SOLAR (1).mp4" className='overflow-hidden rounded-3xl' />
                                </div>
                                <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'>
                                    <img src="src\assets\imgs_vids\mixing.jpg" alt="src/assets/" className='overflow-hidden rounded-3xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative bottom-0'>
                        <Footer />
                    </div>
                </div>
                </div>
                <BackToTop />  
            </div>
            </div>
        </>
    )
};