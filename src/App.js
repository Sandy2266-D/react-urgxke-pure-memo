import React from 'react';
import './style.css';
import Counter from '../Counter';
import CounterFunction from '../CounterFunction';
import { Button } from 'reactstrap';

export default function App() {
  const [name, setName] = React.useState('Sandy');
  return (
    <div>
      <h1> Pure React Funactional Component</h1>
      <Button color="primary" onClick={() => setName('Sandy')}>
        {' '}
        Change
      </Button>
      <CounterFunction name={name} />
    </div>
  );
}
