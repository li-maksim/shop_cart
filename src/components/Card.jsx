function Card({product}) {

    return (
        <div className="card">
            <div>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
            </div>
        </div>
    )
}

export default Card