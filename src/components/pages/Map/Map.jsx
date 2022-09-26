import React, {createRef, useEffect} from 'react'
import mapboxgl from "mapbox-gl"

import {MAP} from "../../../config/consts"
import './Map.css'
import Header from "../../Header/Header"

export default function MapPage() {
    let map = null
    const refMap = createRef()

    useEffect(() => {
        if (!MAP.TEST_MODE)
            mapboxgl.accessToken = MAP.TOKEN
        map = new mapboxgl.Map({
            container: refMap.current,
            testMode: MAP.TEST_MODE,
            style: MAP.STYLE,
            zoom: MAP.ZOOM,
            center: [MAP.LNG, MAP.LAT]
        })
        return () => map.remove()
    })

    return (
        <div>
            <Header></Header>
            <div className="map" data-testid="map-element" ref={refMap}/>
        </div>
    )
}

