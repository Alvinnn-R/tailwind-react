import Guest from "../layouts/Guest";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";
import { Helmet } from "react-helmet";

export default function Register() {
  return (
    <Guest tittle={"Register"} cardClassName={"lg:w-2/5"}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div>
        {/* <h1 className="mb-6 text-2xl font-light uppercase">Register</h1> */}
        <form action="">
          <div className="mb-6">
            <Label forInput="name">Name</Label>
            <Input name="name" id="name" placeholder={"John Doe"} />
          </div>
          <div className="mb-6">
            <Label forInput="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={"email@gmail.com"}
            />
          </div>
          <div className="grid gap-x-4 md:grid-cols-2">
            <div className="mb-6">
              <Label forInput="password">Password</Label>
              <Input type="password" name="password" id="password" />
            </div>
            <div className="mb-6">
              <Label forInput="password_confirmation">Confirm Password</Label>
              <Input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
              />
            </div>
          </div>

          <div className="mb-6">
            <Label forInput={"gender"}>Gender</Label>
            <Select>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>
          <div className="flex justify-between mb-6">
            <Checkbox
              forInput="acceptance"
              label={"Aggree with Privacy and Terms"}
              name="acceptance"
              id="acceptance"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button>Register</Button>
            <span>
              Already have account ?{"  "}
              <a href="/login" className="font-medium text-indigo-500">
                Login.
              </a>
            </span>
          </div>
        </form>
      </div>
    </Guest>
  );
}
