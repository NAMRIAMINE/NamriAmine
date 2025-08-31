// app/store/usePortfolioStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface PortfolioState {
  darkMode: boolean
  activeSection: string
  isMobileMenuOpen: boolean
  showScrollTop: boolean

  toggleDarkMode: () => void
  setActiveSection: (section: string) => void
  toggleMobileMenu: () => void
  setShowScrollTop: (show: boolean) => void
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    (set, get) => ({
      darkMode: true,
      activeSection: 'home',
      isMobileMenuOpen: false,
      showScrollTop: false,

      toggleDarkMode: () => {
        const newMode = !get().darkMode
        set({ darkMode: newMode })
        if (typeof window !== 'undefined') {
          document.documentElement.classList.toggle('dark', newMode)
        }
      },

      setActiveSection: (section) => set({ activeSection: section }),

      toggleMobileMenu: () =>
        set((state) => ({
          isMobileMenuOpen: !state.isMobileMenuOpen,
        })),

      setShowScrollTop: (show) => set({ showScrollTop: show }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ darkMode: state.darkMode }),
    },
  ),
)
