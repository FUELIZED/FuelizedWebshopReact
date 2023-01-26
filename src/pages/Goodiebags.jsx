import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Goodiebags = () => {
    return (
        <>
            <Nav active="goodiebags"/>
            <h1 className='pb-12 font-semibold text-6xl'>Goodiebags</h1>
            <H2>Shows the goodiebags products on this page</H2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};