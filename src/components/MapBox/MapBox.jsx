import React, {createRef, useEffect} from 'react'
import mapboxgl from "mapbox-gl";
import '../pages/Map/Map.css'
import {MAP} from "../../config/consts";
import {useSelector} from "react-redux";
import {selectCoordinates} from "../../redux/selectors";


export default function MapBox() {
    const coords = useSelector(selectCoordinates)
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

        if (coords.length !== 0) {
            map.on('load', () => {
                map.flyTo({
                    center: coords[0],
                    zoom: 15
                });

                map.addLayer({
                    id: "route",
                    type: "line",
                    source: {
                        type: "geojson",
                        data: {
                            type: "Feature",
                            properties: {},
                            geometry: {
                                type: "LineString",
                                coordinates: coords
                            }
                        }
                    },
                    layout: {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    paint: {
                        "line-color": "#ffc617",
                        "line-width": 8
                    }
                })
            })
        }
        return () => map.remove()
    }, [coords])

    return <div className="map" data-testid="map-element" ref={refMap}/>
}