import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, IconButton, TextField } from '@mui/material';
import { useState } from 'react';

interface SignupFormProps {
  handleClose: () => any;
}

const SignupForm: React.FC<SignupFormProps> = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('SIGNUP');
  };

  return (
    <form
      className="absolute top-1/2 left-1/2 w-full max-w-lg bg-white border rounded-xl p-2"
      style={{ transform: 'translate(-50%, -50%)' }}
      onSubmit={handleSubmit}
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
        <h1 className="text-3xl font-semibold mb-6">Create your account</h1>
        <div className="mb-6">
          <TextField
            className="w-full"
            name="name"
            type="text"
            label="Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <TextField
            className="w-full"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-10">
          <TextField
            className="w-full"
            name="name"
            type="password"
            label="Password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="pb-10">
          <Button
            className="w-full"
            type="submit"
            variant="outlined"
            size="large"
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
