import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [form, setform] = useState({ name: '', email: '', message: '' })
    const [Loading, setLoading] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target;
        setform({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        try {
            await emailjs.send('service_l8a2tbm',
                'template_p0g8i6u', {
                form_name: form.name, to_name: 'Sourav',
                from_email: form.email,
                to_email: 'souravnishad420@gmail.com'
            }
            )
            setLoading(false)
            alert("Your message has been sent!")
            setform({name: '', email: '', message: '' })
        }

        catch (error) {
            console.error();
            alert('Something Went Wrong')

        }



    }

    return (
        <section className='c-space my-20'>
            <div className=' min-h-screen flex items-center justify-center flex-col relative'>
                <img src="/assets/terminal.png" alt="terminal-background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>

                    <h3 className='head-text'>
                        Let's Talk
                    </h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Whether you're looking to build a new website, or to improve the performce of the existing platform feel free to contact me, I
                        am here to help!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}
                        className='mt-12 flex flex-col space-y-7 ' action="">
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text" name='name' value={form.name} onChange={handleChange} required
                                className='field-input' placeholder='Sourav Nishad' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="text" name='email' value={form.email} onChange={handleChange} required
                                className='field-input' placeholder='souravnishad429@gamil.com' />
                        </label>

                        <label className='space-y-3'>
                            <span className='field-label'>Your Message</span>
                            <textarea type="text" name='message' value={form.message} onChange={handleChange} required
                                rows={5} className='field-input' placeholder="Hi, I wanna give you a job.." />
                        </label>
                        <button className="field-btn" type="submit" disabled={Loading}>
                            {Loading ? "Sending..." : "Submit"}
                            <img className='field-btn_arrow' src="/assets/arrow-up.png" alt="arrow-up" />
                        </button>



                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact
