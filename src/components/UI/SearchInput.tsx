import React, { PropsWithChildren } from 'react';

export class SearchInput extends React.Component {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  // handleChange = (event) => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // You can perform your search logic here using this.state.searchTerm
  //   console.log('Performing search with query:', this.state.searchTerm);
  // };
  public async request(e: { preventDefault: () => void }) {
    e.preventDefault();
    const request: Response = await fetch('https://swapi.dev/api/people/');
    const requestJSON = await request.json();
    console.log(requestJSON.results);
  }

  render() {
    return (
      <form>
        {/* onSubmit={this.handleSubmit} */}
        <input
          type="text"
          className="search-input"
          // value={this.state.searchTerm}
          // onChange={this.handleChange}
          placeholder="Enter search query"
        />
        <button onClick={this.request} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default <link>SearchInput</link>;
