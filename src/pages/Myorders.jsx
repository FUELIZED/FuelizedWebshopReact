import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Myorders = () => {
    return (
        <>
            <Nav active="Myorders"/>
            <h1 className='pb-12 font-semibold text-6xl'>My orders</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};