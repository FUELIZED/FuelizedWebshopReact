import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export const Contact = () => {
    return (
        <>
            <Nav active="contact"/>
            <h1 className='pb-12 font-semibold text-6xl'>Contact</h1>
        <form>
<form>

<label>
    First name:
    <br></br><input type="text" name="name" />
</label>

<br></br>

<label>
    Last name:
    <br></br><input type="text" name="name" />
</label>

<br></br>

<label>
    Country of living:
    <br></br><input type="country" name="country" />
</label>

<br></br>

<label>
    E-Mail address:
    <br></br><input type="text" name="name" />
</label>

<br></br>

<label>
    Date of birth:
    <br></br><input type="date" name="date" />
</label>

<br></br>

<label>
    Phone number (Add your landcode):
    <br></br><input type="phone" name="date" />
</label>

<br></br>

<label>
    Message:
    <br></br><input type="message" name="message" />
</label>

<br />

<input type="submit" value="Send message now button..." />
</form>
</form>

<div className='relative bottom-0'>
<Footer />
            </div>
            <BackToTop />  
        </>
        
    )
};