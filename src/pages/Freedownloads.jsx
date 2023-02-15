import { Nav } from './components/Nav.jsx';
import { FreeTrack} from './components/FreeTrack.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Freedownloads = () => {
    return (
        <>
            <Nav active="music"/>
            <h1 className='pb-12 font-semibold text-6xl'>Free downloads</h1>
            <h2>All free downloads with image, audio pre-listen & download buttons included.</h2>
            <h2>Needs to be a product that is downloadable for free via the cart & checkout page.</h2>
            <FreeTrack trackname="Test" link="https://soundcloud.com/fuelizeddnb"/>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
            <BackToTop />
        </>
    )
};