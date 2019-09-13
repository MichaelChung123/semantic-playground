import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'

const cards = [
    {
        date: 'Joined in 2013',
        header: 'Helen',
        description: 'Primary Contact'
    },
    {
        date: 'Joined in 1994',
        header: 'Michael',
        description: 'Primary Contact'
    },
    {
        date: 'Joined in 2019',
        header: 'Jamie',
        description: 'Secondary Contact'
    }
]

export class SemPlaceHolder extends Component {

    state = {
        loading: false
    }

    handleLoadingClick = () => {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <Fragment>
                    <Button loading={this.state.loading} onClick={this.handleLoadingClick} primary>
                        Simulate Loading
                    </Button>

                    <Divider />

                    <Card.Group doubling stackable>
                        {_.map(cards, (card) => (
                            <Card key={card.header}>

                                {this.state.loading ? (
                                    <Placeholder>
                                        <Placeholder.Image square />
                                    </Placeholder>
                                ) : (
                                        <Image src={card.avatar} />
                                    )}


                                <Card.Content>
                                    {this.state.loading ? (
                                        <Placeholder>
                                            <Placeholder.Header>
                                                <Placeholder.Line length='very short' />
                                                <Placeholder.Line length='medium' />
                                            </Placeholder.Header>
                                            <Placeholder.Paragraph>
                                                <Placeholder.Line length='short' />
                                            </Placeholder.Paragraph>
                                        </Placeholder>
                                    ) : (
                                            <Fragment>
                                                <Card.Header>{card.header}</Card.Header>
                                                <Card.Meta>{card.date}</Card.Meta>
                                                <Card.Description>{card.description}</Card.Description>
                                            </Fragment>
                                    )}
                                </Card.Content>

                                <Card.Content extra>
                                    <Button primary>
                                        Add
                                    </Button>
                                    <Button>
                                        Delete
                                    </Button>
                                </Card.Content>

                            </Card>
                        ))}
                    </Card.Group>

                </Fragment>
            </div>
        )
    }
}

export default SemPlaceHolder
