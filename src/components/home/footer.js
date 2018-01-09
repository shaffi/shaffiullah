import { h, Component } from 'preact';

import FaIcon from '../icon';
const cvtext ="Download My CV";

class FooterItem extends Component {
	render( { label, link, icon_class } ) {
		return (
			<div class="footer-link">
				<a href={link} target="_blank" rel="noopener noreferrer"><FaIcon icon={icon_class} /> {label}</a>
			</div>
		);
	}
}

export default class Footer extends Component {
	render( props ) {
		return (
			<footer class="footer" style={{ backgroundColor: props.background_color || null }}>
				<div class="footer-wrapper">
					<div class="footer-wrapper-text">
						<h3>{props.title}</h3>
					</div>
					<div class="divider" />
					{props.list && props.list.map( item => <FooterItem {...item} /> )}
					<div class="divider" />					
					<a href="https://www.dropbox.com/s/qe48vd9mkcs9vvu/shaffiullahresume.pdf?dl=0" class="button large"> {cvtext}</a>
					
				</div>
			</footer>
		);
	}
}
