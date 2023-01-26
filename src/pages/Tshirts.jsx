import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Tshirts = () => {
    return (
        <>
            <Nav active="Tshirts"/>
            <h1>T-Shirts</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};