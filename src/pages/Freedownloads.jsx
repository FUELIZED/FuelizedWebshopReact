import { Nav } from './components/Nav.jsx';
import { FreeTrack} from './components/FreeTrack.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Freedownloads = () => {
    return (
        <>
            <Nav active="freedownloads"/>
            <h1 className='pb-12 font-semibold text-6xl'>Free downloads</h1>
            <FreeTrack trackname="Test" link="https://soundcloud.com/fuelizeddnb"/>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
            <BackToTop />
        </>
    )
};