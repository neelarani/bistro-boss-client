import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { user, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    createUser(data.email, data.password).then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          //  create user entry in the database
          axiosPublic.post('/users', userInfo).then(res => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Created Successfully',
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/');
            }
          });
        })

        .catch(error => console.log(error));
    });
  };
  console.log(watch('example'));

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  className="input input-bordered"
                  name="name"
                />
                {errors.name && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register('email', {
                    required: true,
                  })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={user ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  {...register('password', {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*])/,
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === 'maxLength' && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === 'pattern' && (
                  <p className="text-red-600">
                    Password must have one uppercase , one lower case, one
                    number and one special characters.
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo-url"
                  {...register('photo', { required: true })}
                  className="input input-bordered"
                  name="photo"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={'Sign Up'}
                />
              </div>
            </form>
            <p className="text-center p-2">
              <small>
                Already Have an Account?
                <span className="text-blue-500 ml-2">
                  <Link to={'/login'}>Login</Link>
                </span>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
