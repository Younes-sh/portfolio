import {useState} from 'react';
import "./style.css";
import axios from 'axios';

function Form() {

  const [data, setData] = useState({ name: '', email: '', yourSubject: '', message: '' });

    const controlHndler = (e) => {
      setData({...data, [e.target.name ] : e.target.value})
    }

    const URL_API = process.env.REACT_APP_URL_API
  
    const senHandler = () => {
      axios.post( `${URL_API}/api/collaborates`,data)
      .then(() => {
        setData({ name: '', email: '', yourSubject: '', message: '' }); // پس از ارسال داده‌ها، input ها را خالی کنید
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
    }


  return (
    <div className='px-4'>
      <input onChange={(e) => controlHndler(e , 'name')} name='name' className='textinput' type="text" placeholder='Name *'/>
      <input onChange={(e) => controlHndler(e , 'email')} name='email' className='textinput' type="text" placeholder='Email *'/>
      <input onChange={(e) => controlHndler(e , 'yourSubject')} name='yourSubject' className='textinput' type="text" placeholder='Your subject *' />
      <textarea onChange={(e) => controlHndler(e , 'message')} name='message' className='textinput' type="text" rows={7}  placeholder='Message'></textarea>
      <button onClick={senHandler} type='button'>Send Message</button>
    </div>
  )
}

export default Form