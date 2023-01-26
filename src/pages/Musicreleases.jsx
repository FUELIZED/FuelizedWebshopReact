import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Musicreleases = () => {
    return (
        <>
            <Nav active="Musicreleases"/>
            <h1>Music Releases</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};