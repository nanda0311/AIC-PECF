import React from 'react'

const statsData = [
    {title : "Startups supported", count : 1000},
    {title : "Seed Fundings", count : 500},
    {title : "Startups supported", count : 500},
    {title : "Seed Fundings", count : 1000},
]

const Stats = () => {
  return (
    <div className='bg-customBlue text-white font-bold px-20 py-16 mt-16'>
        <div className='flex justify-between'>
            {
                statsData.map((item,index) => {
                    return (<div key={index}>
                     <h1 className='text-6xl'>{item.count}+</h1>
                     <h2 className='text-2xl'>{item.title}</h2>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default Stats