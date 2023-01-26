import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Contact = () => {
    return (
        <>
            <Nav active="Contact"/>
            <h1>Contact</h1>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
        </>
    )
};