import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { auth } from "@service";
import { SignUPModal } from "../../components";
const Index = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);

  const hendleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await auth.sign_up(form);
      if (response.status === 200) {
        setOpen(true);
        localStorage.setItem("email", form.email);
      }
    } catch (error) {}
  };
  const toggle = () => {
    setOpen(false);
  };
  return (
    <>
      <SignUPModal open={open} toggle={toggle} />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[600px]  p-5">
          <h1 className="text-[50px] my-3 text-center ">Register</h1>
          <form className=" flex flex-col gap-3 ">
            <TextField
              fullWidth
              type="email"
              label="Email"
              id="email"
              name="email"
              onChange={hendleChange}
            />
            <TextField
              fullWidth
              type="name"
              label="Full Name"
              id="full_name"
              name="full_name"
              onChange={hendleChange}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              id="password"
              name="password"
              onChange={hendleChange}
            />
            <TextField
              fullWidth
              type="text"
              label="Phone"
              id="phone_number"
              name="phone_number"
              onChange={hendleChange}
            />
            <Button onClick={handleSubmit} variant="contained">
              Contained
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
