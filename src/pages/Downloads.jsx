import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Downloads = () => {
    return (
        <>
            <Nav active="Downloads"/>
            <h1 className='pb-12 font-semibold text-6xl'>Downloads</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};