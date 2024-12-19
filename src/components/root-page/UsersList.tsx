'use client'

import { fetchUsers, User } from "@/services/fetch-users"
import { Alert, Box, CircularProgress, Grid, List, Typography } from "@mui/material"
import { useQuery } from "react-query"
import { motion } from 'framer-motion'
import UserCard from '@/components/root-page/UserCard'
import UserListItem from '@/components/root-page/UserListItem'
import { useEffect, useState } from "react"

interface UsersListProps {
    searchTerm: string
    layout: 'grid' | 'list'
    isLoading: boolean;
    isError: boolean
    users: User[]
    saveUser: (id: string, user: User, type: "save" | "new") => void
    deleteUser: (id: string) => void
}

const UsersList = (props: UsersListProps) => {
    const { searchTerm, layout, users, isError, isLoading, deleteUser, saveUser } = props

    if (isLoading) return <CircularProgress />
    if (isError) return <Alert severity="error">Error fetching users</Alert>

    const filteredUsers = users?.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {
                users.length > 0 ? <>
                    {layout === 'grid' ? (
                        <Grid container spacing={3}>
                            {filteredUsers?.map(user => (
                                <Grid item xs={12} sm={6} md={4} key={user.id}>
                                    <UserCard user={user} onDelete={deleteUser} saveUser={saveUser} />
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <List>
                            {filteredUsers?.map(user => (
                                <UserListItem saveUser={saveUser} onDelete={deleteUser} key={user.id} user={user} />
                            ))}
                        </List>
                    )}
                </> : <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant="h5" sx={{ color: '#4a4a4a' }}>There are currently no users, add a new user.</Typography>
                </Box>
            }
        </motion.div>
    )
}

export default UsersList