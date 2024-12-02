'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { paths } from '@/paths';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Logo } from '@/components/core/logo';

import { usePopover } from '@/hooks/use-popover';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const userPopover = usePopover<HTMLDivElement>();

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-background-paper)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          sx={{
            alignItems: 'center',
            minHeight: '64px',
            px: 2,
          }}>

          <Stack spacing={2} sx={{ width: 'var(--SideNav-width)', p: 3 }}>
            <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex' }}>
              <Logo color="dark" height={32} width={122} />
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width:'100%', alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2, backgroundColor: '#fff' }}
          >
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <IconButton
                onClick={(): void => {
                  setOpenNav(true);
                }}
                sx={{ display: { lg: 'none' } }}
              >
                <ListIcon />
              </IconButton>
              <Tooltip title="Search">
                <IconButton>
                  <MagnifyingGlassIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
              <Tooltip title="Notifications">
                <Badge badgeContent={4} color="success" variant="dot">
                  <IconButton>
                    <BellIcon />
                  </IconButton>
                </Badge>
              </Tooltip>
              <Avatar
                onClick={userPopover.handleOpen}
                ref={userPopover.anchorRef}
                src="/assets/avatar.png"
                sx={{ cursor: 'pointer' }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
