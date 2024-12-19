'use client'

import { Avatar, Button, Card, ListItem, ToggleButton } from '@mui/material'
import { createTheme, styled } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#a5d6a7'
      },
      secondary: {
        main: '#ffcc80',
      },
      background: {
        default: '#f5f5f5',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            },
          },
        },
      },
    },
  })

  export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  }))

  export const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    },
  }))
  
  export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
  }))

  export const StyledListItem = styled(ListItem)(({ theme }) => ({
    backgroundColor: '#ffffff',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    },
  }))

  export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    transition: 'all 0.3s ease-in-out',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
  }))