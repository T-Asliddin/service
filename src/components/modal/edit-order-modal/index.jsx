import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { order } from "@service";
import { Snackbar } from "../..";
import { service } from "@service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ edit, closemodal, item }) {
  const [form, setForm] = useState();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(item);
    const payload = {
      amount: +form.amount,
      client_full_name: form.name,
      client_phone_number: form.number,
      service_id: form.id,
    };
    if (item) {
      const {amount ,client_id ,id ,service_id ,status }=item
       console.log(amount,client_id, id ,service_id ,status);
      const edit = {
        amount:+form.amount,
        client_id,
        id,
        service_id,
        status
      };
      try {
        const response = await order.update(edit);
        if (response.status === 200) {
          console.log(response);
          toggle();
          window.location.reload();
        }
      } catch (error) {}
    } 
  };
  const toggle = () => {
    setOpen(false);
  };
  return (
    <div>
      <Snackbar open={open} toggle={toggle} severity={severity} />
      <Modal
        open={edit}
        onClose={closemodal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="spring-modal-title"
            variant="h4"
            component="h2"
            className="text-center "
          >
            Order create
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <TextField
                fullWidth
                type="number"
                label="Amount"
                id="amount"
                name="amount"
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                className=" mt-3"
                variant="contained"
              >
                Submit
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
