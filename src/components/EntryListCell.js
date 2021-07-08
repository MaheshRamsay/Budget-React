import React from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'

function EntryListCell({title, value, isExpense=false,}) {
    return (
          <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='center' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign= 'left'>{title}</Grid.Column>
             <Grid.Column width={3} textAlign= 'left'>{value}</Grid.Column>
             <Grid.Column width={3}>
                <Icon name ="edit" bordered></Icon>
                <Icon name ="trash" bordered></Icon>
             </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>
    )
}

export default EntryListCell
