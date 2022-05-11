import {
	blackIdentity,
	blackTextColor,
	grayIdentity,
	orangeIdentity,
	purpleIdentity,
	whiteIdentity,
} from './colors';

const theme = {
	colors: {
		purple: purpleIdentity,
		text: blackTextColor,
		orange: orangeIdentity,
		black: blackIdentity,
		gray: grayIdentity,
		white: whiteIdentity,
	},
	fonts: {
		title: 'Poppins, sans serif',
		text: 'Poppins, sans serif',
		size: {
			sm: '16px',
			sm2: '20px',
			md: '25px',
			lg: '49px',
		},
	},
	// gradients: {
	// 	title:
	// 		'linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)',
	// 	primary: 'linear-gradient(to right, #8e2de2, #4a00e0)',
	// 	secondary1: 'linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)',
	// },
	// Breakpoints for responsive design
	breakpoints: {
		sm: 'screen and (max-width: 640px)',
		md: 'screen and (max-width: 768px)',
		lg: 'screen and (max-width: 1024px)',
		xl: 'screen and (max-width: 1280px)',
	},
};

export default theme;
