import Input from './Input.jsx'
import { useState } from 'react'
import styles from '../styles/ContactPage.module.css'
import imgLaptop from '../assets/laptop.jpg'

function ContactPage() {

    const [info, setInfo] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        comment: '',
    })

    function handleChange(x, type) {
        if (type === 'text') {
            setInfo({...info, lastName: x})
            console.log('!')
        } else {
            setInfo({...info, [type]: x})
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        setInfo({
            name: '',
            lastName: '',
            email: '',
            phone: '',
            comment: '',
        })

        alert('Thank you!')
    }

    return (
        <div className={styles.contact_page}>
            <div className={styles.content}>
                <form className={styles.form} action="POST" onSubmit={(e) => handleSubmit(e)} >
                    <h1>Contact Us</h1>
                    <p className={styles.p}>We will be glad to hear from you! <br></br> Leave us your contact information and we'll get in touch.</p>
                    <div className={styles.inputs}>
                        <Input type="text" name="First Name" val={info.name} fn={handleChange} />
                        <Input type="text" name="Last Name" val={info.lastName} fn={handleChange} />
                        <Input type="email" name="Email" val={info.email} fn={handleChange} />
                        <Input type="phone" name="Phone" val={info.phone} fn={handleChange} />
                    </div>
                    <textarea 
                        className={styles.textarea} 
                        name="comment" placeholder="Comment" 
                        onChange={(e) => {handleChange(e.target.value, 'comment')}}
                        rows="5"
                        cols="9"
                        value={info.comment}
                        >
                    </textarea>
                    <button className={styles.btn}>Submit</button>
                </form>
                <img src={imgLaptop} alt="Laptop photo" className={styles.img} />
            </div>
        </div>
    )
}

export default ContactPage