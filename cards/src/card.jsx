function Card(props){
    return(
        <div>
            <div className="card">
               
                <img src={props.image} width="190px" height="190px" style={{borderRadius: "20px"}} />
                <h1>{props.title}</h1>
                <h2>{props.price}</h2>
                <button className="button" onClick={props.action}>Add to Cart</button>

                
            </div>
        </div>
    )
}

export default Card