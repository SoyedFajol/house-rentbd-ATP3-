import SectionHeading from '@/components/Helper/SectionHeading'
import { propertiesTypeData } from '@/data/data'
import React from 'react'
import PropertyCard from './PropertyCard'

const properties = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
        <div className="w-[80%] mx-auto">
            <SectionHeading heading="Discover Our Properties" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20
        gap-8 items-center">
                {propertiesTypeData.map((proprty)=>{
                return <div key={proprty.id}>
                    <PropertyCard property={proprty} />
                </div>
                })}
            </div>

        </div>
        
    </div>
  )
}

export default properties