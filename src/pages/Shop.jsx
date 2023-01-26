import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Shop = () => {
    return (
        <>
            <Nav active="shop"/>
            <h1 className='pb-12 font-semibold text-6xl'>Shop</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};