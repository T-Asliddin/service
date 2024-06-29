import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars({open ,toggle}) {

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

   toggle()
  };

  return (
    <div>
     
      <Snackbar open={open} autoHideDuration={4000} onClose={toggle}>
        <Alert
          onClose={toggle}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}
