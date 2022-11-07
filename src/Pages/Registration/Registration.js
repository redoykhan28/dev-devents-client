import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const Registration = () => {

    //use location
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/home'

    const navigate = useNavigate()

    // state for error
    const [error, setError] = useState(null)

    //use context
    const { signUp, updateUser } = useContext(authContext)

    //handle button
    const btnHandler = (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.username.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        console.log(name, email, password, photo)

        if (password.length < 8) {

            return setError('Password length should be 8 character long..')
        }

        signUp(email, password)
            .then(res => {

                const user = res.user
                console.log(user)
                form.reset()
                setError('')
                handleProfile(name, photo)
                navigate(from, { replaced: true })
                toast.success('Registration Successfully!')

            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })
    }

    //update profile
    const handleProfile = (name, photo) => {

        updateUser(name, photo)
            .then(() => console.log('Profile updated:', name, photo))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="card cd">
                <div className="card-body">

                    <h4 className='text-center clr mt-3 mb-5'>Registration</h4>


                    <form onSubmit={btnHandler} className='w-75 text-start mx-auto'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
                            <input type="text" name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Photo Url</label>
                            <input type="text" name='photo' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <p className='text-danger my-3'><small>{error}</small></p>
                        <button type="submit" className="btn bt">Registration</button>
                        <p className='my-4'><small>Already have an Account? <Link className='clr text-decoration-none' to={'/login'}>Login</Link></small></p>
                    </form>

                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Registration;