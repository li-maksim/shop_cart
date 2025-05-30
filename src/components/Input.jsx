import styles from '../styles/Input.module.css'

function Input({amount, fn}) {

    return (
        <input type="number" className={styles.input} value={amount} onChange={e => fn(e.target.value)} max="99" min="0" role="input"/>
    )
}

export default Input