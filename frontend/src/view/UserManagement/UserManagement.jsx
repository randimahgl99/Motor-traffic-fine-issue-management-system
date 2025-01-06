import { Box, Button, Typography } from "@mui/material";
import COLORS from "../../utils/Colors";
import profile from "../../assets/profile.png"
import UserCard from "../../components/UserManagementCards/UserCard";
import { useNavigate } from "react-router-dom";

const userData = [
    {
        name:'vidusha',
        profileImg:profile,
        email:'vidusha@gmail.com',
        date:'2024/09/12',
        state:'Not Active',
        userType:'officer'
    },
    {
        name:'vidusha',
        profileImg:profile,
        email:'vidusha@gmail.com',
        date:'2024/09/12',
        state:'Not Active',
        userType:'officer'
    },
    {
        name:'vidusha',
        profileImg:profile,
        email:'vidusha@gmail.com',
        date:'2024/09/12',
        state:'Not Active',
        userType:'civil'
    },
    {
        name:'vidusha',
        profileImg:profile,
        email:'vidusha@gmail.com',
        date:'2024/09/12',
        state:'Active',
        userType:'officer'
    }
]

const UserManagement = () => {
    const navigate = useNavigate();

    const officers = userData.filter(e=> e.userType === 'officer');
    const civilUser = userData.filter(e=> e.userType === 'civil');
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: "space-between"
            }}>
                <Typography sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 800
                }}>
                    Police Officer
                </Typography>
                <Button
                    sx={{
                        bgcolor: COLORS.orangeColor,
                        color: COLORS.white,
                        fontWeight: 700,
                        '&:hover': {
                            bgcolor: COLORS.lightBlue,
                            color: COLORS.black,
                        },
                    }}
                    onClick={()=>navigate('/userdetails')}
                >
                    + New Officer
                </Button>


            </Box>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                mt:10
            }}>
                {
                    officers.map((data,index) => (
                        <UserCard name={data.name} email={data.email} profileImg={data.profileImg} date={data.date} state={data.state}/>
                    ))
                }
            </Box>

            <Box sx={{
                width:'100%',
                mt:5,
                textAlign:'left'
            }}>
            <Typography sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 800
                }}>
                    Civil User
                </Typography>

                <Box sx={{
                display:'flex',
                flexDirection:'column',
                mt:10
            }}>
                {
                    civilUser.map((data,index) => (
                        <UserCard name={data.name} email={data.email} profileImg={data.profileImg} date={data.date} state={data.state}/>
                    ))
                }
            </Box>
            </Box>
        </Box>
    )
}

export default UserManagement;