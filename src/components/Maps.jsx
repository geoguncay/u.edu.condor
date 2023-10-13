import { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Maps extends Component {
	render() {
		const defaultProps = {
			center: {
				lat: -3.167826,
				lng: -78.258425,
			},
			zoom: 11,
		};

		class AnyReactComponent extends Component {
			handleClick = () => {
				console.log('Marker clicked');
			};
			render() {
				return <div onClick={this.handleClick}>{this.props.text}</div>;
			}
		}

		return (
			<div style={{ height: '20vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: '' }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<AnyReactComponent
						lat={-3.167826}
						lng={-78.258425}
						text='Unidad Educativa Cordillera del Condor'
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default Maps;
