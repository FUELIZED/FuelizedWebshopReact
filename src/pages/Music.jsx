import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Music = () => {
    return (
        <>
            <Nav active="music"/>
            <h1 className='pb-12 font-semibold text-6xl'>Music</h1>
            <h2>Priviously released music (embedded iframes from odesli.com) Also on top Spotify & Apple music embed. Chronological order bottom to top</h2>

            (Spotify artist link)
            https://open.spotify.com/artist/2xcgEqf4X5xcerwDFEcefI 
            <hr></hr>
            (Apple music artist link)
            https://music.apple.com/us/artist/fuelized/1388443720
            <hr></hr>
            RELEASES 2022
            <hr></hr>
            <p>30.05.2022     
            Fuelized & A to C
            Stay
            [Good4Nothing Records.]</p> 
            Link: https://song.link/9x3wkspnzmqs8
            <hr></hr>
            <p>11.02.2022  
            Damageman & Fuelized
            Generation Z
            [Good4Nothing Records.]</p> 
            Link: https://song.link/2zcjg0bdfstss
            <hr></hr>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};