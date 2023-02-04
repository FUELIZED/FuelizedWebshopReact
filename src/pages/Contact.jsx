import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Contact = () => {
    return (
        <>
            <Nav active="contact"/>
            <h1 className='pb-12 font-semibold text-6xl'>Contact</h1>
            <h2>This place needs a fully functional contact form arriving at contact@fuelized.com</h2>
            <h3>Tabs: First name, last name, mail address + confirmation, country, subject of contact, phonenumber (including land code) message</h3>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
            <BackToTop />  
        </>
        
    )
};