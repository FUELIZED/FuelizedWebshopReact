import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import { useForm } from 'react-hook-form';

export const Contact = () => {
    const labelStyle = "text-white m-2 p-2"
    const inputStyle = "bg-zinc-800 text-white rounded-lg p-1 px-2 w-96 m-2 mr-3"
    const requiredField = <div className='text-red-600 inline'>*</div>

    const { register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        window.location.href = `mailto:contact@fuelized.com?subject=Contact from fuelized.be&body=${JSON.stringify(data)}`;	
        reset();
    };

    return (
        <>
            <Nav active="contact" />
            <h1 className='pb-4 font-semibold text-4xl'>Contact</h1>
                <form className='[&>*]:m-2 grid place-items-center mb-20' onSubmit={handleSubmit(onSubmit)}>
                    <table className='[&>*>*]:m-2 m-0 rounded-xl bg-zinc-900'>
                        <tbody>
                            <tr>
                                <td className='p-1'></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="name" className={`${labelStyle}`}>{requiredField} Full name</label></td>
                                <td><input type="text" {...register('name')} id='name' placeholder='Henry Vergote' required className={`${inputStyle}`}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="country" className={`${labelStyle}`}>Country</label></td>
                                <td><input type="text" {...register('country')} defaultValue='' id='country' placeholder='Belgium' className={`${inputStyle}`}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="mail" className={`${labelStyle}`}>{requiredField} e-mail</label></td>
                                <td><input type="email" {...register('mail')} id="mail" placeholder='name@mail.com' className={`${inputStyle}`}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="date" className={`${labelStyle}`}>Date of birth</label></td>
                                <td><input type="date" {...register('date')} defaultValue='' id="date" className={`${inputStyle}`}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="phone" className={`${labelStyle}`}>Phone number (add your landcode)</label></td>
                                <td><input type="tel" {...register('phone')} defaultValue='' id="phone" placeholder='+32470123456' className={`${inputStyle}`}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="message" className={`${labelStyle}`}>{requiredField} Message</label></td>
                                <td><textarea {...register('message')} id="message" rows="5" placeholder='Your text here' required className={`${inputStyle} resize-none`}></textarea></td>                            
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-center"><button type="" className='bg-blue-600 hover:bg-blue-800 p-2 mb-4 mt-1 rounded-lg '>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>

            <div className='fixed w-full bottom-0'>
                <Footer />
            </div>
        </>

    )
};