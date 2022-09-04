import React, {Component} from 'react'
import mapboxgl from "mapbox-gl"

import '../../styles/Map.css';

class MapPage extends Component {
    map = {}
    refMap = React.createRef()

    componentDidMount() {
        this.map = new mapboxgl.Map({
            accessToken:"pk.eyJ1IjoibGluazc4OSIsImEiOiJjbDdrYzUxZGcxNm5vM29zYXlndXNza2g1In0.dKqR1J5GxcghpGebPdpD1Q",
            container: this.refMap.current,
            style: 'mapbox://styles/mapbox/streets-v9'
        })
    }

    componentWillUnmount() {
        this.map.remove()
    }

    render() {
        return <div className="map" ref={this.refMap}/>
    }
}

export default MapPage;

