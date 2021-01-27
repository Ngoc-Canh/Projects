import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'


const App = () => {
  return (
    <ReactMarkdown sourcePos># Hello, *world*!</ReactMarkdown>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
