import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Myaccount = () => {
    return (
        <>
            <Nav active="Myaccount"/>
            <h1>My account</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};