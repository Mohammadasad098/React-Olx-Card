const Card = (props) => {
    return(
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
     style={{width: "30%"}}
      src={props.src}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.price}</h2>
    <p>{props.description}</p>
    <p>{props.location}</p>
    <div className="card-actions justify-end">
    <button class="btn btn-accent">Buy Now</button>
    </div>
  </div>
</div>
        
    )



}
export default Card