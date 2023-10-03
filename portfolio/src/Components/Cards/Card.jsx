
const Card = (props) => {
    
  return (
    <div style={{width:'200px',marginTop:'10px'}}>
      <img style={{width:'200px', height:'200px'}} src={props.IMG} alt={props.title} />
      <h5>{props.title}</h5>
      <hr />
      <span style={{whiteSpace:'break-spaces'}} >{props.text}</span>
    </div>
  )
}

export default Card