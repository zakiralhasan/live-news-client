import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import RightSideCarousel from "../RightSideCarousel/RightSideCarousel";

const RightSide = () => {
  const provider = new GoogleAuthProvider();
  const loginThroughGoogle = useContext(AuthContext);
  const { loginUserWithGoogle } = loginThroughGoogle;
  const handleGoogleLogin = () => {
    loginUserWithGoogle(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="px-2">
      <div className="flex flex-col gap-2 py-4">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline normal-case btn-info"
        >
          <FaGoogle className="mr-2 text-2xl" /> Login via Googgle
        </button>
        <button className="btn btn-outline normal-case">
          <FaGithub className="mr-2 text-2xl" /> Login via Github
        </button>
      </div>
      <h1 className="py-2">Find Us On</h1>
      <div>
        <button className="w-full px-2 py-2 my-2 rounded border border-black flex items-center">
          <FaFacebook className="mr-2" /> Facebook
        </button>
        <button className="w-full px-2 py-2 my-2 rounded border border-black flex items-center">
          <FaYoutube className="mr-2" /> Youtube
        </button>
        <button className="w-full px-2 py-2 my-2 rounded border border-black flex items-center">
          <FaTwitter className="mr-2" /> Twitter
        </button>
        <button className="w-full px-2 py-2 my-2 rounded border border-black flex items-center">
          <FaWhatsapp className="mr-2" /> Whatsapp
        </button>
      </div>
      <RightSideCarousel></RightSideCarousel>
    </div>
  );
};

export default RightSide;
