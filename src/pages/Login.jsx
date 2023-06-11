import Guest from "../layouts/Guest";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Checkbox from "../components/Checkbox";

export default function Login() {
  return (
    <Guest tittle={'Login'} cardClassName={"lg:w-2/5"}>
      <div>
        {/* <h1 className="mb-6 text-2xl font-light uppercase">Login</h1> */}
        <form action="">
          <div className="mb-6">
            <Label forInput="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={"email@gmail.com"}
            />
          </div>
          <div className="mb-6">
            <Label forInput="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </div>
          <div className="flex justify-between mb-5">
            <Checkbox forInput="remember" label={"Remember me"} name="remember" id="remember"/>
            <a href="#">Forgot password</a>
          </div>
          <div className="flex items-center justify-between pt-3">
          <Button>Login</Button>
            <span>
                Don't have an account ?{"  "}
            <a href="/register" className="font-medium text-indigo-500">Register.</a>

            </span>
          </div>
        </form>
      </div>
    </Guest>
  );
}
