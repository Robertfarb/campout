import React from 'react';
import { withRouter } from 'react-router-dom';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props
  }

  toggleFilter (type) {
    con
  }

  toggleCapFilter(cap) {

  }

  togglePriceFilter (price) {

  }
  
  
  render() {
    return (
      <div className="filters-container">
        <h2 className="filter-header">Amenities</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['camping'] === true}
              // onChange={function () { }}
            />
            <label>Camping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['glamping'] === true}
              // onChange={function () { }}
            />
            <label>Glamping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['petFriendly'] === true}
              // onChange={function () { }}
            />
            <label>Pet Friendly</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['showers'] === true}
              onChange={function () { }}
            />
            <label>Showers</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['toilets'] === true}
              onChange={function () { }}
            />
            <label>Toilets</label>
         </li>
         <h2 className="filter-header">Pricing</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxPrice'] === 50}
              onChange={function () { }}
            />
            <label>Under $50</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxPrice'] === 75}
              onChange={function () { }}
            />
            <label>Under $75</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxPrice'] === 125}
              onChange={function () { }}
            />
            <label>Under $125</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxPrice'] === 175}
              onChange={function () { }}
            />
            <label>Under $175</label>
         </li>
         <h2 className="filter-header">Group Size</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxCapacity'] === 5}
              onChange={function () { }}
            />
            <label>5 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxCapacity'] === 5}
              onChange={function () { }}
            />
            <label>10 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              //onClick={ToggleBoolean(camping)}
              checked={this.props.filters['maxCapacity'] === 5}
              onChange={function () { }}
            />
            <label>15 or more</label>
         </li>
      </div>
    );
  }
}

export default withRouter(Filter);