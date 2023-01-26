import { Nav } from './components/Nav.jsx';
import { FreeTrack} from './components/FreeTrack.jsx';
import { Footer } from './components/Footer.jsx';

export const Freedownloads = () => {
    return (
        <>
            <Nav active="Free downloads"/>
            <h1>Free downloads</h1>
            <FreeTrack trackname="Test" link="https://soundcloud.com/fuelizeddnb"/>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
        </>
    )
};