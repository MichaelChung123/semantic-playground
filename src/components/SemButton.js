import React, { Component } from 'react';
import { Button, Icon, Label, Segment } from 'semantic-ui-react';

export class SemButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    };

    handleClick = () => {
        // this.setState(
        //     (prevState) => ({
        //         active: !prevState.active
        //     })
        // );

        this.setState({
            active: !this.state.active
        });
    }

    render() {

        const { active } = this.state

        return (
            <div>
                {/* ============================ Adding primary/secondary buttons ============================ */}
                <Button primary content='Primary' />
                <Button secondary content='Secondary' />

                <br></br>

                {/* ============================ Animated buttons ============================ */}
                <Button animated>
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>

                <Button animated='vertical'>
                    <Button.Content visible content="Shop"></Button.Content>
                    <Button.Content hidden>
                        <Icon name='shop' />
                    </Button.Content>
                </Button>

                <Button animated='fade'>
                    <Button.Content visible>Fade</Button.Content>
                    <Button.Content hidden>In</Button.Content>
                </Button>

                <br></br>

                {/* ============================ Like/Share icon attachment buttons ============================ */}
                <Button as='div' labelPosition='right'>
                    <Button icon>
                        <Icon name='heart' />
                        Like
                    </Button>
                    <Label as='a' basic pointing='left'>
                        2,048
                    </Label>
                </Button>

                <Button as='div' labelPosition='left'>
                    <Label as='a' basic pointing='right'>
                        6,666
                    </Label>
                    <Button icon>
                        <Icon name='fork' />
                    </Button>
                </Button>

                <br></br>

                {/* ============================ Like/Share icon attachment buttons ============================ */}
                <Button as='div' labelPosition='right'>
                    <Button icon color='blue'>
                        <Icon name='heart' />
                        Like
                    </Button>
                    <Label as='a' color='blue' basic pointing='left'>
                        2,048
                    </Label>
                </Button>

                <br></br>

                {/* ============================ Icons ============================ */}
                <Button icon>
                    <Icon name='world' />
                </Button>

                <Button icon='world' />

                <Button icon labelPosition='right'>
                    <Icon name='right arrow' />
                    Next
                </Button>

                <br></br>

                {/* ============================ Icons ============================ */}
                <Segment inverted>
                    <Button inverted color='yellow'>Standard</Button>
                </Segment>


                <Segment inverted>
                    <Button inverted basic color='red'>Red</Button>
                </Segment>

                <br></br>

                {/* ============================ Group Icons ============================ */}

                <Button.Group>
                    <Button icon>
                        <Icon name='align left' />
                    </Button>
                    <Button icon>
                        <Icon name='align center' />
                    </Button>
                    <Button icon>
                        <Icon name='align right' />
                    </Button>
                    <Button icon>
                        <Icon name='align justify' />
                    </Button>
                </Button.Group>

                {' '}

                <Button.Group>
                    <Button icon>
                        <Icon name='bold' />
                    </Button>
                    <Button icon>
                        <Icon name='underline' />
                    </Button>
                    <Button icon>
                        <Icon name='text width' />
                    </Button>
                </Button.Group>

                <br></br>

                <Button.Group>
                    <Button>Cancel</Button>
                    <Button.Or />
                    <Button positive>Save</Button>
                </Button.Group>


                <br></br>

                {/* ============================ Disabled buttons ============================ */}

                <Button active>Active</Button>
                <Button disabled>Disabled</Button>

                <br></br>

                {/* ============================ Loading buttons ============================ */}
                <Button loading>Loading</Button>
                <Button basic loading>
                    Loading
                </Button>
                <Button loading primary>
                    Loading
                </Button>
                <Button loading secondary>
                    Loading
                </Button>

                <br></br>

                {/* ============================ Social buttons ============================ */}

                <Button color='facebook'>
                    <Icon name='facebook' />
                    Facebook
                </Button>

                <br></br>

                {/* ============================ Button sizes ============================ */}
                <Button size='mini'>Mini</Button>
                <Button size='tiny'>Tiny</Button>
                <Button size='small'>Small</Button>
                <Button size='medium'>Medium</Button>
                <Button size='large'>Large</Button>
                <Button size='big'>Big</Button>
                <Button size='huge'>Huge</Button>
                <Button size='massive'>Massive</Button>

                <br></br>

                {/* ============================ Toggle buttons ============================ */}
                <Button toggle active={active} onClick={this.handleClick}>
                    Toggle
                </Button>


            </div>
        )
    }
}

export default SemButton
