import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material";

export const HeaderBox = styled(Box)(() => ({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 48
}))

export const PhoneContacts = styled(Box)(() => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 48
}))
export const Contact = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center'
}));
export const ContactItemInfo = styled(Box)(() => ({
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
}))
