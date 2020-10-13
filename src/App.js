import React from 'react';
import './App.scss';
import Button from 'react-bulma-components/lib/components/button';
import { Field, Control, Input} from 'react-bulma-components/lib/components/form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Search for your classes
        </p>
        
        <Field className="has-addons">
          <Control>
            <Input/>
          </Control>
          <Control>
            <Button className="is-info">Go</Button>
          </Control>
        </Field>
      </header>
    </div>
  );
}

export default App;
