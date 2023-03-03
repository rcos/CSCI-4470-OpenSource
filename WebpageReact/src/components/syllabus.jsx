import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

class Syllabus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { syllabusText: '' };
  }

  //reading in syllabus.md once component is mounted
  componentDidMount() {
    fetch('syllabus_copy.md')
      .then(response => response.text())
      .then(text => this.setState({ syllabusText: text }));
  }

  render() {
    const { syllabusText } = this.state;
    return (
      <ReactMarkdown source={syllabusText} />
    );
  }
}

export default Syllabus;