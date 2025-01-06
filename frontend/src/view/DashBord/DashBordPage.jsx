import { IoMdCloudDownload } from "react-icons/io";
import { MdInsertChart } from "react-icons/md";
import EditUser from "../UserManagement/EditUser";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const DashbordPage = () => {
    const [data, setData] = useState([{name: "overRall", count: "155"}]);

    const fetchData = async () => {
        try {
          
          const response = await axios.get("http://127.0.0.1:8000/example");
          setData(response.data)
        } catch (err) {
          console.log(err)
        } 
      };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#00173D",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            width: "100%",
            height: "70px",
          }}
        >
          <h1 style={{ width: "100%", textAlign: "left" }}>Dashboard</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "300px",
            color: "#fff",
            padding: "10px 20px 10px 20px",
            border: "2px solid #fff",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}
          >
            <h2 style={{ margin: "0" }}>Summery</h2>

            <Button
                sx={{
                    padding:"8px",
                    border: "2px solid #fff",
                    borderRadius: "8px",
                    color: "#fff",
                    textTransform: "none"
                }}
            >
              <IoMdCloudDownload style={{marginRight: "5px", fontSize: "23px"}}/> Export
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap",
              width: "100%",
              minHeight: "220px",
              padding: "10px",
              gap: "15px",
            }}
          >
            <Button
              sx={{
                width: "190px",
                height: "190px",
                padding: "10px",
                border: "2px solid #fff",
                borderRadius: "20px",
                backgroundColor: "#0095FF",
                color: "#fff",
                textTransform: "none",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <MdInsertChart style={{fontSize: "40px",color: "pink", marginBottom: "10px"}}/>
              <h1 style={{margin: "0", color: "#000"}}>{data[0].count}</h1>
              <h2 style={{margin: "0", width: "100%", textAlign: "center"}}>Total Fines Issued</h2>
              <h3 style={{margin: "0", width: "100%", textAlign: "center"}}>Overall</h3>

            </Button>

            <Button
              sx={{
                width: "190px",
                height: "190px",
                padding: "10px",
                border: "2px solid #fff",
                borderRadius: "20px",backgroundColor: "#0095FF",
                color: "#fff",
                textTransform: "none",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <MdInsertChart style={{fontSize: "40px",color: "pink", marginBottom: "10px"}}/>
              <h1 style={{margin: "0", color: "#000"}}>123</h1>
              <h2 style={{margin: "0", width: "100%", textAlign: "center"}}>Total Fines Issued</h2>
              <h3 style={{margin: "0", width: "100%", textAlign: "center"}}>Overall</h3>
            </Button>

            <Button
              sx={{
                width: "190px",
                height: "190px",
                padding: "10px",
                border: "2px solid #fff",
                borderRadius: "20px",backgroundColor: "#0095FF",
                color: "#fff",
                textTransform: "none",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <MdInsertChart style={{fontSize: "40px",color: "pink", marginBottom: "10px"}}/>
              <h1 style={{margin: "0", color: "#000"}}>123</h1>
              <h2 style={{margin: "0", width: "100%", textAlign: "center"}}>Total Fines Issued</h2>
              <h3 style={{margin: "0", width: "100%", textAlign: "center"}}>Overall</h3>
            </Button>

            <Button
              sx={{
                width: "190px",
                height: "190px",
                padding: "10px",
                border: "2px solid #fff",
                borderRadius: "20px",backgroundColor: "#0095FF",
                color: "#fff",
                textTransform: "none",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <MdInsertChart style={{fontSize: "40px",color: "pink", marginBottom: "10px"}}/>
              <h1 style={{margin: "0", color: "#000"}}>123</h1>
              <h2 style={{margin: "0", width: "100%", textAlign: "center"}}>Total Fines Issued</h2>
              <h3 style={{margin: "0", width: "100%", textAlign: "center"}}>Overall</h3>
            </Button>

            <Button
              sx={{
                width: "190px",
                height: "190px",
                padding: "10px",
                border: "2px solid #fff",
                borderRadius: "20px",backgroundColor: "#0095FF",
                color: "#fff",
                textTransform: "none",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "start",
              }}
            >
              <MdInsertChart style={{fontSize: "40px",color: "pink", marginBottom: "10px"}}/>
              <h1 style={{margin: "0", color: "#000"}}>123</h1>
              <h2 style={{margin: "0", width: "100%", textAlign: "center"}}>Total Fines Issued</h2>
              <h3 style={{margin: "0", width: "100%", textAlign: "center"}}>Overall</h3>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DashbordPage;
