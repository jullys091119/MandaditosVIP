'use client'
import { ActionIcon } from '@mantine/core';
import { SlidersHorizontalIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation'
import { ArrowCircleLeftIcon } from '@phosphor-icons/react';

function BackIcon() {
   const router = useRouter()
  return (
    <ActionIcon variant="filled"
     color="teal"
     size="xl"
     radius="xl"
     aria-label="Settings"
     onClick={() => router.back()}
     className='absolute right-0'
     >
      <ArrowCircleLeftIcon size={44} weight="fill" />
    </ActionIcon>
  );
}

export default BackIcon