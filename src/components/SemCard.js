import React, { Component } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

export class SemCard extends Component {
    
    render() {
        const items = [
            {
                header: 'Project Report - April',
                description:
                    'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
                meta: 'ROI: 30%',
            },
            {
                header: 'Project Report - May',
                description:
                    'Bring to the table win-win survival strategies to ensure proactive domination.',
                meta: 'ROI: 34%',
            },
            {
                header: 'Project Report - June',
                description:
                    'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
                meta: 'ROI: 27%',
            },
        ]
        
        return (
            <div>
                <Card.Group items={items} />
            </div>
        )
    }
}

export default SemCard
