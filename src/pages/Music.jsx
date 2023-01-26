import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Music = () => {
    return (
        <>
            <Nav active="music"/>
            <h1>Music</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};