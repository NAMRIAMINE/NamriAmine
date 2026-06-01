import { create } from 'zustand'

interface PortfolioState {
  activeSection: string
  isMobileMenuOpen: boolean
  showScrollTop: boolean

  setActiveSection: (section: string) => void
  toggleMobileMenu: () => void
  setShowScrollTop: (show: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>()((set, get) => ({
  activeSection: 'home',
  isMobileMenuOpen: false,
  showScrollTop: false,

  setActiveSection: (section) => {
    if (get().activeSection !== section) set({ activeSection: section })
  },

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),

  setShowScrollTop: (show) => {
    if (get().showScrollTop !== show) set({ showScrollTop: show })
  },
}))
