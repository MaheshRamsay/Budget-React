import React from 'react'
import {Statistic} from 'semantic-ui-react'

function DisplayBalance({ title, value, size, color, alignment="left"}) {
    return (
        <div>
              <Statistic size = {size} color= {color}>
                  <Statistic.Label style={{textAlign:{alignment}}}>{title}:</Statistic.Label>
                  <Statistic.Value ST>{value}</Statistic.Value>
             </Statistic>
        </div>
    )
}

export default DisplayBalance
