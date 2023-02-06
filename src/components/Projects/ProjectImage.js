import React from 'react';
import { motion } from 'framer-motion';

const ProjectImage = (props) => {

    return (
        <div>
            {
            props.left === "false" ? 
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <motion.img 
                    whileHover={{
                        left: 0
                    }}
                    className='left-24 z-[1] relative w-50 h-40 rounded-3xl p-2 bg-white' 
                    src={props.primaryImage}
                    alt={props.primaryImageAlt} />
                    <motion.img 
                    whileHover= {{
                       scale:1.2 
                    }}
                    className=' z-[2] transition relative w-50 h-40 rounded-3xl p-2 mt-10 bg-white' 
                    src={props.secondaryImage} 
                    alt={props.secondaryImageAlt} />
                </div>
            </div> 
                : 
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <motion.img 
                    whileHover={{
                        scale:1.2
                    }}
                    className='z-[2] relative w-50 h-40 rounded-3xl p-2 bg-white' 
                    src={props.primaryImage}
                    alt={props.primaryImageAlt} />
                    <motion.img 
                    whileHover= {{
                        right: 0
                    }}
                    className='right-24 z-[1] transition relative w-50 h-40 rounded-3xl p-2 mt-10 bg-white' 
                    src={props.secondaryImage} 
                    alt={props.secondaryImageAlt}
                    />
                </div>
            </div>             
            }       
        </div>
    )
}

export default ProjectImage