import Typography from '@mui/material/Typography'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { HeaderBox } from '../../styles';

const Header = () => {
    return (
        <HeaderBox>
            <AccountBoxIcon color='success' sx={{ fontSize: 40, marginRight: 2 }}/>
            <Typography variant="h5">Phone Book App</Typography>
        </HeaderBox>
    )
}
export default Header