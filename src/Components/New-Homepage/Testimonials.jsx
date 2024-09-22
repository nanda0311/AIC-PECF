import React from 'react'

const Testimonials = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto mb-20 ">
        <div className="max-w-fit ml-[-30px] mt-10">
          <h2 className="text-2xl font-semibold">HEAR FROM OUR FOUNDERS</h2>
          {/* border bottom  */}
          <div
            id="border-bottom"
            className="mt-2 w-52 mx-auto h-[6px] rounded-full bg-customBlue"
          ></div>
        </div>
        <section className='flex justify-between  mt-14'>
            <div className='rounded-full overflow-hidden bg-customBlue w-80 h-80'></div>
            <div className='flex-col flex justify-between bg-slate-100 p-10 rounded-md w-[50vw] relative'>
                <p className='text-xl text-justify'>
                AIC-PECF has been instrumental in our startup journey. The support we have received, including expert mentorship, crucial resources, and valuable networking opportunities, has been vital for our product development. Their dedication continues to play a key role as we advance in our development process.
                </p>
                <div className='gap-5 text-center font-medium text-lg'>
                    <h4>Mr.Vishnu Vardhan</h4>
                    <h4>Atal Incbation Center,PECF</h4>
                </div>
                <div className='min-w-7 min-h-7 bg-slate-100 absolute top-[50%] -left-3 rotate-45'></div>
            </div>
        </section>
      </div>
    </div>
  )
}

export default Testimonials