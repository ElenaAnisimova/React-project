import React, { Component } from 'react';

type SearchItemProps = {
  info: string;
  name: string;
};

export class SearchItem extends Component<SearchItemProps> {
  constructor(props: SearchItemProps) {
    super(props);
    this.state = {
      name: '',
      info: '',
    };
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.info}</div>
      </div>
    );
  }
}

// import React, { ChangeEvent, FormEvent } from 'react';

// interface SearchInputProps {
//   onSearch: (query: string) => void;
// }

// interface SearchInputState {
//   searchTerm: string;
// }

// class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
//   constructor(props: SearchInputProps) {
//     super(props);
//     this.state = {
//       searchTerm: '',
//     };
//   }

//   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     this.setState({ searchTerm: event.target.value });
//   };

//   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // Call the onSearch prop with the current search term
//     this.props.onSearch(this.state.searchTerm);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.searchTerm}
//           onChange={this.handleChange}
//           placeholder="Enter search query"
//         />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }
// }

// export default SearchInput;
