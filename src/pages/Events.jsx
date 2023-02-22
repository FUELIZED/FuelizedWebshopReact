import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';
import { Event } from './components/Event.jsx';

export const Events = () => {
    return (
        <>
            <Nav active="events"/>
            <h1 className='pb-12 font-semibold text-6xl text-center mt-6'>Upcoming events</h1>
            {/* <h2>An agenda with events chronologically announced with a counter till the event. + Google agenda connect?</h2> */}
            <div className='w-4/5 mx-auto flex gap-2 flex-wrap justify-center'>
                <Event 
                    eventname="Dropzone"
                    date="01-04-2023"
                    time="21:00"
                    location="https://goo.gl/maps/qyBdmWzY5dyHQh6M8"
                    locationName="Jeugdhuis Jester Ruiselede"
                    image="/src/assets/dropzone.jpg"
                    link="https://www.facebook.com/events/944968660258103"
                />
                <Event 
                    eventname="Herres: enter the rave cave"
                    date="26-06-2022"
                    time="21:00"
                    location="https://goo.gl/maps/JuBtWbChtwVfzaGf9"
                    locationName="Barsol Kortrijk"
                    image="/src/assets/herres.jpg"
                    link="https://www.facebook.com/events/314207970868851"
                />
                <Event eventname="Test event" date="22-02-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 2" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 3" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 4" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 5" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 6" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 7" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 8" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 9" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
                <Event eventname="Test event 10" date="10-10-2023" time="20:00" location="https://goo.gl/maps/jhy9o2ULaamaoH6m6" locationName="Test location" />
            </div>
            <div className='relative bottom-0'>
                <Footer />
            </div>
            {/* <BackToTop />   */}
        </>
        
    )
};