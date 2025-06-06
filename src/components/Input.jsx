import styles from '../styles/Input.module.css'

function Input({type = 'number', val, fn, name}) {

    return (
        <input type={type} className={styles.input} value={val} name={name} placeholder={name} onChange={e => fn(e.target.value, type)} role="input"/>
    )
}

export default Input