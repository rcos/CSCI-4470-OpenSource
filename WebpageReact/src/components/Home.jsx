import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactMarkdown from 'react-markdown'

//react component for displaying a copy of readme.md as the home page
//similar to how it was before we were using react
class Home extends React.component{
    constructor(props){
        super(props);
        this.state = { readme_md: ''};
    }
    componentDidMount(){
        fetch('readme_copy.md')
        .then(response => response.text())
        .then(text => this.setState({readme_md : text}));
    }
    render(){
        const {readme_md} = this.state;
        return(
            <ReactMarkdown source = {readme_md}/>
        );
    }
}