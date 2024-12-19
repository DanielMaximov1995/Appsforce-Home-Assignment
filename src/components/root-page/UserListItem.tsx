'use client'

import { User } from "@/services/fetch-users"
import { useState } from "react"
import { motion } from 'framer-motion'
import { Avatar, Box, Button, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { StyledListItem } from "../styles/custom-styles"
import UserModal from "@/components/root-page/UserModal"
import DeleteModal from '@/components/root-page/DeleteModal'


interface UserListItemProps {
    user: User;
    onDelete: (id: string) => void
    saveUser: (id: string, user: User, type: "save" | "new") => void
}

const UserListItem = (props: UserListItemProps) => {
    const { user, onDelete, saveUser } = props
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalDelete, setIsModalDelete] = useState(false)

    return (
        <>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <StyledListItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                    <Box sx={{ display: "flex", width: "50%" }}>
                        <ListItemAvatar sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar src={user.image} alt={user.name} sx={{ width: 60, height: 60 }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={user.name}
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="text.primary">
                                        {user.email}
                                    </Typography>
                                    <br />
                                    {user.location}
                                </>
                            }
                            sx={{ ml: 2 }}
                        />
                    </Box>
                    <Box sx={{ width: "50%", display: "flex", justifyContent: "end" }}>
                        <Button size="small" color="primary" onClick={() => setIsModalOpen(true)} sx={{ mr: 1 }}>
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="secondary"
                            onClick={() => setIsModalDelete(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </StyledListItem>
            </motion.div>
            {isModalOpen && (
                <UserModal type="save" saveUser={saveUser} user={user} onClose={() => setIsModalOpen(false)} />
            )}
            {
                isModalDelete && (
                    <DeleteModal user={user} onDelete={onDelete} onClose={() => setIsModalDelete(false)} />
                )
            }
        </>
    )
}

export default UserListItem