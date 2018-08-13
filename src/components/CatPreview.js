import React from 'react';
import CatPicture from './CatPicture';

class CatPreview extends React.Component {
  render() {
    const { name, age, excerpt } = this.props.data;

    return (
      <div className="cat-card">
        <CatPicture data={this.props.data}/>
        <span className="meta-name">{name}, </span>
        <span>{age}</span>
        <p>{excerpt}</p>
      </div>
    )
  }
}

export default CatPreview;