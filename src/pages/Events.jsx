import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';
import { Event } from './components/Event.jsx';

export const Events = () => {
    return (
        <>
            <Nav active="events"/>
            <h1 className='pb-12 font-semibold text-6xl'>Events</h1>
            {/* <h2>An agenda with events chronologically announced with a counter till the event. + Google agenda connect?</h2> */}
            <div className='w-4/5 mx-auto flex gap-2'>
                <Event 
                    eventname="Test event"
                    date="2021-10-10"
                    time="20:00"
                    location="https://goo.gl/maps/jhy9o2ULaamaoH6m6"
                    locationName="Test location"
                    // link="https://soundcloud.com/fuelizeddnb"
                />
            </div>
            <div className='relative bottom-0'>
                <Footer />
            </div>
            {/* <BackToTop />   */}
        </>
        
    )
};