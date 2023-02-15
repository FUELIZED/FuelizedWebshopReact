import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';

export const Contact = () => {
    const labelStyle = "text-white m-2"
    const inputStyle = "bg-zinc-800 text-white rounded-lg p-1 px-2 w-96 m-2"
    const requiredField = <div className='text-red-600 inline'>*</div>

    return (
        <>
            <Nav active="contact" />
            <h1 className='pb-4 font-semibold text-4xl'>Contact</h1>
                <form className='[&>*]:m-2 grid place-items-center mb-20'>
                    <table className='[&>*>*]:m-2 m-0 rounded-lg bg-zinc-900'>
                        <tr>
                            <td><label htmlFor="name" className={`${labelStyle} w-48`}>{requiredField} Full name</label></td>
                            <td><input type="text" name="name" id='name' placeholder='Henry Vergote' required className={`${inputStyle}`}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="country" className={`${labelStyle}`}>Country of living</label></td>
                            <td><input type="text" name="country" id='country' placeholder='Belgium' className={`${inputStyle}`}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="mail" className={`${labelStyle}`}>{requiredField} e-mail</label></td>
                            <td><input type="email" name="mail" id="mail" placeholder='firstname.lastname@mail.com' className={`${inputStyle}`}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="date" className={`${labelStyle}`}>Date of birth</label></td>
                            <td><input type="date" name="date" id="date" className={`${inputStyle}`}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone" className={`${labelStyle}`}>Phone number (add your landcode)</label></td>
                            <td><input type="tel" name="phone" id="phone" placeholder='+32470123456' className={`${inputStyle}`}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="message" className={`${labelStyle}`}>{requiredField} Message</label></td>
                            <td><textarea name="message" id="message" rows="5" placeholder='Your text here' required className={`${inputStyle} resize-none`}></textarea></td>                            
                        </tr>
                        <tr>
                            <td colSpan={2} className="text-center"><button type="" className='bg-blue-600 hover:bg-blue-800 p-2 mb-2 rounded-lg '>Submit</button></td>
                        </tr>
                    
                    </table>
                </form>

            <div className='fixed w-full bottom-0'>
                <Footer />
            </div>
        </>

    )
};