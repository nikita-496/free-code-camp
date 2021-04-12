import React, { Component } from "react";
import Container from "../node_modules/react-bootstrap/Container";
import Col from "../node_modules/react-bootstrap/Col";

let marked = require("marked")

class App extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                input: ''
            };
        this.handleChange = this.handleChange.bind(this)
    }
        
    handleChange (event) {
        this.setState ({
            input: event.target.value
        })
    }

    render() {
        let { input } = this.state

        return(
            <div>
            
                <Container>
                    <h2 className = " mb-4 text-center"> Convert Markdown to HTML </h2>
                    
                    
                        <Col md = {{span : 6, offset : 3}} className = "mb-5" >
                            <div className="editorWrap">
                                <div className = "toolbar">
                                    <h6 className = "name">Markdown output</h6>
                                </div>
                                <textarea value = {input}  onChange = {this.handleChange}  id = "editor" placeholder ="Enter your markdown"/>
                            </div>
                        
                        </Col>

                        <Col md = { {span : 10, offset : 1} }>
                            <div className="previewWrap">
                                <div className = "toolbar">
                                <h5 className = "name"> HTML input </h5>
                                </div>
                            <div  id = "preview" style = {{ backgroundColor: '#C0D8D8FF'}} dangerouslySetInnerHTML={{__html: marked(input, {breaks: true}) }}/> 
                            </div>
                        </Col>
                    
                </Container>
            </div>
        );
    }
}

export default App