import React from 'react'
import {Button} from 'semantic-ui-react';
function ButtonSaveOrCancel() {
    return (
        <div>
          <Button.Group style={{marginLeft: 5, marginTop: 20}}>
           <Button>Cancel</Button>
           <Button.Or />
           <Button primary>Update</Button>
        </Button.Group>
        </div>
    )
}

export default ButtonSaveOrCancel
