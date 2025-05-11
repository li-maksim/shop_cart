function Input({amount, fn}) {

    return (
        <input type="number" value={amount} onChange={e => fn(e.target.value)} max="99" min="0"/>
    )
}

export default Input