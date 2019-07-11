import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import './index.css';

import Header from "./components/header/Header"
import Attributes from './components/attributes/Attributes';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home' 
        }
    }

    onChangeLinkName(newName) {
        this.setState( {
            homeLink: newName
        })
    }

    render() {
        return(
            <Container maxWidth="lg">
                <Header homeLink={this.state.homeLink} />
                <Attributes initialAttributePoints="24"/>
            </Container>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));