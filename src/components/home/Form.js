import React, {useRef} from 'react';

const Form = () => {
    let username = useRef();
    let password = useRef();
    const getFormData = () => {
      let a = username.current.value;
      let b = password.current.value;
      alert(a + ' '+ b);
    }
    return (
        <div>
            <input ref={username} type="text" placeholder="Enter Username"/>
            <input ref={password} type="password" placeholder="Enter password"/>
            <button onClick={getFormData}>Submit</button>
            
        </div>
    );
};

export default Form;