import React, { Component } from "react";
import {Map,InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {


handleMarkerClick(props,marker,e,item){
	this.props.handleMarkerClick(props,marker,e,item)
}
  render() {

    return (
      <Map google={this.props.google} 
      	   initialCenter={{
            lat: 51.221720,
            lng: 6.776160
          }}
      	   zoom={9}
      	   >
 
       	{this.props.points.map((item)=><Marker  
       		    onClick={(props,marker,e)=>this.handleMarkerClick(props,marker,e,item)} 
       			key={item.lat}
		       	title={item.title}
		       	name={'SOMA'}
		        position={{lat: item.lat, lng: item.lng }}
		        />
       )}
    
     
  		<InfoWindow 
       		marker={this.props.activeMarker}
			visible={this.props.locationInfo ? true : false}
       		>
             <div>
		 	    {this.props.locationInfo && 
		 	    	<div>
		 	    	<h4>{this.props.locationInfo.pointer.title}</h4>
		 	    	<p>Address: {this.props.locationInfo.pointer.title}</p>
					</div>
		 	    }

		     </div>		

     	 </InfoWindow>
 

      </Map>
    );
  }
} 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAuzKrZrw3HuX-HdzqK-brJUWUpGbUoiow')
})(MapContainer)


