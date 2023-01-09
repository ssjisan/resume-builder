import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import Builder from '../Component/Builder/Builder'
import InstantPreview from '../Component/Preview/InstantPreview'

export default function Cooker() {
  const forBelow900 = useMediaQuery("(max-width:900px)");

  return (
    <Box>
        <Grid container>
            <Grid item xs={12} md={12} lg={6}>
                <Builder/>
            </Grid>
            {!forBelow900 && <Grid item xs={12} md={12} lg={6}>
                <InstantPreview/>
            </Grid>}
        </Grid>
    </Box>
  )
}
