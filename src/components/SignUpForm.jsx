import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { signUpSchema } from '../schema/validation';
import LoadingContent from './LoadingContent';
import { signUpApi } from '../APIs/authAPI';
import { useDispatch } from 'react-redux';
import { accessToken, userDetails } from '../Redux/Features/userSlice';

const SignUpForm = ({ handleSignUp }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const initialValues = formValues
    const validationSchema = signUpSchema
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, action) => {
            setLoading(true)
            try {
                console.log(values, '------------------values')
                setFormValues(values)
                const { data } = await signUpApi(values)
                dispatch(userDetails(data.User));
                dispatch(accessToken(data.Token));
                localStorage.setItem("token", data.Token);
                localStorage.setItem("user", JSON.stringify(data.User));
                toast.success(data.message);
                navigate('/');
            } catch (error) {
                toast.error(error.response.data.message)
                console.log(error, 'Login failed');
            }
            action.resetForm();
            setLoading(false)
        }
    })

    return (
        <div className="w-full max-w-md p-8 space-y-1 rounded-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block  text-start">Username</label>
                    <input
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        type="text"
                        name="name"
                        id="name"
                        placeholder="User Name"

                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
                    {errors.name && touched.name ? (
                        <p className="text-red-600 text-center text-sm">{errors.name}</p>
                    ) : null}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block  text-start">Email</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        type="text"
                        name="email"
                        id="email"
                        placeholder="User Email"

                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
                    {errors.email && touched.email ? (
                        <p className="text-red-600 text-center text-sm">{errors.email}</p>
                    ) : null}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block  text-start">Password</label>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}

                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"

                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
                    {errors.password && touched.password ? (
                        <p className="text-red-600 text-center text-sm">{errors.password}</p>
                    ) : null}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="confirmPassword" className="block  text-start">Confirm Password</label>
                    <input
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirm Password"
                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-default-600" />
                    {/* <div className="flex justify-end text-xs ">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div> */}
                    {errors.confirmPassword && touched.confirmPassword ? (
                        <p className="text-red-600 text-center text-sm">{errors.confirmPassword}</p>
                    ) : null}
                </div>
                {loading ? <div className="pb-2 pt-4">
                    <LoadingContent />
                </div> : <div className="">
                    <button
                        type='submit'
                        className="block w-full p-3 text-center rounded-sm bg-blue-600 ">Sign Up</button>
                </div>}
            </form>
            <p className="text-xs text-center sm:px-6 " onClick={handleSignUp} >Already have an account?
                <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> Login</a>
            </p>
        </div>

    )
}

export default SignUpForm