'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  const images = Array.from({ length: 281 }, (_, i) => 
    `/assets/high/graded_4K_100_gm_85_1440_3-${String(i + 1).padStart(3, '0')}.jpg`
  )

  useEffect(() => {
    if (!isOpen) return

    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)
      
      const scrollProgress = newScrollY / (document.body.scrollHeight - window.innerHeight)
      const imageIndex = Math.floor(scrollProgress * (images.length - 1))
      setCurrentImageIndex(Math.min(imageIndex, images.length - 1))
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen, images.length])

  const PRODUCTS_ITEMS = [
    { id: 'iterate', title: 'Iterate', sub: 'Sketch, test and refine', links: ['Editor', 'Playground', 'Datasets'] },
    { id: 'evaluate', title: 'Evaluate', sub: 'Reflect and measure', links: ['Evaluations', 'Datasets'] },
    { id: 'deploy', title: 'Deploy', sub: 'From draft to live', links: ['Deployments', 'Analytics', 'Gateway'] },
    { id: 'monitor', title: 'Monitor', sub: 'Insights in real time', links: ['Logs', 'Analytics'] },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9998] lg:hidden" onClick={onClose}>
      <div className="absolute inset-0 z-0">
        <img 
          src={images[currentImageIndex]} 
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-100"
        />
      </div>

      <div className="relative z-10 bg-pebble-50/95 backdrop-blur-sm h-full overflow-y-auto pt-[var(--nav-height)]" onClick={(e) => e.stopPropagation()}>
        <div className="px-grid-margin flex flex-col py-4" style={{ fontFamily: '"fragmentMono", "fragmentMono Fallback", fragmentMono, SFMono-Regular, SF Mono, JetBrains Mono, Fira Code, Cascadia Code, Source Code Pro, ui-monospace, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace' }}>
          <div className="flex flex-col gap-4 py-2">
            <div className="nav-link py-2">
              <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex items-center justify-between w-full text-left font-bold text-[12px] tracking-tight">
                <span>PRODUCT</span>
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-6 mt-4 pt-4 border-t border-pebble-200">
                      {PRODUCTS_ITEMS.map((item, idx) => (
                        <div key={item.id} className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                              <div className="relative flex items-center justify-center" style={{ width: 40, height: 40 }}>
                                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                  <span className="text-sm font-light text-[#0F1F10]">+</span>
                                </div>
                                <svg viewBox="0 0 64 64" className="w-full h-full text-[#0F1F10]" stroke="currentColor" fill="none" strokeWidth="1">
                                  <circle cx="32" cy="32" r="24" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                                </svg>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D4F598] text-[#0F1F10] font-medium text-xs">
                                  {idx + 1}
                                </div>
                                <span className="text-xs font-semibold tracking-widest uppercase text-[#0F1F10]/80">
                                  {item.title}
                                </span>
                              </div>
                              <h3 className="text-sm font-normal mt-1 text-[#0F1F10]">
                                {item.sub}
                              </h3>
                            </div>
                          </div>
                          <ul className="space-y-1 text-xs font-medium text-[#0F1F10]/80 pl-12">
                            {item.links.map((link) => (
                              <li key={link} className="cursor-pointer hover:text-[#0F1F10]">
                                {link} {link === 'Gateway' && '↗'}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="nav-link py-2">
              <a href="/pricing" className="font-bold text-[12px] tracking-tight">PRICING</a>
            </div>
            <div className="nav-link py-2">
              <a href="/blog" className="font-bold text-[12px] tracking-tight">BLOG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
