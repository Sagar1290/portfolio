import React from 'react'
import Image from 'next/image'

const SkillCard = (props) => {
    return (
        <div className='skill-card w-40 h-48 lg:w-48 lg:h-48 lg:m-auto hover:shadow-2xl' data-aos="zoom-in" >
            <div>
                <Image
                    src={props.url}
                    width={100}
                    height={100}
                    alt="pic of skill logo"
                    className='img'
                />
            </div>
            <h2 className='text-sm lg:text-xl'>{props.name}</h2>
        </div>
    )
}

export default SkillCard