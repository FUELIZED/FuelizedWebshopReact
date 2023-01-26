import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Shop = () => {
    return (
        <>
            <Nav active="shop"/>
            <h1 className='pb-12 font-semibold text-6xl'>Shop</h1>
            <H2>How to implement a webshop with React?</H2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};