import React from 'react'
import { useState, useEffect } from 'react'
import SkillData from '../../../skill-api'
import SkillCard from './SkillCard'

const Skills = () => {

    return (
        <section className="bg-white dark:bg-gray-800 mb-10">
            <div className='flex flex-wrap bg-[#F1F1F1] dark:bg-gray-900'>
                {

                    SkillData.map((item) => (
                        <SkillCard
                            key={item.id}
                            name={item.name}
                            url={item.url}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Skills