import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Labels = () => {
    return (
        <>
            <Nav active="labels"/>
            <h1 className='pb-12 font-semibold text-6xl'>Labels</h1>
            <H2>This page shows all priviously released labels on chronologically from bottom to top, old to new. With image & social links each label. </H2>
            <div className='relative bottom-0'>
            <Footer />
            </div>
            <BackToTop />
        </>
    )
};