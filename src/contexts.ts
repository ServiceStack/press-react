import { createContext } from 'react'
import type { VirtualPress } from '../../../src'

export const PressContext = createContext<VirtualPress>({} as VirtualPress)
