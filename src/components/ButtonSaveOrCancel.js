import React from 'react'
import {Button} from 'semantic-ui-react';
function ButtonSaveOrCancel({ addEntry, title, amount, isExpense }) {
    return (
        <div>
          <Button.Group style={{marginLeft: 15, marginTop: 2, height: 47}}>
           <Button>Cancel</Button>
           <Button.Or />
           <Button primary onClick={() => addEntry(title, amount, isExpense)}>Update</Button>
        </Button.Group>
        </div>
    )
}

export default ButtonSaveOrCancel
