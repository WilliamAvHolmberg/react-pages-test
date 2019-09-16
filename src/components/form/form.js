import React from 'react';

function SignupForm(){
    return (
      <form action="https://formspree.io/william.av.holmberg@gmail.com" method="POST" acceptCharset="UTF-8" >

      <label htmlFor="email">Email</label>
      <input type="email" name="email"/>

      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName"/>

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName"/>

      <input type="text" name="anotherInput"/>
      <input type="hidden" name="_gotcha"/>
      <button>skicka</button>
    </form>
    )
}

export default SignupForm;