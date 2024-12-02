import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';

import { config } from '@/config';
import { Box, Button, Container, Typography } from "@mui/material";

import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';

export const metadata = { title: `Project | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={1}>
      <Grid lg={6} md={6} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          alt="Under development"
          src="/assets/business-plan.svg"
          sx={{ display: 'inline-block', height: 'auto', maxWidth: '100%', width: '400px' }}
        />
      </Grid>
      <Grid lg={6} md={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Container>
            <Typography gutterBottom variant="h4" fontWeight="800">
              Welcome to DAVI!
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
              Start your first ETL pipeline with DAVI
            </Typography>
            <Typography variant="body2" mb={2.5}>
              Let&apos;s help you set up a new ETL pipeline to transform your data and extract valuable insights.
            </Typography>
            <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
              Start new project
            </Button>
        </Container>
      </Grid>
    </Grid>
  );
}
