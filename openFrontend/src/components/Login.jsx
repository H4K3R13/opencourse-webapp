import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LoginIcon from '@mui/icons-material/Login';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
//import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "./images/icon6.png";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";


const Login = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const footerStyle = {
    backgroundColor: '#228B22',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 999,
    transition: 'bottom 0.3s', // Add a smooth transition for the footer
  };
  
  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const textStyle = {
    marginBottom: '6px',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);
    //Login is not complete about fix 1) session_token handling 2) unauthorizes asses to /course
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SECRET_KEY}openApi/api/login/`,
        data
      );
      const token = response.data["session_token"];
      const staff = response.data["staff"];
      console.log("Login Response",response.data);
      localStorage.setItem("token", token);
      const regno = encodeURIComponent(username); // URL-encode the email
      let url
      if (!staff) {
        url = `/course/?regno=${regno}`;
      } else if (staff) { // Use regexadmin.test() here
        url = `/administrator`; // Correct the typo in the URL path as well
      }
      setSnackbarOpen(true);
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");

      setTimeout(()=>{
        navigate(url);
      }, 1500)
      
    } catch (error) {
      console.error("Login failed:", error);
      setSnackbarOpen(true);
      setSnackbarMessage("Login failed. Please check your credentials.");
      setSnackbarSeverity("error");
    }
  };



  return (

    <div style={{ background: 'whiteSmoke', height: '100vh', overflow: 'hidden'}}>
      <div style={{marginBottom: "3.5rem", marginTop: "2rem", marginRight:"60%"  }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" 
            sx={{  
              backgroundColor: "white", 
              color:"black", 
              borderRadius:"1rem", 
              marginTop: ".5rem",
              marginLeft: ".3rem",
              marginRight: ".3rem", 
              width:"99%", 
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"}}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', marginLeft: '8px' }} />
              </IconButton>
              <Typography
                variant="h4"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 600 }}
              >
                OpenCourseMate
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>     
        <Container component="main" maxWidth="xs">
          <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          ></div> 

          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >    
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 15 }}
            >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="regno"
                  label="Register Number"
                  name="regno"
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                  InputProps={{
                    style: { borderColor: '#27ac1f' }, // Set border color to green
                    focused: { borderColor: '#27ac1f' } // Set focused border color to green
                  }}
                  InputLabelProps={{
                    style: { color: 'black' }, // Set label color to black
                  }}  
                /> 
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  placeholder="YYYY-MM-DD"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{
                    style: { color: 'black' }, // Set label color to black
                  }}  
                />
                {/*<FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />*/}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button
                    type="submit"
                    //fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background:"#27ac1f !important", borderRadius:"2rem" }}
                    onClick={handleSubmit}
                    startIcon={<LoginIcon/>}
                  >
                    Login
                  </Button>
                  </Box>
              <Box sx={{textAlign:"center"}}>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                //style={{padding:"20rem 31.2rem"}}
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
              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>*/}
            </Box>
          </Box>  
        </Container>
      </div>
      <AppBar position="static" style={footerStyle}>
          <Container>
            <Toolbar style={contentStyle}>
              <Typography variant="body1" color="white" style={textStyle}>
                Nehru Arts and Science College Padannakad
              </Typography>
            </Toolbar>
          </Container>
      </AppBar> 
    </div>
  );
};

export default Login;
