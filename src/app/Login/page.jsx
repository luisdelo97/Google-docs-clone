import Image from "next/image";
import { Button } from "../Material-Tailwind";
// import {} from "next-auth/client";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="https://links.papareact.com/1ui"
        width={300}
        height={550}
        objectFit="contain"
        alt="Docs"
      />
      <Button color="blue" className="w-44 mt-10">
        Login
      </Button>
    </div>
  );
};

export default Login;
