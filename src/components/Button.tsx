import { Component } from 'react';

interface ButtonProps {
  handleClick: () => Promise<void>;
  type: 'button';
}
export default class Button extends Component<ButtonProps> {
  render() {
    const { type } = this.props;
    return (
      <button onClick={this.props.handleClick} type={type}>
        Search
      </button>
    );
  }
}
