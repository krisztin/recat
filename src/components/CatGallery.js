import React from 'react';
import CatPreview from './CatPreview';

class CatGallery extends React.Component {
  render() {
    return (
      <div className="grid">
      {/* {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)} */}
        <CatPreview />
      </div>
    )
  }
}

export default CatGallery;