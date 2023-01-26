import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Hoodies = () => {
    return (
        <>
            <Nav active="hoodies"/>
            <h1>Hoodies</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};