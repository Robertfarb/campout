import React from 'react';
import { withRouter } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchParams: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.getLatLong = this.getLatLong.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.receiveGeolocation(e.target.children[0].value)
    this.props.history.push("/discover")
  }

  render() {
      return (
        <div className="search-bar-container">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.update('searchParams')}
              value={this.state['searchParams']}
            />
          </form>
        </div>
      );
  }
}

export default withRouter(Search)
