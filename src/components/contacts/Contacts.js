import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Pagination from '@mui/material/Pagination';
import ContactItem from "./ContactItem";
import { PhoneContacts } from "../../styles";

const Contacts = ({contacts, onAdd, onDelete}) => {
    const [searchContact, setSearchContact] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [contactsPerPage] = useState(5)

    const searchContactHandler = (e) => {
      setSearchContact(e.target.value)
      setCurrentPage(1)
    }

    const openAddContactDialogHandler = () => {
      onAdd()
    }

    const paginate = (e, value) => setCurrentPage(value)

    let filteredContacts 
    
    const indexOfLastContact = currentPage * contactsPerPage
    const indexOfFirstContact = indexOfLastContact - contactsPerPage
                                            
    let totalNumberOfPage

    if(searchContact === '') {
      filteredContacts = contacts

      totalNumberOfPage = Math.ceil(filteredContacts.length / contactsPerPage)
    }
    if(searchContact !== '') {
      filteredContacts = contacts.filter((contact) => contact.firstName.indexOf(searchContact) !== -1)
      
      totalNumberOfPage = Math.ceil(filteredContacts.length / contactsPerPage)
    }
    const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact)
    

  return (
    <Box>
      <PhoneContacts>
        <Typography variant="h6">Contacts</Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ textTransform: "none", fontSize: "inherit" }}
          onClick={openAddContactDialogHandler}
        >
          + Add Contact
        </Button>
      </PhoneContacts>
     
      <Box
        sx={{
          maxWidth: "100%",
          mt: 8,
        }}
      >
        <TextField
          fullWidth
          size="small"
          label="Search contact by firstname"
          id="fullWidth"
          value={searchContact}
          onChange={searchContactHandler}
        />
      </Box>
      <Paper sx={{ mt: 4, mb: 10, p: 1.5 }} variant="outlined">
        <Stack spacing={1}>
                {currentContacts.map((contact) => (
                    <ContactItem  key={contact.id} id={contact.id} firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} onDelete={onDelete} />
                ))}              
        </Stack>
        <Stack spacing={12} pt={2} alignItems="center">
            <Pagination page={currentPage} count={totalNumberOfPage} onChange={paginate} shape="rounded" size="small" />
        </Stack>
      </Paper>
    </Box>
  );
};
export default Contacts;