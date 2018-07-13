import { h, Component } from 'preact';
import FaIcon from '../icon';

class FooterItem extends Component {
  render({ label, link, icon_class }) {
    return (
      <div class="social-link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaIcon icon={icon_class} /> {label}
        </a>
      </div>
    );
  }
}
const requireAll = requireContext => requireContext.keys().map(requireContext);
const social = [
  {
    label: 'GitHub',
    link: 'https://github.com/shaffi',
    icon_class: 'github'
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/shaffiullah',
    icon_class: 'twitter'
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/shaffiullah/',
    icon_class: 'linkedin'
  },
  {
    label: 'Email',
    link: 'mailto:mailforshaffi@gmail.com',
    icon_class: 'envelope'
  },
];
export const viewSize = () => {
  const viewport =
      typeof window !== 'undefined'
        ? window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
        : 1920,
    ratio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  return { viewport: viewport, ratio: ratio };
};

export const chooseBackgroundImages = (
  backgroundImages,
  imageModules,
  { viewport = 1920, ratio = 1 }
) => {
  let headerImage,
    imagesSized = backgroundImages.reduce((arr, image, i) => {
      if (viewport * ratio < image.width) {
        image.filename = imageModules[i];
        arr.push(image);
      }

      return arr;
    }, []);
  if (imagesSized.length) {
    const lastImage = imagesSized.pop();
    if (lastImage && lastImage.filename) {
      headerImage = lastImage.filename;
    }
  } else {
    headerImage = imageModules[0];
  }

  return headerImage;
};
const determineImage = (backgroundImage, backgroundImages) => {
  let headerImage;
  if (backgroundImages) {
    const imageModules = requireAll(
      require.context('../../assets/header', false)
    );
    headerImage = chooseBackgroundImages(backgroundImages, imageModules, {
      ...viewSize()
    });
  } else {
    headerImage = require(`../../assets/header/${backgroundImage}`);
  }

  if (headerImage) {
    return `url(${headerImage})`;
  }
};

export default class Header extends Component {
  constructor(props) {
    super();

    this.state.background_image = 'http://res.cloudinary.com/shaffiullah-in/image/upload/s--MHfAhwog--/c_imagga_crop/v1522672289/shaffi11.jpg'

  }

  render(props, { background_image }) {
    return (
      <header
        class="header"
        style={{
          backgroundColor: props.background_color || null
        }}
      >
        <div class="header-wrapper">
          <div class="header-wrapper-text">
            <h1 class="title" itemprop="name">
              {props.title}
            </h1>
            <h2 class="subtitle" itemprop="jobTitle">
			  {props.subtitle}
            </h2>
		  </div>
		  <div class="social">		
		  {social && social.map( item => <FooterItem {...item} /> )}
		  </div>
		  
		  </div>
      </header>
    );
  }
}
