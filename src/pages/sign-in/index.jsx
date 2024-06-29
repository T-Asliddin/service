import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import { auth } from "@service";
import { NavLink } from "react-router-dom";
import { Snackbar } from "../../components";
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
      const response = await auth.sign_in(form);
      console.log(response);
      if (response.status === 200) {
        setOpen(true)
      }
    } catch (error) {}
  };
  const toggle=()=>{
    setOpen(false)
  }

  return (
    <>
     <Snackbar  open={open} toggle={toggle}/> 
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[600px]  p-5">
          <h1 className="text-[50px] my-3 text-center ">Login</h1>
          <form onSubmit={handleSubmit} className=" flex flex-col gap-3 ">
         
            <TextField
              fullWidth
              type="text"
              label="Email"
              id="email"
              name="email"
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
            <NavLink to={'sign-up'}>
              <p className=" text-blue-700 ">Register</p>
            </NavLink>
            <Button  type="submit" variant="contained">
              Contained
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Index
