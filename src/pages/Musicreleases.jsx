import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Musicreleases = () => {
    return (
        <>
            <Nav active="musicreleases"/>
            <h1 className='pb-12 font-semibold text-6xl'>Music Releases</h1>
            <H2>Page to show the upcoming music releases with dates & counter.</H2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};