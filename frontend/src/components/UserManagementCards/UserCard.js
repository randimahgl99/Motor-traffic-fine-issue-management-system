import { Avatar, Box, IconButton, Typography } from "@mui/material"
import COLORS from "../../utils/Colors";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const UserCard = ({profileImg, name, email, state, date, id}) => {

    const navigate = useNavigate();
    const handleColor = (state)=> {
        if(state === 'Active') return COLORS.green1
        if(state === 'Not Active') return 'red'
    }
    return(
        <Box sx={{
            width:'100%',
            height:'50px',
            border:`1px solid ${COLORS.bgBlue}`,
            borderRadius:'10px',
            alignItems:'center',
            mt:1,
            display:'flex',
            px:{xs:'auto',md:2},
            justifyContent:"space-between"
        }}>

            <Avatar src={profileImg}/>
            <Box sx={{width:'15%'}}>
            <Typography sx={{textAlign:'left'}}>{name}</Typography>
            </Box>
            <Box sx={{width:'15%'}}>
            <Typography sx={{textAlign:'left'}}>{email}</Typography>
            </Box>
            <Box sx={{width:'15%'}}>
            <Typography sx={{textAlign:'left'}}>{date}</Typography>
            </Box>
            <Box sx={{width:'15%'}}>
            <Typography sx={{textAlign:'left', color:handleColor(state)}}>{state}</Typography>
            </Box>
            
            <Box sx={{
                display:'flex',
                flexDirection:'row',
                borderRadius:'10px'
            }}>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={()=>navigate(`/editAdmin/${id}`)}>
                    <EditIcon/>
                </IconButton>

            </Box>
        </Box>
    )
}

export default UserCard;