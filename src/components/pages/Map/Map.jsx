import React, {Component} from 'react'
import mapboxgl from "mapbox-gl"

import {LAT, LNG, mapAccessToken, mapStyleAddress, mapTestMode, mapZoom} from "../../../Constants";
import './Map.css';

class MapPage extends Component {
    map = null
    refMap = React.createRef()

    componentDidMount() {
        if (!mapTestMode)
            mapboxgl.accessToken = mapAccessToken
        this.map = new mapboxgl.Map({
            container: this.refMap.current,
            testMode: mapTestMode,
            style: mapStyleAddress,
            zoom: mapZoom,
            center: [LNG, LAT]
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div className="map" data-testid="map-element" ref={this.refMap}/>
    }
}

export default MapPage;

