import React from 'react'
import {Segment, Grid} from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'
function BalanceSegment() {
    return (
       
           <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                  <DisplayBalance 
                  title="INCOME"
                 value="2,5500.0"
                  size = "tiny"
                  color = "green" />
                </Grid.Column>
                 <Grid.Column>
                    <DisplayBalance 
                  title="EXPENSES"
                 value="700"
                  size = "tiny"
                  color = "red" />
                </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment> 
    )
}

export default BalanceSegment
