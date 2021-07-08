import React from 'react'
import {Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
function NewEntryForm() {
    return (
        <div>
            <Form unstackable>
        <Form.Group>
          <Form.Input 
            icon="tags"
            width={9}
            label="Description"
            placeholder='New Shinny Thing'>
          </Form.Input>
          <Form.Input 
          icon="dollar"
          iconPosition='left'
          width={4}
          placeholder="100.0"
          label="Value"
          >
          </Form.Input>
          <ButtonSaveOrCancel />
        </Form.Group>
      </Form>
        </div>
    )
}

export default NewEntryForm
