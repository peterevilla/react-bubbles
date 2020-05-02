import React, {useState} from 'react'
import axios from 'axios'

function Login() {
  const [loginData, setLoginData] = useState('')
  const [logged, setLogged] = useState(false)


  const onChangeHandle = (e) => {

    setLoginData({...loginData, [e.target.name]: e.target.value})
    
  }

  console.log(loginData)

  const submitForm = (e) => {
    e.preventDefault()

    axios
    .post("http://localhost:5000/api/login", loginData )
    .then(res => {
      console.log(res)    
      localStorage.setItem('token', res.data.payload)
      setLogged(true)
    })
    .catch(err => console.log(err))
    
    e.target.reset()
  
}


  

    return (
        <div>
            {logged ? (<h1>Welcome {loginData.username}</h1>) : (
              <form onSubmit={submitForm}>
              <div>
                <label htmlFor="username">
                  Username
                </label>
                <input
                 id="username"
                 type="text" 
                 name='username'
                 placeholder="Username"
                 onChange={onChangeHandle}
                 values={loginData}
                 />
              </div>
              <div>
                <label  htmlFor="password">
                  Password
                </label>
                <input 
                id="password"
                type="password" 
                name='password'
                placeholder="******************"
                onChange={onChangeHandle}
                values={loginData}
                />
              </div>
              <div>
                <button
                 type="submit">
                  Sign In
                </button>
              </div>
            </form>
            )}
  
</div>
    )
}

export default Login;
