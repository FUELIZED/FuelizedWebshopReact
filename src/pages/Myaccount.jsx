import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Myaccount = () => {
    return (
        <>
            <Nav active="Myaccount"/>
            <h1 className='pb-12 font-semibold text-6xl'>My account</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};