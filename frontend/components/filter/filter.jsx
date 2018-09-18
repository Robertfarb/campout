import React from 'react';
import { withRouter } from 'react-router-dom';
import {  } from '../../actions/filter_actions';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  componentWillUnmount () {
    this.props.clearFilters();
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
      return filters['maxPrice'] === price ? removePriceFilter(price) : receivePriceFilter(price);    
    }
  }
  
  render() {
    return (
      <div className="filters-container">
        <h2 className="filter-header">Amenities</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('camping')}
              checked={this.props.filters['camping'] === true}
              onChange={() => {}}
              id="camping"
            />
          <label htmlFor="camping"><span></span>Camping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('glamping' )}
              checked={this.props.filters['glamping'] === true}
              onChange={() => {}}
              id="glamping"
            />
          <label htmlFor="glamping"><span></span>Glamping</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('petFriendly')}
              checked={this.props.filters['petFriendly'] === true}
              onChange={() => {}}
              id="pet"
            />
          <label htmlFor="pet"><span></span>Pet Friendly</label>
          </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('showers')}
              checked={this.props.filters['showers'] === true}
              onChange={() => {}}
              id="shower"
            />
          <label htmlFor="shower"><span></span>Showers</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.toggleFilter('toilets')}
              checked={this.props.filters['toilets'] === true}
              onChange={() => {}}
              id="toilet"
            />
          <label htmlFor="toilet"><span></span>Toilets</label>
         </li>
         <h2 className="filter-header">Pricing</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(50)}
              checked={this.props.filters['maxPrice'] === 50}
              onChange={() => {}}
              id="50"
            />
          <label htmlFor="50"><span></span>Under $50</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(75)}
              checked={this.props.filters['maxPrice'] === 75}
              onChange={() => {}}
              id="75"
            />
          <label htmlFor="75"><span></span>Under $75</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(125)}
              checked={this.props.filters['maxPrice'] === 125}
              onChange={() => {}}
              id="125"
            />
          <label htmlFor="125"><span></span>Under $125</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togPriceFilter(175)}
              checked={this.props.filters['maxPrice'] === 175}
              onChange={() => {}}
              id="175"
            />
          <label htmlFor="175"><span></span>Under $175</label>
         </li>
         <h2 className="filter-header">Group Size</h2>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(5)}
              checked={this.props.filters['maxCapacity'] === 5}
              onChange={() => {}}
              id="5"
            />
          <label htmlFor="5"><span></span>5 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(10)}
              checked={this.props.filters['maxCapacity'] === 10}
              onChange={() => {}}
              id="10"
            />
          <label htmlFor="10"><span></span>10 or more</label>
         </li>
          <li>
            <input
              type='checkbox'
              className="radio-input"
              onClick={this.togCapacityFilter(15)}
              checked={this.props.filters['maxCapacity'] === 15}
              onChange={() => {}}
              id="15"
            />
          <label htmlFor="15"><span></span>15 or more</label>
         </li>
         <button className="clear-filters" onClick={() => this.props.clearFilters()}>Clear Filters</button>
      </div>
    );
  }
}

export default withRouter(Filter);