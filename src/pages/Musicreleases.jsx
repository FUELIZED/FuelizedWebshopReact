import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Musicreleases = () => {
    return (
        <>
            <Nav active="Music Releases"/>
            <h1 className='pb-12 font-semibold text-6xl'>Music Releases</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};