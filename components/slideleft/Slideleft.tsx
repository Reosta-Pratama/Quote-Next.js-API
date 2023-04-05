"use client"
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import '../slidequote/SlideQuote.css'

const Slideleft = () => {
    const [sliders, setsliders] = useState([])
    useEffect(() => {
        async function getSliders() {
            const request = await fetch('https://api.quotable.io/quotes')
            const result = await request.json()

            setsliders(result['results'])
        }

        getSliders();
    }, []);

  return (
    <div className='absolute bottom-8 right-0 w-full h-fit'>
        <Marquee loop={0} direction='left' pauseOnHover={true} speed={5}>
            {
                sliders.map(function(slide) {
                    return(
                        <div key={slide['_id']} className='px-5'>
                            {slide['content']} ~ {slide['author']}
                        </div>
                    )
                })
            }
        </Marquee>
    </div>
  )
}

export default Slideleft