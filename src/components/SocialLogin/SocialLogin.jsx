import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then(res => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      axiosPublic.post('/users', userInfo).then(res => {
        console.log(res.data);
        navigate('/');
      });
    });
  };
  return (
    <div className="p-5">
      <button
        onClick={handleGoogleSignIn}
        className="p-4 py-1 bg-blue-400 btn text-white"
      >
        <FaGoogle></FaGoogle>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
