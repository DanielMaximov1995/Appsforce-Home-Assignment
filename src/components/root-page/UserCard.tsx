'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { StyledAvatar, StyledCard } from '@/components/styles/custom-styles'
import { Button, CardActions, CardContent, Typography } from '@mui/material'
import { User } from '@/services/fetch-users'
import UserModal from '@/components/root-page/UserModal'
import DeleteModal from '@/components/root-page/DeleteModal'

interface UserCardProps {
  user: User
  onDelete: (id: string) => void
  saveUser: (id: string, user: User, type: "save" | "new") => void
}

const UserCard = (props: UserCardProps) => {
  const { user, onDelete, saveUser } = props
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalDelete, setIsModalDelete] = useState(false)

  return (
    <>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <StyledCard>
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <StyledAvatar src={user.image} alt={user.name} />
            <Typography variant="h6" component="div" gutterBottom align="center" sx={{ textTransform: "capitalize" }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
              {user.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {user.location}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
            <Button size="small" color="primary" onClick={() => setIsModalOpen(true)}>
              Edit
            </Button>
            <Button
              size="small"
              color="secondary"
              onClick={() => setIsModalDelete(true)}
            >
              Delete
            </Button>
          </CardActions>
        </StyledCard>
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

export default UserCard