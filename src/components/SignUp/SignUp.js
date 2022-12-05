import React from 'react';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';
import SignUp3 from './SignUp3';

const SignUp = (props) => {
    const { formdata, setformdata, setshowcomponents,showcomponents,setshowcomponent,setshowfull } = props;
    return (
        <div className="w-100 d-flex flex-column justify-content-center align-content-center h-100 bshadow">
            {showcomponents === "1" && (
            <SignUp1
              formdata={formdata}
              setformdata={setformdata}
              setshowcomponents={setshowcomponents}
            />
          )}
          {showcomponents === "2" && (
            <SignUp2
              formdata={formdata}
              setformdata={setformdata}
              setshowcomponents={setshowcomponents}
            />
          )}
          {showcomponents === "3" && (
            <SignUp3
              formdata={formdata}
              setformdata={setformdata}
              setshowcomponents={setshowcomponents}
              setshowcomponent={setshowcomponent}
              setshowfull={setshowfull}
            />
          )}
        </div>
    );
};

export default SignUp;