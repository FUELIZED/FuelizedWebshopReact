import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Events = () => {
    return (
        <>
            <Nav active="events"/>
            <h1 className='pb-12 font-semibold text-6xl'>Events</h1>
            <h2>An agenda with events chronologically announced with a counter till the event.</h2>
            <div className='relative bottom-0'>
                        <Footer />
            </div>
            <BackToTop />  
        </>
        
    )
};