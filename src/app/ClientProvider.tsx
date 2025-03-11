'use client'

import React, { ReactNode } from 'react'
import { OverlayProvider } from 'overlay-kit'

function ClientProvider({ children }: { children: ReactNode | ReactNode[] }) {
  return <OverlayProvider>{children}</OverlayProvider>
}

export default ClientProvider
