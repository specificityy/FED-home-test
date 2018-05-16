import React from 'react';

import './carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const children = this.props.children;
    return (<ul className='carousel'>
      {React.Children.map(children, (child, i) => <li>{child}</li>)}
      </ul>);
  }
}

export default Carousel;
