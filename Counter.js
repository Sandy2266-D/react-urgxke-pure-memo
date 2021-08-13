import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

export default class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: { name: 'Guvi' }
    };
  }
  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });
  change = () => this.setState({ user: { name: 'Guvi' } });

  render() {
    console.log('rendered');
    return (
      <div>
        <hr />
        <h1>Counter Application</h1>
        <h4>Diplay Counter Value={this.state.count}</h4>
        <p>Name={this.props.name}</p>
        <Button color="primary" onClick={this.increment}>
          Increment
        </Button>
        <br />
        <br />
        <Button color="secondary" onClick={this.decrement}>
          Decrement
        </Button>
        <br />
        <br />
        <Button color="danger" onClick={this.reset}>
          Reset
        </Button>
        <br />
        <br />
        <Button color="success" onClick={this.change}>
          Change
        </Button>
      </div>
    );
  }
}
