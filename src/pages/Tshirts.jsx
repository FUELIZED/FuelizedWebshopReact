import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Tshirts = () => {
    return (
        <>
            <Nav active="shop"/>
            <h1 className='pb-12 font-semibold text-6xl'>T-Shirts</h1>
            <h2>This page should show all the shirts products addable to the cart.</h2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};