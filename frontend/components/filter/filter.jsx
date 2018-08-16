import React from 'react';
import { withRouter } from 'react-router-dom';
import {  } from '../../actions/filter_actions';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  toggleFilter (filter) {
    const {receiveFilter, filters, removeFilter} = this.props;
    
    return (e) => {
      return filters[filter] === true ? removeFilter(filter) : receiveFilter(filter);
    }
  }

  togCapacityFilter (cap) {
    const {filters, receiveCapacityFilter, removeCapacityFilter} = this.props;
    
    return (e) => {
      return filters['maxCapacity'] === cap ? removeCapacityFilter(cap) : receiveCapacityFilter(cap);
    }
  }

  togPriceFilter (price) {
    const {filters, receivePriceFilter, removePriceFilter } = this.props;

    return (e) => {
      return filters['price'] ? removePriceFilter(price) : receivePriceFilter(price);    
    }
  }
  
  render() {
    // const { filters } = this.props;

    return (
      <div className="filters-container">
        <h2 className="filter-header">Amenities</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('camping')}
              checked={this.props.filters['camping'] === true}
              // onChange={}
            />
            <label>Camping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('glamping')}
              checked={this.props.filters['glamping'] === true}
              // onChange={function () { }}
            />
            <label>Glamping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('petFriendly')}
              checked={this.props.filters['petFriendly'] === true}
              // onChange={function () { }}
            />
            <label>Pet Friendly</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('showers')}
              checked={this.props.filters['showers'] === true}
              // onChange={function () { }}
            />
            <label>Showers</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('toilets')}
              checked={this.props.filters['toilets'] === true}
              // onChange={function () { }}
            />
            <label>Toilets</label>
         </li>
         <h2 className="filter-header">Pricing</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(50)}
              checked={this.props.filters['maxPrice'] === 50}
              // onChange={function () { }}
            />
            <label>Under $50</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(75)}
              checked={this.props.filters['maxPrice'] === 75}
              // onChange={function () { }}
            />
            <label>Under $75</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(75)}
              checked={this.props.filters['maxPrice'] === 125}
              onChange={function () { }}
            />
            <label>Under $125</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(75)}
              checked={this.props.filters['maxPrice'] === 175}
              // onChange={function () { }}
            />
            <label>Under $175</label>
         </li>
         <h2 className="filter-header">Group Size</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(5)}
              checked={this.props.filters['maxCapacity'] === 5}
              onChange={function () { }}
            />
            <label>5 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(10)}
              checked={this.props.filters['maxCapacity'] === 10}
              // onChange={function () { }}
            />
            <label>10 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(15)}
              checked={this.props.filters['maxCapacity'] === 15}
              onChange={function () { }}
            />
            <label>15 or more</label>
         </li>
         <button className="clear-filters" onClick={() => this.props.clearFilters()}>Clear Filters</button>
      </div>
    );
  }
}

export default withRouter(Filter);