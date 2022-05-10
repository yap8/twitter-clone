import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Fade, Modal } from '@mui/material';
import { useState } from 'react';

import SignupForm from '../../components/Form/SignupForm';
import SigninForm from '../../components/Form/SigninForm';

const Welcome: React.FC = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);

  return (
    <section className="flex h-screen">
      <Modal
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        closeAfterTransition
      >
        <Fade in={signupOpen}>
          <div>
            <SignupForm handleClose={() => setSignupOpen(false)} />
          </div>
        </Fade>
      </Modal>
      <Modal
        open={signinOpen}
        onClose={() => setSigninOpen(false)}
        closeAfterTransition
      >
        <Fade in={signinOpen}>
          <div>
            <SigninForm handleClose={() => setSigninOpen(false)} />
          </div>
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
            onClick={() => setSignupOpen(true)}
          >
            Sign up with phone or email
          </Button>
          <h4 className="text-xl font-semibold mb-4 mt-10">
            Already have an account?
          </h4>
          <Button
            className="w-full"
            variant="outlined"
            size="large"
            onClick={() => setSigninOpen(true)}
          >
            Sign in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
