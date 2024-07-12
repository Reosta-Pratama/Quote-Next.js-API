"use client"
import React from 'react'
import './Quote.css'
import useSWR from 'swr'

const fetcher = (url : string) => fetch(url).then(res => res.json())

const Quote = () => {
    const {data: quotes, isLoading: quoteLoading, error: quoteError, mutate: quoteGenerate} = useSWR(
        'https://dummyjson.com/quotes/random',
        fetcher
    )

    if (quoteError) 
        return <div>failed to load</div>
    if (quoteLoading) 
        return (
            <div>
                <div className="loader book">
                    <figure className="page"></figure>
                    <figure className="page"></figure>
                    <figure className="page"></figure>
                </div>

                <h1 className='reading'>Reading</h1>
            </div>
        )

    return (
        <section className='quote relative'>
            <div className="container mx-auto xl:max-w-screen-xl py-10">
                <div className="grid grid-cols-4 gap-4">
                    <div className='flex items-center col-span-3'>
                        <div>
                            <div key={quotes.id} 
                                    className="getQuote">
                                <h2>{quotes.quote}</h2>
                                <p>{quotes.author}</p>
                            </div>

                            <button className='update' type='button' onClick={quoteGenerate}>
                                <span>Generate</span>
                                <i className='bx bx-arrow-to-right bx-fade-right ml-2'></i>
                            </button>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='absolute -top-10 -left-20 opacity-10 -z-10'>
                            <img className='dash' src="./img/icon/blob-dashed-light.svg" alt=""/>
                        </div>

                        <div className='absolute -bottom-10 -right-20 opacity-10 -z-10'>
                            <img className='dash' src="./img/icon/blob-dashed-light.svg" alt=""/>
                        </div>

                        <div className="image relative z-10">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote