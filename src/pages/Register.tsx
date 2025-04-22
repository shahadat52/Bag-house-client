import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { TRES } from "../interface/apiResponse";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    type Inputs = {
        name: string;
        email: string;
        password: string;
        phone: string;
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const [registerUser,] = useRegisterMutation();

    const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {

        const res = await registerUser(data) as unknown as TRES;

        if (res?.data) {
            toast.success('User Registered', {
                autoClose: 2000
            })
            reset()
            navigate('/login')

        }
        if (res?.error) {
            toast.error(`${res?.error?.data?.message}`)
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-2"
            >

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" className="grow" placeholder="Email" {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    })} />
                </label>

                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2" >
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"

                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 5,
                                message: "Password must be at least 5 characters",
                            },
                            pattern: {
                                value: /^[A-Za-z0-9]+$/,
                                message: "Password can only contain letters and numbers",
                            },
                        })}
                    />
                    <button
                        type="button"
                        className="text-sm text-blue-500 underline"
                        onClick={() => setShowPassword(!showPassword)}
                    >

                        {showPassword ? <p className="text-2xl text-black"><IoIosEyeOff /></p> : <p className="text-2xl text-black"><IoIosEye /></p>}
                    </button>
                </label>
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input placeholder="Name" {...register("name", {
                        required: "Name is required",
                        pattern: {
                            value: /^[A-Za-z\s]+$/,
                            message: "Only letter",
                        },
                    })}
                    />
                </label>
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <input
                    {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]{11}$/,
                            message: "Please enter a valid 11-digit phone number",
                        },
                    })}
                    type="text"
                    placeholder="১১ ডিজিটের নাম্বারটি লিখুন"
                    className={`input input-bordered input-md w-full max-w-xs ${errors.phone ? "border-red-500" : ""
                        }`}
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}

                <input
                    type="submit"
                    className="btn btn-primary text-white"
                />
                <p>Already have account, so please <NavLink to='/login' className='font-bold link uppercase'>Login</NavLink></p>
            </form>
        </div>
    );
};

export default Register;