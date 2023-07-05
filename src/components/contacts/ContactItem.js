import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Contact, ContactItemInfo } from "../../styles";

const ContactItem = (props) => {
    return (
        <Contact>
            <ContactItemInfo>
                <Avatar sx={{backgroundColor: '#1F6CFA'}}>{props.firstName.charAt(0)}</Avatar>
                <Box ml={2}>
                    <Typography variant="body1">{props.firstName} {props.lastName}</Typography>
                    <Typography variant="body2">{props.phone}</Typography>
                </Box>
            </ContactItemInfo>
            <Box>
                <IconButton edge="end" aria-label="delete" onClick={() => props.onDelete(props.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            </Box>
        </Contact>
    )
}
export default ContactItem