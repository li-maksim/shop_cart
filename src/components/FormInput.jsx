import styles from '../styles/Input.module.css'
import { useState } from 'react'

function FormInput({type, name}) {

    const [val, setVal] = useState(null)

    return (
        <input type={type} className={styles.input} name={name} placheholder={name} value={val} onChange={e => setVal(e.target.value)}/>
    )
}

export default FormInput