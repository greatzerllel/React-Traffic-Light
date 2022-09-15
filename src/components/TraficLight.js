import React, { useState } from 'react';

export function TraficLight() {
    const [selectedColor, setSelectedColor] = useState("red");
    return (

        <div className='traficLight'>
            <div className='traficLightTop'>
            </div>
            <div className='traficLightBox'>
                <div onClick={() => setSelectedColor("red")} className={'traficLightCircle red ' + (selectedColor === "red" ? "glowR" : "")}>
                </div>
                <div onClick={() => setSelectedColor("yellow")} className={'traficLightCircle yellow ' + (selectedColor === "yellow" ? "glowY" : "")}>
                </div>
                <div onClick={() => setSelectedColor("green")} className={'traficLightCircle green ' + (selectedColor === "green" ? "glowG" : "")}>
                </div>
            </div>
        </div>

    )
}


