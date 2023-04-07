import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
/* react package that displays markdown text
 * NOTE - need to have react-markdown installed 
 * for this to work: do npm install react-markdown
 */
import Markdown from 'markdown-to-jsx';
import syllabusMD from '../../Syllabus.md';

class Syllabus extends React.Component {
  constructor(props) {
    super(props)
    this.state = { md: "" }
  }

  componentWillMount() {
    fetch(syllabusMD)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md })
      })
  }

  render() {
    let { md } = this.state

    return (
      <div className="post">
        <Markdown children={md}/>
      </div>
    )
  }
}

export default Syllabus;