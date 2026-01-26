import React from 'react';
import * as motion from 'motion/react-client'
import { Heading } from '@radix-ui/themes';

const CallToAction = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <Heading
                size="6"
                weight="bold"
                className='text-white leading-8 font-novecento-sans'
            >
                Let's turn your ideas into reality
            </Heading>
        </motion.div>
    );
};

export default CallToAction;
