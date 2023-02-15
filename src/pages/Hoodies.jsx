import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Hoodies = () => {
    return (
        <>
            <Nav active="shop"/>
            <h1 className='pb-12 font-semibold text-6xl'>Hoodies</h1>
            <h2>This shows the hoodies products on this page.</h2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};