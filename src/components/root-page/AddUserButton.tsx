'use client'

import { useState } from 'react'
import { Add } from '@mui/icons-material'
import { StyledButton } from '@/components/styles/custom-styles'
import { motion } from 'framer-motion'
import UserModal from '@/components/root-page/UserModal'
import { User } from '@/services/fetch-users'

interface AddUserButtonProps {
    saveUser: (id: string, user: User, type: "save" | "new") => void
}

const AddUserButton = (props: AddUserButtonProps) => {
    const { saveUser } = props
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StyledButton
                    onClick={() => setIsModalOpen(true)}
                    startIcon={<Add />}
                >
                    Add User
                </StyledButton>
            </motion.div>
            {isModalOpen && (
                <UserModal saveUser={saveUser} type="new" onClose={() => setIsModalOpen(false)} />
            )}
        </>
    )
}

export default AddUserButton