'use client'

import { User } from "@/services/fetch-users"
import { useState } from "react"
import { Dialog, DialogActions, DialogContent, Button, TextField, DialogTitle, Box } from "@mui/material"
import { motion } from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';

interface UserModalProps {
  user?: User
  type: "save" | "new"
  saveUser: (id: string, user: User, type: "save" | "new") => void
  onClose: () => void
}

const initialState = {
  id: "",
  name: "",
  email: "",
  location: ""
}

const UserModal = (props: UserModalProps) => {
  const { user, onClose, saveUser, type } = props
  const [formData, setFormData] = useState<User>(user || initialState)
  const [errors, setErrors] = useState<Partial<User>>({})

  const validateForm = () => {
    const newErrors: Partial<User> = {}
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long'
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.location) {
      newErrors.location = 'Location cannot be empty'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      saveUser(user?.id || uuidv4(), formData, type)
      onClose()
    }
  }


  return (
    <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <DialogTitle>{user ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <Box>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email || ''}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="dense"
              id="location"
              label="Location"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.location || ''}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              error={!!errors.location}
              helperText={errors.location}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </motion.div>
    </Dialog>
  )
}

export default UserModal