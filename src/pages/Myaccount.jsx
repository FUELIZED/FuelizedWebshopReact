import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Myaccount = () => {
    return (
        <>
            <Nav active="myaccount"/>
            <h1 className='pb-12 font-semibold text-6xl'>My account</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};