import React from 'react';
import './form.scss'
function SignupForm(){
    return (
      <form action="https://formspree.io/william.av.holmberg@gmail.com" method="POST" acceptCharset="UTF-8" >


      <input type="text" name="name" placeholder="Name"/>
      <input type="email" name="email" placeholder="Email"/>
      <input type="text" name="phone" placeholder="Phone"/>
      <input type="hidden" name="_gotcha"/>

      <button className="button"> Submit </button>
    </form>
    )
}

export default SignupForm;