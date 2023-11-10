import {useState} from 'react';
import "./style.css";

function Form() {

    const [data, setData] = useState({});

    const controlHndler = (e) => {
      setData({...data, [e.target.name ] : e.target.value})
    }
  
    const senHandler = () => {
  
    }
  return (
    <div className='px-4'>
        <input onChange={(e) => controlHndler(e , 'name')} name='name' className='textinput' type="text" placeholder='Name *'/>
        <input onChange={(e) => controlHndler(e , 'email')} name='email' className='textinput' type="text" placeholder='Email *'/>
        <input onChange={(e) => controlHndler(e , 'subject')} name='subject' className='textinput' type="text" placeholder='Your subject *' />
        <textarea onChange={(e) => controlHndler(e , 'message')} name='message' className='textinput' type="text" rows={7}  placeholder='Message'></textarea>
        <button onClick={senHandler} type='button'>Send Message</button>
    </div>
  )
}

export default Form