import styles from '../styles/Input.module.css'

function Input({type = 'number', val, fn, name, blur}) {

    let x
    if (name === 'Last Name') {
        x = 'lastName'
    } else if (name === 'First Name') { 
        x = 'name'
    } else {
        x = type
    }

    return (
        <input 
            type={type} 
            className={styles.input} 
            value={val} 
            name={name} 
            placeholder={name} 
            onChange={e => fn(e.target.value, x)} 
            onBlur={blur} 
            role="input"/>
    )
}

export default Input