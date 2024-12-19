'use client'

import { useEffect, useState } from 'react'
import { ToggleButtonGroup, Box, Typography, Container } from '@mui/material'
import { ViewList, GridView } from '@mui/icons-material'
import { motion } from 'framer-motion'
import SearchFilter from '@/components/styles/SearchFilter'
import { StyledToggleButton } from '@/components/styles/custom-styles'
import UsersList from '@/components/root-page/UsersList'
import AddUserButton from '@/components/root-page/AddUserButton'
import { useQuery } from 'react-query'
import { fetchUsers, User } from '@/services/fetch-users'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')
  const { data, isLoading, isError } = useQuery<User[]>('users', fetchUsers)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    if (data && data?.length > 0 && users.length === 0) {
      setUsers(data)
    }
  }, [data])

  const handleLayoutChange = (value: 'grid' | 'list') => setLayout(value)

  const deleteUser = (id: string) => setUsers(prev => prev.filter((user) => user.id !== id))

  const handleSaveUser = (id: string, user: User, type: "save" | "new") => {
    if (type === "save") {
      setUsers(prev => prev.map(i => i.id === id ? user : i))
    } else {
      setUsers(prev => [{ ...user, id }, ...prev])
    }
  }

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: '#4a4a4a' }}>
            Users Library
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: "wrap", gap : "0.5rem", width : "100%", alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Box sx={{ width : { xs : "100%" , sm : "50%" } }}>
              <SearchFilter setSearchTerm={setSearchTerm} />
            </Box>
            <Box sx={{ display: 'flex', width : { xs : "100%" , sm : "auto" } , alignItems: 'center', justifyContent: "space-between" }}>
              <ToggleButtonGroup
                value={layout}
                exclusive
                onChange={(e, value) => handleLayoutChange(value)}
                aria-label="layout"
                sx={{ mr: 2 }}
              >
                <StyledToggleButton value="grid" aria-label="grid layout">
                  <GridView />
                </StyledToggleButton>
                <StyledToggleButton value="list" aria-label="list layout">
                  <ViewList />
                </StyledToggleButton>
              </ToggleButtonGroup>
              <AddUserButton saveUser={handleSaveUser} />
            </Box>
          </Box>
          <UsersList saveUser={handleSaveUser} deleteUser={deleteUser} isError={isError} isLoading={isLoading} users={users} searchTerm={searchTerm} layout={layout} />
        </Box>
      </Container>
    </motion.div>
  )
}

export default Home