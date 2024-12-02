import * as React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import { Box, Container, Stack, Typography } from "@mui/material";

export const metadata = { title: `Dataset | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Container sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h4" fontWeight="800">
            Dataset
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 3.5 }}>
            Our data analytics services helps lift your business to new heights
          </Typography>
        </Container>
        <Box
          component="img"
          alt="Under development"
          src="/assets/seo-friendly.png"
          sx={{ display: 'inline-block', height: 'auto', maxWidth: '100%', width: '560px', margin: 'auto' }}
        />
      </Stack>
    </Box>
  );
}
