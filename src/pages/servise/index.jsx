import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { auth } from "@service";
import { NavLink } from "react-router-dom";
import { CreateModal } from "@modal";
import { ServiceTable } from "@ui";
import { service } from "@service";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [data ,setData]=useState([])

  const getdata = async () => {
    try {
      const response = await service.get();
      if (response.status===200 && response.data.services) {
        setData(response.data.services)
      }
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <CreateModal open={open} toggle={() => setOpen(false)} />

      <div className="flex flex-col gap-5">
        <div className=" flex justify-end ">
          <Button onClick={() => setOpen(true)} variant="contained">
            Add
          </Button>
        </div>
        <ServiceTable data={data} />
      </div>
    </>
  );
};

export default Index;
