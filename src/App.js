import Container from "@mui/material/Container";
import Header from "./components/layout/Header";
import Contacts from './components/contacts/Contacts'
import Footer from './components/layout/Footer'
import AddContact from './components/contacts/AddContact'
import React, { useState } from 'react';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar'

const dummy_contacts = [
  { id: "c1", firstName: "Antoine", lastName: 'Clamaran', phone: "+381 54424242" },
  { id: "c2", firstName: "Bob", lastName: 'Sinclair', phone: "+381 54121212" },
  { id: "c3", firstName: "Chris", lastName: 'Lake', phone: "+381 54383312" },
  { id: "c4", firstName: "Dr", lastName: 'Kucho', phone: "+381 54874242" },
  { id: "c5", firstName: "Marco", lastName: 'Carola', phone: "+381 54712388" },
  { id: "c6", firstName: "Sebastian", lastName: 'Leger', phone: "+381 54424159" },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [contacts, setContacts] = useState(dummy_contacts)
  const [open, setOpen] = useState(false)
  const [displayToast, setDisplayToast] = useState(false)

  const openAddContactDialog = () => {
    setOpen(true)
  }
  const closeAddContactDialog = () => {
    setOpen(false)
  }

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
    setDisplayToast(true)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }
  const closeToast = () => {
    setDisplayToast(false)
  }

  return (
    <Container maxWidth='sm'>
        <Header />
        <AddContact open={open} onClose={closeAddContactDialog} onAddContact={addNewContact} />
        <Contacts contacts={contacts} onAdd={openAddContactDialog} onDelete={deleteContact}/>
        <Snackbar open={displayToast} autoHideDuration={5000} onClose={closeToast}>
          <Alert onClose={closeToast} severity="success" sx={{ width: '100%' }}>
          You have successfully added a contact.
          </Alert>
        </Snackbar>
        <Footer />
    </Container>
  );
}

export default App;