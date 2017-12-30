import { h } from 'preact';
import Profile from '../../src/components/home/profile';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

const list = profile.profile.bio;

test( 'check if Profile is rendering h3', () => {
	const actual = shallow( <Profile title="Test!" /> );
	expect( actual.find( 'h3' ).text() ).toBe( 'Test!' );
} );


