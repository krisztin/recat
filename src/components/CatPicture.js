import React from 'react';

class CatPicture extends React.Component {
  render() {
    const { image, name } = this.props.data;

    return (
      <figure className="cat-pic">
        <img src={image} alt={name} />
      </figure>
    );
  }
}

export default CatPicture;
