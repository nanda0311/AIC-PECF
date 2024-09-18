import React from 'react'
import Stats from './Stats'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {
    
  useGSAP(() => {
 
    gsap.fromTo(
        '#box-1',
        { height: "100px" },
        {
          height: '100%',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
    gsap.fromTo(
        '#box-3',
        { width: "150px" },
        {
          width: '100%',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
    gsap.fromTo(
        '#box-2',
        { width: "30%" },
        {
          width: '250px',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut'
        }
      );
  },[])

  return (
    <div className='mb-10'>
        {/* about-content  */}
        <div className='w-[85%] mx-auto  '>
            <div className='max-w-fit ml-[-30px]'>
                <h2 className='text-2xl font-semibold'>AIC-PECF</h2>
                {/* border bottom  */}
                <div className='mt-2 w-20 mx-auto h-[6px] rounded-full bg-yellow-400'></div>
            </div>
            <section className='flex justify-between w-full gap-20 mt-10'>
                {/* text-body */}
                <aside className='text-2xl w-[50%] text-gray-600 space-y-5 text-justify leading-9'>
                    <p className=' whitespace-pre-line'>
                    &nbsp;     &nbsp; AIC-Pondicherry Engineering College Foundation offers incubation facilities for early-stage startups and innovators with viable product ideas. The foundation aims to assist young entrepreneurs in launching technology-based startups by providing essential services. It supports the commercial exploitation of technologies developed by startups.
                    </p>
                    <p className=' whitespace-pre-line'>
                    &nbsp;     &nbsp; AIC-Pondicherry provides a widerange of services covering the entire spectrum of startup needs,from mentorship to infrastructure.The foundation nurtures innovation and helps transform ideas into successful enterprises. With a focus on technology, item powers startups to scale and succeed.
                    </p>
                </aside>
                <aside className='grid grid-cols-4 grid-rows-4 min-w-[50%] gap-5 overflow-hidden'>
                    <div id='box-1' className='row-span-4 bg-yellow-300'></div>
                    <div id='box-2' className='row-span-3 col-span-3 bg-yellow-300'></div>
                    <div id='box-3' className='col-span-3 col-start-2 bg-yellow-300'></div>
                </aside>
            </section>
        </div>
        <Stats/>
    </div>
  )
}

export default About