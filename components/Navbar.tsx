'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navOpacity = Math.max(0.3, 1 - scrollY / 500)

  const IterateIcon = ({ size, duration = 10, isHovered, className = "" }: { size: number; duration?: number; isHovered: boolean; className?: string }) => {
    return (
      <div 
        className={`relative x-10 flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute x-2 inset-0 z-20 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-light text-[#0F1F10]">+</span>
        </div>
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHovered
              ? { repeat: Infinity, duration: duration, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full text-[#0F1F10]"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.2"
          >
            <path
              d="m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute inset-0 scale-[0.65]"
          animate={isHovered ? { rotate: -360 } : { rotate: 0 }}
          transition={
            isHovered
              ? { repeat: Infinity, duration: duration * 1.5, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full text-[#0F1F10]"
            stroke="currentColor"
            fill="none"
            strokeWidth="1.2"
          >
            <path
              d="m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>
      </div>
    );
  };

  const EvaluateIcon = ({ size, duration = 10, isHovered, className = "" }: { size: number; duration?: number; isHovered: boolean; className?: string }) => {
    return (
      <div 
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-light text-[#0F1F10]">+</span>
        </div>
        <motion.div 
          className="absolute inset-0"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHovered 
              ? { repeat: Infinity, duration, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
        >
          <svg viewBox="0 0 64 64" className="w-full h-full text-[#0F1F10]" stroke="currentColor" fill="none" strokeWidth="1">
             <circle cx="32" cy="32" r="24" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>
    );
  };

  const DeployIcon = ({ size, duration = 10, isHovered, className = "" }: { size: number; duration?: number; isHovered: boolean; className?: string }) => {
    return (
      <div 
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-light text-[#0F1F10]">+</span>
        </div>
        <motion.div 
          className="absolute inset-0"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHovered 
              ? { repeat: Infinity, duration, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
        >
          <svg viewBox="0 0 64 64" className="w-full h-full text-[#0F1F10]" stroke="currentColor" fill="none" strokeWidth="1">
            <path d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>
    );
  };

  const MonitorIcon = ({ size, duration = 10, isHovered, className = "" }: { size: number; duration?: number; isHovered: boolean; className?: string }) => {
    return (
      <div 
        className={`relative flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <span className="text-lg font-light text-[#0F1F10]">+</span>
        </div>
        <motion.div 
          className="absolute inset-0"
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isHovered 
              ? { repeat: Infinity, duration, ease: "linear" }
              : { duration: 0.8, ease: "easeOut" }
          }
        >
          <svg viewBox="0 0 64 64" className="w-full h-full text-[#0F1F10]" stroke="currentColor" fill="none" strokeWidth="1">
             <circle cx="32" cy="32" r="20" vectorEffect="non-scaling-stroke" />
             <circle cx="32" cy="32" r="24" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
          </svg>
        </motion.div>
      </div>
    );
  };

  const PRODUCTS_ITEMS = [
    { id: 'iterate', title: 'Iterate', sub: 'Sketch, test and refine', links: ['Editor', 'Playground', 'Datasets'] },
    { id: 'evaluate', title: 'Evaluate', sub: 'Reflect and measure', links: ['Evaluations', 'Datasets'] },
    { id: 'deploy', title: 'Deploy', sub: 'From draft to live', links: ['Deployments', 'Analytics', 'Gateway'] },
    { id: 'monitor', title: 'Monitor', sub: 'Insights in real time', links: ['Logs', 'Analytics'] },
  ];

  return (
    <div className="relative" style={{ '--nav-z-index': 9999 } as React.CSSProperties}>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto sticky top-0 right-0 left-0 h-0 z-[var(--nav-z-index)]" 
        style={{ opacity: navOpacity }}
      >
        <div className="h-[var(--nav-height)] relative shadow-[0_1px_0_0_transparent] transition-shadow duration-200" style={{ opacity: 1 }}>
          <div className="absolute inset-0 z-[9999] flex flex-row items-center justify-between px-grid-margin">
            
            {/* Desktop Navigation - Left Side */}
            <div className="hidden lg:flex items-center gap-8">
              <div 
                className="flex items-center gap-1 p-1 relative"
                onMouseLeave={() => setHoveredTab(null)}
              >
                <LayoutGroup id="nav">
                  {['PRODUCTS', 'PRICING', 'BLOG'].map((link) => (
                    <div
                      key={link}
                      className="relative px-6 py-2.5 cursor-pointer flex items-center justify-center"
                      onMouseEnter={() => setHoveredTab(link)}
                    >
                      <span className={`relative z-10 text-[12px] font-bold tracking-tight transition-colors duration-300 flex items-center gap-1 ${
                        hoveredTab === link ? 'text-black' : 'text-black/40'
                      }`}>
                        {link}
                        {link === 'PRODUCTS' && (
                          <motion.svg 
                            className="w-3 h-3" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ rotate: hoveredTab === 'PRODUCTS' ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        )}
                      </span>

                      {hoveredTab === link && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute "
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </div>
                  ))}
                </LayoutGroup>
              </div>

              {/* MEGA DROPDOWN PANEL */}
              <AnimatePresence>
                {hoveredTab === 'PRODUCTS' && (
                <div
                  className="absolute top-0 left-0 right-0 overflow-hidden z-[100]"
                  style={{ height: '80vh' }}
                  onMouseEnter={() => setHoveredTab('PRODUCTS')}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ type: "spring", stiffness: 90, damping: 18, mass:0.8 }}
                    onMouseEnter={() => setHoveredTab('PRODUCTS')}
                    onMouseLeave={() => setHoveredTab(null)}
                    className="absolute top-0 left-0 right-0 bg-white pt-[140px] pb-24 px-32 pointer-events-auto overflow-hidden z-[900]"
                  >
                    <div className="max-w-6xl mx-auto grid grid-cols-4 gap-16">
                      {PRODUCTS_ITEMS.map((item, idx) => {
                        const isHovered = hoveredPillar === item.id;
                        const IconComponent = [IterateIcon, EvaluateIcon, DeployIcon, MonitorIcon][idx];
                        
                        return (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 + 0.35, duration: 0.6 }}
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredPillar(item.id)}
                            onMouseLeave={() => setHoveredPillar(null)}
                          >
                            <div className="relative h-48 mb-6 w-full">
                              <div className="absolute left-0 top-4">
                                <div className="absolute left-0 top-10 z-10">
                                  <IconComponent isHovered={isHovered} size={85} duration={14} />
                                </div>
                                <div className="absolute left-2 top-0 opacity-90">
                                  <IconComponent isHovered={isHovered} size={55} duration={10} />
                                </div>
                                <div className="absolute left-16 top-4 opacity-90">
                                  <IconComponent isHovered={isHovered} size={60} duration={12} />
                                </div>
                                <div className="absolute left-[88px] top-[52px] opacity-80">
                                  <IconComponent isHovered={isHovered} size={40} duration={9} />
                                </div>
                              </div>

                              <div className="absolute left-[150px] top-2 flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D4F598] text-[#0F1F10] font-medium text-sm">
                                  {idx + 1}
                                </div>
                                <span className="text-xs font-semibold tracking-widest uppercase text-[#0F1F10]/80">
                                  {item.title}
                                </span>
                              </div>
                            </div>
                            
                            <div className="space-y-6">
                              <h3 className="text-xs font-bold tracking-widest uppercase opacity-60">{item.title}</h3>
                              <h2 className="text-4xl font-normal leading-[1.1] tracking-tight text-[#0F1F10]">
                                {item.sub}
                              </h2>
                              <ul className="space-y-2 text-sm font-medium text-[#0F1F10]/80">
                                {item.links.map((link) => (
                                  <li key={link} className="cursor-pointer hover:text-[#0F1F10] hover:underline">
                                    {link} {link === 'Gateway' && '↗'}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>  

            {/* Logo - Center on Desktop */}
             <div className="absolute left-1/2 -translate-x-1/2 z-[1100] pointer-events-auto">
              <a href="/">
                <svg width="200" height="24" viewBox="0 0 84 15" fill="currentColor">
                  <path d="M9.15.003.451 12.124v1.733h1.74l8.698-6.928V.003zM10.89 11.777H8.801v2.078h2.087zM39.034.67v5.113h-.036C38.52 5.034 37.472 4.5 36.301 4.5c-2.413 0-4.099 1.906-4.099 4.81 0 2.601 1.562 4.775 4.135 4.775 1.029 0 2.218-.517 2.697-1.425h.035l.089 1.193h1.349V.67zM36.46 12.73c-1.739 0-2.715-1.497-2.715-3.439 0-1.977.976-3.474 2.715-3.474 1.757 0 2.59 1.515 2.59 3.474 0 1.925-.887 3.439-2.59 3.439m13.396-.196V7.742c0-.516-.088-1.015-.283-1.443-.409-.98-1.491-1.8-3.248-1.8-1.916 0-3.584 1.052-3.655 2.887h1.473c.089-1.122 1.1-1.639 2.182-1.639 1.225 0 2.023.606 2.023 1.853v.66l-2.821.195c-2.395.16-3.265 1.568-3.265 2.94 0 1.265.976 2.69 3.159 2.69 1.348 0 2.43-.588 2.98-1.497h.036l.16 1.265h2.218v-1.318zm-1.508-2.53c0 1.586-1.082 2.762-2.697 2.762-1.295 0-1.828-.73-1.828-1.515 0-1.122.994-1.568 1.988-1.639l2.537-.178zM70.263 4.5c-1.1 0-2.414.57-2.857 1.621h-.036l-.106-1.39h-1.33v9.122h1.525v-4.24c0-.766.035-1.657.337-2.334.408-.82 1.189-1.39 2.094-1.39C71.31 5.89 72 6.78 72 8.189v5.665h1.509V7.974c0-2.174-1.225-3.474-3.248-3.474m13.236 5.22c0-.018.036-.25.036-.57 0-2.459-1.384-4.65-4.117-4.65-2.715 0-4.258 2.298-4.258 4.828 0 2.298 1.366 4.757 4.223 4.757 2.058 0 3.637-1.23 3.921-2.975h-1.526c-.302 1.104-1.136 1.621-2.342 1.621-1.721 0-2.715-1.514-2.715-2.922V9.72zM79.4 5.8c1.668 0 2.467 1.283 2.502 2.637h-5.128C76.81 7.101 77.857 5.8 79.4 5.8m-23.74 6.735V.669h-3.301v1.265h1.74v10.601h-1.882v1.318h5.359v-1.318zm6.813 0V4.732h-3.282V6.05h1.72v6.485H58.96v1.318h5.483v-1.318zM64.407.669h-1.934v1.907h1.934zM26.134 8.847l.107-.16h2.714V3.128L21.361 13.89h-1.916v-.036L28.885.67h1.738v13.22h-1.668V9.987h-2.82z" />
                </svg>
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="watch-demo-btn inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[20px] cursor-pointer transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shrink-0 h-8 px-3.5 gap-2 bg-transparent border border-pebble-200 hover:opacity-70 disabled:border-pebble-200 disabled:bg-transparent disabled:text-pebble-300 ring-offset-meadow-50 focus-visible:ring-meadow-700 pl-5 max-xs:hidden !bg-pebble-50"
                >
                  WATCH DEMO
                  <div className="-mr-2.5 ml-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pebble-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="text-meadow-900">
                      <path d="M7 7.396c0-1.432 0-2.148.3-2.548a1.5 1.5 0 0 1 1.093-.597c.498-.035 1.1.352 2.305 1.126l7.162 4.604c1.045.672 1.567 1.008 1.748 1.435a1.5 1.5 0 0 1 0 1.168c-.18.427-.703.763-1.748 1.435l-7.162 4.604c-1.205.774-1.807 1.161-2.305 1.126A1.5 1.5 0 0 1 7.3 19.15C7 18.751 7 18.036 7 16.604z"></path>
                    </svg>
                  </div>
                </button>
                {isDemoOpen && (
                  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50" onClick={() => setIsDemoOpen(false)}>
                    <div className="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 relative">
                      <button 
                        onClick={() => setIsDemoOpen(false)}
                        className="absolute top-4 right-4 text-pebble-500 hover:text-pebble-700 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <video 
                        src="/assets/product-demo.mp4" 
                        controls 
                        autoPlay
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
              <a 
                className="start-free-btn inline-flex items-center text-white justify-center gap-3 whitespace-nowrap rounded-[20px] cursor-pointer transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shrink-0 h-8 px-3.5 gap-2 bg-green-950 hover:bg-green-900 disabled:bg-pebble-100 disabled:text-pebble-400 ring-offset-meadow-50 focus-visible:ring-meadow-700" 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://app.adaline.ai/sign-up?utm_source=adaline.ai"
              >
                START FOR FREE
              </a>
              
              {/* Mobile Menu Toggle - Hidden on Desktop */}
              <button 
                className="-mr-3 flex size-12 cursor-pointer items-center justify-center lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div 
            aria-hidden="true" 
            className="overflow-clip shadow-[0_1px_0_0_transparent] transition-shadow duration-200 lg:hidden" 
            style={{ height: isMenuOpen ? 'auto' : '0px' }}
          >
            {isMenuOpen && (
              <div className="bg-pebble-50 px-grid-margin flex flex-col py-4 pt-[var(--nav-height)]">
                <div className="flex flex-col gap-4 py-2">
                  <div className="nav-link py-2">
                    <a href="/products">Products</a>
                  </div>
                  <div className="nav-link py-2">
                    <a href="/pricing">Pricing</a>
                  </div>
                  <div className="nav-link py-2">
                    <a href="/blog">Blog</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.nav>
      <div className="bg-meadow-950/20 fixed top-0 right-0 bottom-0 left-0 z-[calc(var(--nav-z-index)-2)] pointer-events-none" style={{ opacity: isMenuOpen ? 1 : 0 }}></div>
    </div>
  )
}
