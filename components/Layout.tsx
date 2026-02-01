// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'


// interface LayoutProps {
//   children: React.ReactNode
// }

// export default function Layout({ children }: LayoutProps) {
//   const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing')
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       const newScrollY = window.scrollY
//       setScrollY(newScrollY)
      
//       // Shoji Door trigger - switch to dashboard view after scrolling past hero
//       if (newScrollY > window.innerHeight * 0.8 && currentView === 'landing') {
//         setCurrentView('dashboard')
//       } else if (newScrollY <= window.innerHeight * 0.3 && currentView === 'dashboard') {
//         setCurrentView('landing')
//       }
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [currentView])

//   return (
//     <div className="relative min-h-screen">
     
      
//       <AnimatePresence mode="wait">
//         {currentView === 'landing' && (
//           <motion.div
//             key="landing"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.5 }}
//             className="relative z-10"
//           >
//             {children}
            
//             {/* Product Pillars - Only in landing view */}
//             <div className="absolute top-20 right-8 flex flex-col gap-4 z-20">
//               {[1, 2, 3, 4].map((num) => (
//                 <motion.div
//                   key={num}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0 }}
//                   transition={{ delay: num * 0.1 }}
//                   className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-semibold border border-white/30"
//                 >
//                   {num}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
        
//         {currentView === 'dashboard' && (
//           <motion.div
//             key="dashboard"
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="relative z-50 min-h-screen bg-white"
//           >
//             <div className="p-8">
//               <h1 className="text-2xl font-bold mb-4">Dashboard View</h1>
//               <p className="text-gray-600">This is the dashboard interface - no pillars here!</p>
              
//               {/* Dashboard content */}
//               <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-gray-100 p-6 rounded-lg">
//                   <h3 className="font-semibold mb-2">Analytics</h3>
//                   <p className="text-sm text-gray-600">View your data insights</p>
//                 </div>
//                 <div className="bg-gray-100 p-6 rounded-lg">
//                   <h3 className="font-semibold mb-2">Reports</h3>
//                   <p className="text-sm text-gray-600">Generate custom reports</p>
//                 </div>
//                 <div className="bg-gray-100 p-6 rounded-lg">
//                   <h3 className="font-semibold mb-2">Settings</h3>
//                   <p className="text-sm text-gray-600">Configure your preferences</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
