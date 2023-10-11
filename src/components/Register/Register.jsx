import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error and success
    setRegisterError(" ");
    setSuccess(" ");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password Should have at least one upper case characters"
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept Our Terms And Conditions");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user Created SuccessFully");

        // update Profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("Profile Updated"))
          .catch();
        // send verification email:
        sendEmailVerification(result.user).then(() => {
          alert("Please Check Your Email And Verify Your Account");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full bg-red-100 text-white rounded-lg py-2 px-4"
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="mb-4 w-full bg-red-100 text-white rounded-lg py-2 px-4"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <br />
          <div className="mb-4 relative">
            <input
              className=" w-full bg-green-100 py-2 px-4 rounded-lg"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              placeholder="Password"
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="" />
            <label className="ml-2" htmlFor="terms">
              Accept Our Terms <a href="">And Conditions</a>
            </label>
          </div>
          <br />
          <input
            className=" btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already Have An Account? <Link to="/login">LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
