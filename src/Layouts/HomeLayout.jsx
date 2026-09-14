import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/AuthSlice.js";
import Footer from '../Components/Footer'; 

function HomeLayout({ children }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for checking if user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying options according to the role
  const role = useSelector((state) => state?.auth?.role);

  async function handleLogout(e){
    e.preventDefault();
    const res = await dispatch(logout());
    if(res?.payload?.success)
    navigate('/')
  }

  return (
    <div className="relative">
      {/* Hamburger icon */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 text-white bg-gray-800 rounded-md"
      >
        <FiMenu size={28} />
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed top-0 left-0 h-full w-40 bg-slate-700 shadow-lg z-50 p-4">
          <ul className="menu text-base-content">
            <li className="relative">
              <Link to="/" className="text-white font-semibold block">
                Home    
              </Link>
              
              <button
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 text-white"
              >
                <AiFillCloseCircle size={32}  />
              </button>
            </li> 
            
            {isLoggedIn && role === 'ADMIN' && (
              <li>
                <Link to='/admin/dashboard'>Admin Dashboard</Link>
              </li>
            )}

            <li className="w-full">
              <Link to="/courses">All Courses</Link>
            </li>
            <li className="w-full">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="w-full">
              <Link to="/about">About Us</Link>
            </li>

            {!isLoggedIn && (
             
              <div className="w-full flex items-center justify-center space-x-1">
                <button className="btn-primary bg-orange-600 px-4 py-1 font-semibold rounded-md w-full hover:bg-orange-800">
                  <Link to='/login'>Login</Link>
                </button>
                <button className="btn-secondary bg-orange-600 px-3 py-1 font-semibold rounded-md w-full hover:bg-orange-800">
                  <Link to='/signup'>Signup</Link>
                </button>
              </div>
              
            )}
            {isLoggedIn && (
              // <li className="absolute bottom-4 w-[90%]"> yeh wala li kuch problem kar rha hai
              <div className="w-full flex items-center justify-center space-x-1">
                <button className="btn-primary bg-orange-600 px-4 py-1 font-semibold rounded-md w-full hover:bg-orange-800">
                  <Link to='/user/profile'>Profile</Link>
                </button>
                <button className="btn-secondary bg-orange-600 px-3 py-1 font-semibold rounded-md w-full hover:bg-orange-800">
                  <Link onClick={handleLogout}>Logout</Link>
                </button>
              </div>
              // {/* </li> */}
            )}
          </ul>
        </div>
      )}

      { children }

         <Footer />
    </div>
  );
}

export default HomeLayout;






