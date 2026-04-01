import { useState,useContext } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import AuthenticationContext from '../context/AuthenticationContext';
import { useNavigate } from 'react-router';
import { use } from 'react';
import { Link } from 'react-router';

export default function DarkLoginPage() {
  const navigate = useNavigate()
  const {login,email,setEmail,userId,setUserId} = useContext(AuthenticationContext);
  const [password,setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const loginUser = async () => {
    try{
      // const response = await fetch() 
      const response = await fetch('https://vaidyasetu.onrender.com/api/user/login',
        {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            email : email,
            password : password
          })
        }
      )
      const data = await response.json();
     
      // api goes above

      let status = false;
      if(data.message == 'Login successful' ){
        status = true;
        setUserId(data.user._id)
        setEmail(data.user.email)
        
      }
      if(status){
        login();
        navigate('/')
      }
      else{
        alert('Wrong credentials')
      }
    }catch(err){
      console.error('Login error:', err);
    }
  }


  // const loginUser = () => {
    
  //   // const allow = useValidateUser(email, password);
  //   const allow = true;
  //   if(allow){
  //     login();
  //     navigate('/')
  //   }
  //   else{
  //     alert("No user Found");
  //   }

  // }

  return (
    <div className="flex flex-col items-center h-full bg-[#14B8A6] bg-gradient-to-b from-gray-900 to-[#14b8a6]">
      {/* Phone frame for visualization */}
      <div className="border-8 border-gray-900 rounded-3xl overflow-hidden bg-gradient-to-b from-[#8af2e7] to-white shadow-xl w-full max-w-md">

        {/* <div className="h-full bg-gradient-to-b from-gray-900 to-black overflow-auto p-6"> */}
        <div className="h-full to-black overflow-auto p-6">
          {/* Logo and branding */}
          <div className="flex justify-center mb-10 mt-8">
            <div className="flex items-center">
              <div className="bg-teal-500 text-black p-3 rounded-xl shadow-lg shadow-teal-500/20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 2h4a2 2 0 0 1 2 2v4M22 16v4a2 2 0 0 1-2 2h-4M6 22H2a2 2 0 0 1-2-2v-4M2 8V4a2 2 0 0 1 2-2h4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="5" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <span className="text-2xl font-bold ml-2 text-black" style={{fontFamily: "'Montserrat', sans-serif"}}>VaidyaSetu</span>
            </div>
          </div>
          
          {/* Welcome text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-[#14B8A6]" style={{fontFamily: "'Playfair Display', serif"}}>Welcome Back</h1>
            <p className="text-black" style={{fontFamily: "'Poppins', sans-serif"}}>Login to access your healthcare appointments</p>
          </div>
          
          {/* Login form */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm text-black-300 font-medium  mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-teal-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-3 py-4 bg-[#14B8A6] border border-gray-700 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
                  placeholder="Enter your email"
                  style={{fontFamily: "'Inter', sans-serif"}}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black-300 mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-teal-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-12 py-4 bg-[#14B8A6] border border-gray-700 rounded-xl shadow-sm focus:ring-teal-500 focus:border-teal-500 text-white"
                  placeholder="Enter your password"
                  style={{fontFamily: "'Inter', sans-serif"}}
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-teal-400 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
          
            
            <div className="pt-3">
              <button
                type="button"
                className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-black bg-teal-500 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-teal-500 shadow-teal-500/30"
                style={{fontFamily: "'Poppins', sans-serif"}}
                onClick={loginUser}
              >
                <span className="mr-2 font-medium">Sign In</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          
          
          {/* Sign up link */}
          <div className="mt-10 text-center pb-6">
            <p className="text-sm text-black-400" style={{fontFamily: "'Poppins', sans-serif"}}>
              Don't have an account?{' '}
              <Link to = '/signup'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}