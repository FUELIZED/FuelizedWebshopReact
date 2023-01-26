import { Nav } from './components/Nav.jsx';
import { BackToTop } from './components/BackToTop.jsx';
import { Footer } from './components/Footer.jsx';

export const Privacypolicy = () => {
    return (
        <>
            <Nav active="Privacypolicy"/>
            <h1 className='pb-12 font-semibold text-6xl'>Privacy Policy</h1>
            <h2>Content can be copied from fuelized.com</h2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};