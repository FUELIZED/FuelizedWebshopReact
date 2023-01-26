import { Nav } from './components/Nav.jsx';
import { BackToTop } from './components/BackToTop.jsx';
import { Footer } from './components/Footer.jsx';

export const Termsandconditions = () => {
    return (
        <>
            <Nav active="termsandconditions"/>
            <h1 className='pb-12 font-semibold text-6xl'>Terms & Conditions</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};