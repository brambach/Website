"use client"
import React, { useEffect, useState } from 'react'

const createSpaceDebris = () => ({
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
});

const SpaceDebrisBackground = () => {

    const [debris, setSpaceDebris] = useState([])

    useEffect(() => {

        const addSpaceDebrisPeriodically = () => {
            const newSpaceDebris = createSpaceDebris();
            setSpaceDebris(currentSpaceDebris =>
            [
                ...currentSpaceDebris.slice(-50),
                newSpaceDebris
            ]
            );
        };

        const interval = setInterval(addSpaceDebrisPeriodically, 500);

        return () => clearInterval(interval);

    }, []);


    return (
        <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
            {
                debris.map((spacedebris) => {
                    return <div key={spacedebris.id}
                        className='absolute rounded-full w-[6px] h-[6px] bg-debris-radial'
                        style={{
                            top: spacedebris.top,
                            left: spacedebris.left,
                            animation: `move ${spacedebris.animationDuration} infinite alternate`
                        }}>
                    </div>
                })
            }
        </div>
    )
}

export default SpaceDebrisBackground