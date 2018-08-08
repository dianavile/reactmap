import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* global google */

//module.exports = React.createClass({ })

class App extends Component {

 /* state = {
    locations: [],
    filteredLocations: [],
    showInfoWindow: false,
    clickedMarker: {},
    selectedPlace: {},
    animation: 0,
    error: false,
    menuOpen: true,
    searchQuery: ""
  };*/

 /* componentDidMount: function() {
    window.initMap = this.initMap;
    loadJS('https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap')
},*/

 /*
  initMap: function() {
  map = new google.maps.Map(this.refs.map.getDOMNode(), { ... });
},*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
     /*<div ref="map" style="height: '500px', width: '500px'"> <⁄div>*/
      );
    }
  }
  
  /*function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
        var script = window.document.createElement("script");
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    }*/

    export default App;
    
    //copyright: https://www.klaasnotfound.com/2016/11/06/making-google-maps-work-with-react/
    //refactor to ES6
