import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Tshirts = () => {
    return (
        <>
            <Nav active="Tshirts"/>
            <h1 className='pb-12 font-semibold text-6xl'>T-Shirts</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};