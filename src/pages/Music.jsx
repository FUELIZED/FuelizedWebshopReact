import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Music = () => {
    return (
        <>
            <Nav active="music"/>
            <h1 className='pb-12 font-semibold text-6xl'>Music</h1>
            <h2>Priviously released music (embedded iframes from odesli.com) Also on top Spotify & Apple music embed. Chronological order bottom to top</h2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};