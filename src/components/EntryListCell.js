import React, { Fragment } from 'react'
import {Segment, Grid, Icon} from 'semantic-ui-react'

function EntryListCell(
   
        {
         id,
         title,
         value, 
         isExpense=false,
         deleteEntry,
         editEntry,
         }
         ) {
           
    return (
        <>
        <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='center' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign= 'left'>{title}</Grid.Column>
             <Grid.Column width={3} textAlign= 'left'>$ {value}</Grid.Column>
             <Grid.Column width={3}>
                <Icon name ="edit" bordered onClick={() => editEntry(id)}></Icon>
                <Icon name ="trash" bordered onClick={() => deleteEntry(id)}></Icon>
             </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>
      </>
    )
}

export default EntryListCell
