import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import './Login.css'
import toast, { Toaster } from 'react-hot-toast';
import logo1 from '../../images/login/7123025_logo_google_g_icon.png'
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/UserHooks';


const Login = () => {

    //title
    useTitle('Login')

    //use location
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'

    const navigate = useNavigate()

    //state for error
    const [error, setError] = useState(null)

    //use context
    const { login, googleSignin } = useContext(authContext)


    // google signin 
    const googleProvider = new GoogleAuthProvider()

    const handleGoogle = () => {

        googleSignin(googleProvider)
            .then(result => {

                const user = result.user
                console.log(user)
                const currentUser = { email: user?.email }

                //get jwt token
                fetch('https://devent-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)

                        //store token inside localStorage
                        localStorage.setItem('devent-token', data.token)
                        navigate(from, { replaced: true })
                    })

            })
            .catch(err => {

                console.log(err)
            })

    }

    //handle button
    const btnHandler = (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        login(email, password)
            .then(res => {

                const user = res.user

                console.log(user)
                form.reset()
                toast.success('Login Successfully!')
                setError('')
                const currentUser = { email: user?.email }

                //get jwt token
                fetch('https://devent-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)

                        //store token inside localStorage
                        localStorage.setItem('devent-token', data.token)
                        navigate(from, { replaced: true })
                    })

            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })


    }


    return (
        <div>
            <div className="card cd">
                <div className="card-body">

                    <h4 className='text-center mt-3 mb-5 clr'>Login</h4>


                    <form onSubmit={btnHandler} className='w-75 text-start mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <p className='text-danger my-3'><small>{error}</small></p>
                        <button type="submit" className="btn bt">Login</button>
                        <p className='my-4'><small>Need an Account? <Link className='clr text-decoration-none' to={'/registration'}>Registration</Link></small></p>
                    </form>
                </div>
                <p className='clr text-center'><small>Or</small></p>
                <div onClick={handleGoogle} className='d-flex justify-content-center align-items-center social'>
                    <img className='img-fluid logogoogle ms-2' src={logo1} alt="logo" />
                    <h6>Continiue with Google</h6>
                </div>
            </div>

            <Toaster />
        </div>
    );
};

export default Login;