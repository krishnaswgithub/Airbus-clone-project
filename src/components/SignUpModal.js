import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MdLockOpen } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai";
import { MDBContainer, MDBInput, MDBBtn } from "mdb-react-ui-kit";

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

export default function SignUPModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    handleClose();
    navigate("/login");
  };
  const handleSignUp = () => {
    if (!email.includes("@")) {
      toast.error("Please fill correct email id");
    } else if (name && email && password) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      toast.success("Signed up successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        navigate("/login");
      }, 0);
    } else {
      toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleCancel = () => {
    handleClose();
    navigate("/");
  };

  return (
    <Box>
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          bgcolor={"white"}
          width={"50%"}
          position="absolute"
          top="15%"
          left="25%"
          transform={"translate(-15%, -25%"}
        >
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <AiOutlineClose id="cancelButton" onClick={handleCancel} />
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                style={{
                  backgroundColor: "#9c27b0",
                  textAlign: "center",
                  color: "white",
                  width: "30px",
                  padding: "3px",
                  borderRadius: "100px",
                }}
              >
                <MdLockOpen />
              </Typography>
            </Box>
            <Box className="text-center">
              <h5>Sign Up</h5>
            </Box>
            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email input"
              id="typeEmail"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password input"
              id="typePassword"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn className="mb-4" onClick={handleSignUp}>
              Sign Up
            </MDBBtn>
            <Box className="text-center">
              <Typography
                style={{
                  color: "rgb(81,118, 178)",
                  textAlign: "right",
                  textDecoration: "underline",
                }}
              >
                Go to <span onClick={handleClick}>Login</span>
              </Typography>
            </Box>
          </MDBContainer>
        </Box>
      </Modal>
    </Box>
  );
}
