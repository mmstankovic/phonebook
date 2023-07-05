import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const AddContact = ({onClose, open, onAddContact}) => {
    const [enteredFirstname, setEnteredFirstname] = useState('')
    const [enteredLastname, setEnteredLastname] = useState('')
    const [enteredPhone, setEnteredPhone] = useState('')

    const firstNameChangeHandler = (e) => {
      setEnteredFirstname(e.target.value)
    }
    const lastNameChangeHandler = (e) => {
      setEnteredLastname(e.target.value)
    }
    const phoneChangeHandler = (e) => {
      setEnteredPhone(e.target.value)
    }

    const submitHandler = (e) => {
      e.preventDefault()

      if(!enteredFirstname || !enteredLastname || !enteredPhone) {
        return
      }

      const newContact = {
        id:  'c' + Math.floor(Math.random() * 1000) + 1,
        firstName: enteredFirstname,
        lastName: enteredLastname,
        phone: enteredPhone
      }

      onAddContact(newContact)

      setEnteredFirstname('')
      setEnteredLastname('')
      setEnteredPhone('')
      onClose()
    }

    return (
        <Dialog open={open} maxWidth='xs' onClose={onClose}>
        <DialogTitle>+ Add Contact</DialogTitle>
        <DialogContent>
          <TextField
            size='small'
            autoFocus
            margin="dense"
            id="firstname"
            label="First Name"
            type="text"
            fullWidth
            value={enteredFirstname}
            onChange={firstNameChangeHandler}
          />
          <TextField
            size='small'
            margin="dense"
            id="lastname"
            label="Last Name"
            type="text"
            fullWidth
            value={enteredLastname}
            onChange={lastNameChangeHandler}
          />
          <TextField
            size='small'
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            fullWidth
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='error' variant='contained' size='small'>Cancel</Button>
          <Button type='submit' onClick={submitHandler} color='success' variant='contained' size='small'>Submit</Button>
        </DialogActions>
      </Dialog>
    )
}
export default AddContact