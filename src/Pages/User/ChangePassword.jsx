import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import toast from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import { changePassword } from "../../Redux/Slices/AuthSlice";

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserPassword({
      ...userPassword,
      [name]: value,
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!userPassword.oldPassword || !userPassword.newPassword) {
      toast.error("All fields are required");
      return;
    }

    const res = await dispatch(changePassword(userPassword));

    if (res?.payload?.success) {
      setUserPassword({
        oldPassword: "",
        newPassword: "",
      });
      navigate("/user/profile");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          noValidate
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-6 rounded-lg p-8 text-white w-96 shadow-[0_0_10px_black] relative"
        >
          <h1 className="text-center text-3xl font-bold text-yellow-500">
            Change Password
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="oldPassword" className="font-semibold">
              Old Password
            </label>
            <input
              type="password"
              required
              name="oldPassword"
              id="oldPassword"
              placeholder="Enter your old password"
              className="bg-transparent px-3 py-2 border rounded-md"
              value={userPassword.oldPassword}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword" className="font-semibold">
              New Password
            </label>
            <input
              type="password"
              required
              name="newPassword"
              id="newPassword"
              placeholder="Enter your new password"
              className="bg-transparent px-3 py-2 border rounded-md"
              value={userPassword.newPassword}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded-md py-2 font-semibold text-lg cursor-pointer mt-2"
          >
            Update Password
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="link text-accent cursor-pointer flex items-center justify-center gap-2 w-full text-center hover:text-yellow-500"
          >
            <AiOutlineArrowLeft /> Back to profile
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default ChangePassword;