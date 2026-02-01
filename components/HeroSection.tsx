'use client'

import { useState, useEffect, useRef } from 'react'

const companyLogos = [
  { name: 'Coframe', width: 100 },
  { name: 'Daybreak', width: 110 },
  { name: 'McKinsey & Company', width: 160 },
  { name: 'Serif', width: 80 },
  { name: 'Statflo', width: 90 },
  { name: 'Reforge', width: 100 },
  { name: 'Symbolic.ai', width: 120 },
  { name: 'Doordash', width: 110 },
  { name: 'HubSpot', width: 100 },
  { name: 'SalesForce', width: 100 },
  { name: 'Crush & lovely', width: 100 },
  { name: '15five', width: 100 },
  { name: 'JusBrasil', width: 100 },
  { name: 'Giift', width: 100 },
  { name: 'Discord', width: 90 }
]

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideoOverlay, setShowVideoOverlay] = useState(false)
  const [shuffledLogos, setShuffledLogos] = useState(companyLogos)
  const videoRef = useRef<HTMLVideoElement>(null)

  const shuffleArray = (array: typeof companyLogos) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    setShuffledLogos(shuffleArray(companyLogos))
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  const images = [
    ...Array.from({ length: 28 }, (_, i) => `/assets/standard/${String(i + 1).padStart(2, '0')}.jpg`),
    ...Array.from({ length: 252 }, (_, i) => `/assets/standard/graded_4K_100_gm_50_1080_3-${String(i + 30).padStart(3, '0')}.jpg`)
  ]

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)
      
      const scrollProgress = newScrollY / (document.body.scrollHeight - window.innerHeight)
      const imageIndex = Math.floor(scrollProgress * (images.length - 1))
      setCurrentImageIndex(Math.min(imageIndex, images.length - 1))
      
      if (imageIndex >= 235) {
        setShowVideoOverlay(true)
      } else {
        setShowVideoOverlay(false)
        setIsVideoPlaying(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [images.length])

  const fadeClass = scrollY > 100 ? 'atlas-fade' : ''
  const fadeStartImage = 69
  const fadeEndImage = 91
  const titleOpacity = currentImageIndex < fadeStartImage ? 1 : currentImageIndex > fadeEndImage ? 0 : 1 - ((currentImageIndex - fadeStartImage) / (fadeEndImage - fadeStartImage))
  const cloudProgress = currentImageIndex < fadeStartImage ? 0 : currentImageIndex > fadeEndImage ? 1 : (currentImageIndex - fadeStartImage) / (fadeEndImage - fadeStartImage)

  return (
    <section className="bg-pebble-50 relative">
      <div className="fixed inset-0 z-0">
        <img 
          src={images[currentImageIndex]} 
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-100 gpu-accelerated"
        />
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${showVideoOverlay ? 'opacity-100 scale-100 ease-out' : 'opacity-0 scale-75 ease-in pointer-events-none'}`} style={{ width: '80%', maxWidth: '800px', aspectRatio: '16/9' }}>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/assets/product-demo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <div className="relative z-20 origin-bottom md:-mb-[50vh]" style={{ height: '6000px', borderRadius: '0px', opacity: 1 }}>
          <div className="absolute top-0 bottom-0 w-full">
            <div 
              className="sticky top-[25vh] z-20 flex w-full -translate-y-1/4 flex-col items-center gap-6 text-center text-balance md:top-[22vh] md:gap-10" 
              style={{ 
                opacity: titleOpacity
              }}
            >
              {currentImageIndex >= fadeStartImage && (
                <div 
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  style={{
                    opacity: cloudProgress,
                  }}
                >
                  <div
                    className="w-[200%] h-full"
                    style={{
                      backgroundImage: 'url(/assets/footer-clouds.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: `translate(${-50 + cloudProgress * 50}%, 0)`,
                    }}
                  />
                </div>
              )}
              <h1 className={`atlas-web-lg mx-[var(--grid-margin)] max-w-[32ch] text-black md:text-[min(53px,min(calc(2.5vh+25px),calc(1.5vw+25px)))] md:leading-[calc(52/53)] md:tracking-[-0.04em] ${fadeClass}`}>
                <span>The single platform to iterate, evaluate, deploy, and monitor AI agents</span>
              </h1>
              
              <div className="max-w-full md:w-full">
                <div className="flex flex-col items-center overflow-hidden">
                  <p className={`atlas-web-mono text-black/70 mb-4 ${fadeClass}`}>Trusted by</p>
                  <div className="w-full max-w-6xl">
                    <div 
                      className="flex h-16 items-center overflow-hidden" 
                      style={{ 
                        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                      }}
                    >
                      <div className="flex items-center gap-12 animate-scroll">
                        {shuffledLogos.map((company, index) => (
                          <div 
                            key={`first-${index}`}
                            className="flex items-center justify-center text-black/60 hover:text-black transition-colors duration-300 flex-shrink-0"
                            style={{ width: `${company.width}px`, height: '40px' }}
                          >
                            <div className="text-sm font-medium">{company.name}</div>
                          </div>
                        ))}
                        {shuffledLogos.map((company, index) => (
                          <div 
                            key={`second-${index}`}
                            className="flex items-center justify-center text-black/60 hover:text-black transition-colors duration-300 flex-shrink-0"
                            style={{ width: `${company.width}px`, height: '40px' }}
                          >
                            <div className="text-sm font-medium">{company.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
