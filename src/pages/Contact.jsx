import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Contact = () => {
    return (
        <>
            <Nav active="contact"/>
            <h1 className='pb-12 font-semibold text-6xl'>Contact</h1>
            <h2>Contact form arriving at contact@fuelized.com</h2>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
            <BackToTop />  
        </>
        
    )
};