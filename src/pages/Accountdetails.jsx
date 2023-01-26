import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Accountdetails = () => {
    return (
        <>
            <Nav active="Accountdetails"/>
            <h1>Account details</h1>
            <div className='relative bottom-0'>
            <Footer />
            </div>
        </>
    )
};