'use client'

import { RootLayoutProps } from '@/app/layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from "@/components/styles/custom-styles";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient()

const Layout = (props : RootLayoutProps) => {
    const { children } = props

  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </QueryClientProvider>
  )
}

export default Layout