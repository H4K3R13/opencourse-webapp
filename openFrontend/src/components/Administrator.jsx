import { Button, Box, InputLabel, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import LogoutIcon from "@mui/icons-material/Logout";
import Table from "./Table";
import CircularProgress from "@mui/material/CircularProgress";
import logo from "./images/icon6.png";
import Footer from "./Footer";

const Administrator = () => {
  const [regNo, setRegNo] = useState("");
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit", regNo);
    const data = {
      regno: regNo,
    };
    axios
      .delete(`${import.meta.env.VITE_SECRET_KEY}openApi/api/delete`, {
        data: data,
      })
      .then((response) => {
        console.log("response", response);
        setSnackbarOpen(true);
        setSnackbarMessage("Deleted Successfully!");
        setSnackbarSeverity("success");
      })
      .catch((erros) => {
        console.error(erros);
        setSnackbarOpen(true);
        setSnackbarMessage("Registration Number Not Found");
        setSnackbarSeverity("error");
      });
  };

  const handleAllote = () => {
    setIsLoading1(true);
    console.log("Allotement");
    axios
      .get(`${import.meta.env.VITE_SECRET_KEY}openApi/api/allotement_csv`, {
        responseType: "blob",
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/zip" });
        const url = URL.createObjectURL(blob);
        // Create an anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "opencourse_allotement.zip";
        a.click();
        // Clean up the blob URL
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading1(false);
      });
  };

  const handleCSVDown = () => {
    setIsLoading2(true);
    axios
      .get(`${import.meta.env.VITE_SECRET_KEY}openApi/api/submission_csv`, {
        responseType: "blob", // Set the response type to blob
      })
      .then((response) => {
        // Create a blob URL for the response data
        const blob = new Blob([response.data], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        // Create an anchor element to trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "opencourse_submissions.csv";
        a.click();
        // Clean up the blob URL
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading2(false);
      });
  };

  return (
    <>
      <div style={{ marginBottom: "3.5rem", marginTop: "3rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "1rem",
              marginTop: ".5rem",
              marginLeft: ".3rem",
              marginRight: ".3rem",
              width: "99%",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)", // Adding the boxShadow property for shadow
            }}
          >
            {" "}
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{ width: "50px", height: "50px", marginLeft: "8px" }}
                />
              </IconButton>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 600 }}
              >
                Open Course - Admin Panel
              </Typography>
              <Button
                style={{ backgroundColor: "#27ac1f", color: "white" ,borderRadius:"2rem", padding:".7rem"}}
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingTop: "2rem",
            paddingLeft: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingTop: "2rem",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              Course Allotment
            </Typography>

            {isLoading1 ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                sx={{ mb: 2 }}
                onClick={handleAllote}
                startIcon={<FileDownloadIcon />}
              >
                Download
              </Button>
            )}
          </Box>

          <Table />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingTop: "1rem",
            }}
          >
            {isLoading2 ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                sx={{ mb: 2 }}
                onClick={handleCSVDown}
                startIcon={<FileDownloadIcon />}
              >
                Download
              </Button>
            )}
          </Box>

          <form onSubmit={handleSubmit}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
              Delete a submission
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Register Number"
              sx={{ mb: 2 }}
              onChange={(e) => setRegNo(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mb: 2 }} // Add margin to the bottom
              color="error"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </form>

          <Box sx={{ textAlign: "center" }}>
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={5000}
              onClose={handleSnackbarClose}
              //style={{ padding: "20rem 31.2rem" }}
            >
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleSnackbarClose}
                severity={snackbarSeverity}
              >
                {snackbarMessage}
              </MuiAlert>
            </Snackbar>
          </Box>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default Administrator;
