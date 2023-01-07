import { Nav } from './components/Nav.jsx';

const roundedBtn = 'inline-block rounded-full text-zinc-100 hover:text-zinc-900 w-64 py-4 text-center font-bold m-4';

export const Home = () => {
    return (
        <>
            <div className=''>
                <div className='h-screen bg-zinc-800'>
                    <Nav active="home"/>
                    <div className='grid place-items-center grid-cols-2 grid-flow-row h-4/5'>
                        <div className='grid place-items-center'>
                            <p className='m-4 font-semibold text-xl'>Luister hieronder text123</p>
                            <div className='text-center'>
                                <a href='https://open.spotify.com/artist/2xcgEqf4X5xcerwDFEcefI' className={`${roundedBtn} bg-green-600 hover:bg-green-500`}>SPOTIFY</a>
                                <a href='https://music.apple.com/us/artist/fuelized/1388443720' className={`${roundedBtn} bg-rose-500 hover:bg-rose-400`}>APPLE MUSIC</a>
                            </div>
                            <a href='https://soundcloud.com/fuelizeddnb' className={`${roundedBtn} bg-orange-600 hover:bg-orange-500`}>SOUNDCLOUD</a>
                        </div>
                        <div className='bg-zinc-500 w-3/4 max-w-md aspect-video rounded-3xl'>photo</div>
                    </div>
                </div>



                <div className='h-screen bg-zinc-900'>
                    <div className='grid place-items-center grid-cols-2 grid-flow-row h-4/5'>
                        <div className='bg-zinc-500 w-3/4 max-w-md aspect-square rounded-3xl'>photo</div>
                        <div className='grid place-items-center'>
                            <p className='m-4 font-semibold text-xl'>Latest release text123</p>
                            <div className='text-center'>
                                <a href='https://open.spotify.com/artist/2xcgEqf4X5xcerwDFEcefI' className={`${roundedBtn} bg-green-600 hover:bg-green-500`}>SPOTIFY</a>
                                <a href='https://music.apple.com/us/artist/fuelized/1388443720' className={`${roundedBtn} bg-rose-500 hover:bg-rose-400`}>APPLE MUSIC</a>
                            </div>
                            <a href='https://soundcloud.com/fuelizeddnb' className={`${roundedBtn} bg-orange-600 hover:bg-orange-500`}>SOUNDCLOUD</a>
                        </div>
                    </div>
                </div>



                <div className='h-screen bg-zinc-800'>

                </div>
            </div>
        </>
    )
};