import { create } from 'zustand'

interface PortfolioState {
  activeSection: string
  isMobileMenuOpen: boolean
  showScrollTop: boolean

  setActiveSection: (section: string) => void
  setMobileMenuOpen: (open: boolean) => void
  setShowScrollTop: (show: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>()((set, get) => ({
  activeSection: 'home',
  isMobileMenuOpen: false,
  showScrollTop: false,

  setActiveSection: (section) => {
    if (get().activeSection !== section) set({ activeSection: section })
  },

  setMobileMenuOpen: (open) => {
    if (get().isMobileMenuOpen !== open) set({ isMobileMenuOpen: open })
  },

  setShowScrollTop: (show) => {
    if (get().showScrollTop !== show) set({ showScrollTop: show })
  },
}))
