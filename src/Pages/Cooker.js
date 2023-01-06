import { Box, Grid } from '@mui/material'
import React from 'react'
import Builder from '../Component/Builder/Builder'
import InstantPreview from '../Component/Preview/InstantPreview'

export default function Cooker() {
  return (
    <Box>
        <Grid container>
            <Grid item xs={12} md={6} lg={6}>
                <Builder/>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <InstantPreview/>
            </Grid>
        </Grid>
    </Box>
  )
}
