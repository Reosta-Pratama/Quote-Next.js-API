"use client"
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import './SlideQuote.css'

const SlideQuote = () => {
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
    <div className='absolute top-8 left-0 w-full h-fit'>
        <Marquee loop={0} direction='right' pauseOnHover={true} speed={5}>
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

export default SlideQuote