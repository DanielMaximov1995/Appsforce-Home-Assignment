'use client'

import { User } from "@/services/fetch-users";
import { Dialog, DialogActions, DialogContent, Button, TextField, DialogTitle, Box, Typography } from "@mui/material"
import { motion } from 'framer-motion'

interface DeleteModalProps {
    onClose: () => void;
    user: User;
    onDelete: (id: string) => void
}

const DeleteModal = (props: DeleteModalProps) => {
    const { onClose, onDelete, user } = props

    return (
        <Dialog open={true} onClose={onClose} maxWidth="sm" fullWidth>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >
                <DialogTitle>{`Delete "${user.name}" User`}</DialogTitle>
                <DialogContent>
                    <Typography component="span" variant="body2" color="text.primary">
                        Are you sure you want to delete {user.name}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={() => onDelete(user.id)} variant="contained" color="error">
                        Delete
                    </Button>
                </DialogActions>
            </motion.div>
        </Dialog>
    )
}

export default DeleteModal