import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full text-sm">
          <FcGoogle></FcGoogle>
          Login With Gooogle
        </button>
        <button className="btn btn-outline w-full text-sm mt-2">
          <SiGithub></SiGithub>
          Login With Github
        </button>
      </div>

      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4 font-semibold">Find us on</h2>
        <a href="" className="p-4 flex items-center text-lg border rounded-t-lg text-blue-600">
            <FaFacebook className="mr-2"></FaFacebook>
            Facebook
        </a>
        <a href="" className="p-4 flex items-center text-lg border-x text-cyan-500">
            <FaTwitter className="mr-2"></FaTwitter>
            Twitter
        </a>
        <a href="" className="p-4 flex items-center text-lg border rounded-b-lg text-orange-600">
            <BsInstagram className="mr-2"></BsInstagram>
            Instagram
        </a>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>

    </div>
  );
};

export default RightSideNav;
