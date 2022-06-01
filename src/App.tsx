import React, { useState } from 'react';
import Accordion from './components/accordion/accordion';
import Input from './components/input/input';

function App() {
  const [header, setHeader] = useState<string | undefined>('Default Header')
  const [content, setContent] = useState<string | undefined>('Default Content')
  return (
    <div>
      <Input setHeader={setHeader} setContent={setContent}/>
      <Accordion title={header}>
        <div>{content}</div>
      </Accordion>
    </div>
  );
}

export default App;
