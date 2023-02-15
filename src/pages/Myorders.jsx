import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Myorders = () => {
    return (
        <>
            <Nav active="account"/>
            <h1 className='pb-12 font-semibold text-6xl'>My orders</h1>
            <h2>This page has to be under the dropdown of the nav-item my account.</h2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};