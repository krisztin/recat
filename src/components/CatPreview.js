import React from 'react';
import CatPicture from './CatPicture'

class CatPreview extends React.Component {
  render() {
    return (
      <div className="cat-card">
        <CatPicture/>
      </div>
    )
  }
}

export default CatPreview;