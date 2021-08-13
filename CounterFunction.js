import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function CounterFunction(props) {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  console.log('rendered');
  return (
    <div>
      <hr />
      <h1>Counter Application</h1>
      <br />
      <h4>Diplay Counter Value={count}</h4>
      <p>{props.name}</p>
      <Button color="primary" onClick={increment}>
        Increment
      </Button>
      <br />
      <br />
      <Button color="secondary" onClick={decrement}>
        Decrement
      </Button>
      <br />
      <br />
      <Button color="danger" onClick={reset}>
        Reset
      </Button>
    </div>
  );
}

export default React.memo(CounterFunction);
