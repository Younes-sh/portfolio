
const Card = (props) => {
    
  return (
    <div style={{width:'200px',marginTop:'10px'}}>
      <img style={{width:'200px', height:'200px'}} src={props.IMG} alt={props.title} />
      <h5 className="text-light">{props.title}</h5>
      <span style={{whiteSpace:'break-spaces', color:'#ccc'}} >{props.text}</span>
    </div>
  )
}

export default Card