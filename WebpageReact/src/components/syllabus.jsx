import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
//reading text in from syllabus.md and passing it into reactmarkdown
var fs = require('fs');
const syl = fs.readFile('syllabus_copy.md', 'utf8');
ReactDOM.render(
  <ReactMarkdown
    components={{ h1: 'h2'}}
    children={syl}
  >
  </ReactMarkdown>,
  document.querySelector('#content')
)
