import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x:0,y:0});
    useEffect(() => {
        const mouseMove = (e)=>{
            const coors = {x:e.x,y:e.y};
           setCoords(coors);
        }
        window.addEventListener('mousemove',mouseMove);
        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!</h3>
            <h4>X:{coords.x}</h4>
            <h4>Y:{coords.y}</h4>
        </div>
    )
}
