import { useState } from "react";
import { OrderModal } from "@modal";
import { Button } from "@mui/material";
import { OrderTable } from "@ui";
 import { order } from "@service";
import { useEffect } from "react";
const Index = () => {
const [modal ,setModal]=useState(false)
const [data ,setData]=useState([])
  const getdata = async () => {
    try {
      const response = await order.get();
      if (response.status===200 && response.data.orders_list) {
        setData(response.data.orders_list)
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
      <OrderModal modal={modal} close={()=>{setModal(false)}} />
      <div className="flex flex-col gap-3">
        <div className=" flex justify-end ">
          <Button onClick={()=>{setModal(true)}} variant="contained">
            Add
          </Button>
        </div>
     
      <OrderTable data={data}/>
      </div>
    </>
  );
};

export default Index;
