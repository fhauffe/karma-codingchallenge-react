import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Attributes extends React.Component {
    constructor(props) {
        super();
        this.state = {
            attributePoints: parseInt(props.initialAttributePoints),
            body: 0,
            agility: 0,
            reaction: 0,
            strength: 0,
            willpower: 0,
            logic: 0,
            intuition: 0,
            charisma: 0
        }
    }

    increaseBody() {
        if(this.state.attributePoints > 0) {
            this.setState({
                attributePoints: this.state.attributePoints - 1,
                body: this.state.body + 1
            });
        }
    }
        

    decreaseBody() {
        if(this.state.attributePoints < 24 && this.state.body > 0) {
            this.setState({
                attributePoints: this.state.attributePoints + 1,
                body: this.state.body - 1
            });
        }
    }

    increaseAgility() {
        if(this.state.attributePoints > 0) {
            this.setState({
                attributePoints: this.state.attributePoints - 1,
                agility: this.state.agility + 1
            });
        }
    }

    decreaseAgility() {
        if(this.state.attributePoints < 24 && this.state.agility > 0) {
            this.setState({
                attributePoints: this.state.attributePoints + 1,
                agility: this.state.agility - 1
            });
        }
    }

    increaseReaction() {
        if(this.state.attributePoints > 0) {
            this.setState({
                attributePoints: this.state.attributePoints - 1,
                reaction: this.state.reaction + 1
            });
        }
    }

    decreaseReaction() {
        if(this.state.attributePoints < 24 && this.state.reaction > 0) {
            this.setState({
                attributePoints: this.state.attributePoints + 1,
                reaction: this.state.reaction - 1
            });
        }
    }

    render() {
        return (
            <Container>
                <Typography variant="H1">Verbleibende Punkte: {this.state.attributePoints}</Typography>
                    <Box>
                        <Typography variant="p">Konstitution: {this.state.body}</Typography><Button  onClick={this.increaseBody.bind(this)}>+</Button><Button  onClick={this.decreaseBody.bind(this)}>-</Button>
                    </Box>
                    <Box>
                        <Typography variant="p">Geschicklichkeit: {this.state.agility}</Typography><Button  onClick={this.increaseAgility.bind(this)}>+</Button><Button  onClick={this.decreaseAgility.bind(this)}>-</Button>
                    </Box>
                    <Box>
                        <Typography variant="p">Reaktion: {this.state.reaction}</Typography><Button  onClick={this.increaseReaction.bind(this)}>+</Button><Button  onClick={this.decreaseReaction.bind(this)}>-</Button>
                    </Box>
          </Container>
        );
    }
}

export default Attributes;