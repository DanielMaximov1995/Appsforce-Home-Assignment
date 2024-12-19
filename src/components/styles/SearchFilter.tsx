'use client'

import { motion } from 'framer-motion'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    width : "100%",
    borderRadius: theme.shape.borderRadius,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    '&.Mui-focused': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  },
}))

interface SearchFilterProps {
  setSearchTerm: (term: string) => void
}

const SearchFilter = (props: SearchFilterProps) => {
    const { setSearchTerm } = props

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width : "100%" }}
    >
      <StyledTextField
        label="Search"
        variant="outlined"
        placeholder="Search by name, email, ID, or location"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ width: '100%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </motion.div>
  )
}

export default SearchFilter

