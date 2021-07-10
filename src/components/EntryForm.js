import React from 'react'
import {Form, Segment, Checkbox} from 'semantic-ui-react';

function EntryForm({title, amount, isExpense, setTitle, setAmount, setIsExpense}) {
    return (
        <>
        <Form.Group>
          <Form.Input 
            icon="tags"
            width={12}
            label="Description"
            placeholder='New Shinny Thing'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            >
          </Form.Input>
          <Form.Input 
          icon="dollar"
          iconPosition='left'
          width={4}
          placeholder="100.0"
          label="Value"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          >
          </Form.Input>
        </Form.Group>
        <Form.Group>
          <Segment compact style={{marginLeft: 10}}>
            <Checkbox 
            toggle 
            label='is expense'
            checked={isExpense}
            onChange={() => setIsExpense((oldState => !oldState))}
            ></Checkbox>
        </Segment>
         </Form.Group>
    </>
    )
}

export default EntryForm
