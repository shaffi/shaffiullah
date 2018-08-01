import { h, Component } from 'preact';

export default class Profile extends Component {
	render( props ) {
		let bioList = [];
		if ( props.bio && props.bio.list ) {
			const bioLabels = props.bio.list.map( item => <li key={item.label}><strong>{item.label}</strong></li> ),
				bioValues = props.bio.list.map( item => <li key={item.value}>{item.value}</li> );

			bioList = bioLabels.reduce( ( list, item, i ) => {
				list.push( item, bioValues[ i ] );
				return list;
			}, [] );
		}
		let descriptions;
		if (props.about.description.length) {
			descriptions = props.about.description.map(desc => <p>{desc}</p> );
		}
		let techdescriptions;
		if (props.summary.description.length) {
			techdescriptions = props.summary.description.map(desc => <li>{desc}</li> );
		}
		return (
			<main class="main profile" style={{ backgroundColor: props.background_color || null }}>
				<div class="main-wrapper">
					<div class="main-wrapper-text">
						<h3>{props.title}</h3>
					</div>
					<div class="divider" />
					<div class="summary">
						{props.about && <h5>{props.about.title}</h5>}
						{ descriptions }
					</div>
					<div class="divider" />
					<div class="summary tech-summary">
					{props.summary && <h5>{props.summary.title}</h5>}
					<ul>
					{ techdescriptions }
					</ul>
				</div>
				</div>
			</main>
		);
	}
}
