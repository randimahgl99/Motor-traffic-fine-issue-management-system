import { Box, Button, TextField } from "@mui/material";
import account from '../../assets/Account.png';
import COLORS from "../../utils/Colors";

const UserDetails = () => {
    return(
        <Box sx={{
            width:'100%',
            height:'80vh',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',

        }}>
           <Box>
            <img src={account}/>
           </Box>
           <Box sx={{
            display:'flex',
            flexDirection:'column',
            width:{xs:'100%',md:'70%'},
            mt:5,
            gap:2
           }}>
           <TextField id="outlined-basic" label="Name" variant="outlined" />
           <TextField id="outlined-basic" label="Badge Number" variant="outlined" />
           <TextField id="outlined-basic" label="Station" variant="outlined" />
           <TextField id="outlined-basic" label="Contact Info" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
           <Box sx={{
            display:'flex',
            justifyContent:'end',
            width:'100%',
            mt:2
           }}>
            <Button sx={{
                bgcolor:COLORS.lightBlue2,
                color:COLORS.white,
                borderRadius:'20px',
                px:2,
                fontWeight:500
            }}>Submit</Button>
           </Box>
           </Box>
        </Box>
    )
}

export default UserDetails;