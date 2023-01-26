import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Myorders = () => {
    return (
        <>
            <Nav active="Myorders"/>
            <h1>My orders</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};