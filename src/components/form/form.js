import React, {useState} from 'react';
import './form.scss'
function SignupForm(){

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isEnabled = email.length > 0 && name.length > 0 && phone.length > 0;

  console.log(isEnabled);

    return (
      <form action="https://formspree.io/william.av.holmberg@gmail.com" method="POST" acceptCharset="UTF-8" >


      <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Name"/>
      <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="Email"/>
      <input onChange={e => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone"/>
      <input onChange={e => setName(e.target.value)} type="hidden" name="_gotcha"/>

      <button disabled={!isEnabled} className={(isEnabled? 'button enabled' : 'disabled')}> Submit </button>
    </form>
    )
}

export default SignupForm;