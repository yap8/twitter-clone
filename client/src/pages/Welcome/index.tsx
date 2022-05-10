import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import CloseIcon from '@mui/icons-material/Close';
import {
  Backdrop,
  Button,
  Fade,
  IconButton,
  Modal,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const Welcome: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="flex h-screen">
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form
            className="absolute top-1/2 left-1/2 w-full max-w-lg bg-white border rounded-xl p-2"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="flex">
              <div className="flex-1">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </div>
              <TwitterIcon
                className="flex-1 text-blue-400"
                style={{ fontSize: '2rem' }}
              />
              <div className="flex-1"></div>
            </div>
            <div className="flex flex-col px-10">
              <h1 className="text-3xl font-semibold mb-6">
                Create your account
              </h1>
              <div className="mb-6">
                <TextField className="w-full" label="Name" variant="outlined" />
              </div>
              <div className="mb-6">
                <TextField
                  className="w-full"
                  name="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                />
              </div>
              <div className="mb-10">
                <TextField
                  className="w-full"
                  name="name"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
              </div>
              <div className="pb-10">
                <Button className="w-full" variant="outlined" size="large">
                  Create
                </Button>
              </div>
            </div>
          </form>
        </Fade>
      </Modal>
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          className="h-full"
          style={{ objectFit: 'cover' }}
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
        />
        <TwitterIcon
          className="absolute text-white shadow"
          style={{ fontSize: '25rem' }}
        />
      </div>
      <div className="w-1/2 px-8 py-36 flex flex-col">
        <TwitterIcon
          className="text-blue-400 mb-14"
          style={{ fontSize: '3rem' }}
        />
        <h1 className="text-7xl font-bold mb-14">Happening now</h1>
        <p className="text-3xl font-bold mb-14">Join Twitter today.</p>
        <div className="max-w-sm">
          <Button className="w-full" variant="outlined" size="large">
            <GoogleIcon className="mr-2" />
            Sign up with Google
          </Button>
          <div className="flex items-center justify-center mt-4 mb-4">
            <div className="w-full h-px bg-gray-200" />
            <div className="bg-white px-2 z-10">or</div>
            <div className="w-full h-px bg-gray-200" />
          </div>
          <Button
            className="w-full"
            variant="contained"
            size="large"
            onClick={handleOpen}
          >
            Sign up with phone or email
          </Button>
          <h4 className="text-xl font-semibold mb-4 mt-10">
            Already have an account?
          </h4>
          <Button className="w-full" variant="outlined" size="large">
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
