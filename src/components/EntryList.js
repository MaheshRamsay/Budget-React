import React from 'react'
import EntryListCell from './EntryListCell'
import {Container} from 'semantic-ui-react';
function EntryList({entries, deleteEntry, editEntry}) {
    return (
        <Container>
       {entries.map((entry) => (
              <EntryListCell 
              key={entry.id} {... entry}
            //   entry={entry}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
            //   title={entry.title} 
            //   value={entry.value} 
            //   isExpense={entry.isExpense} 
            />
      ))}
      </Container>
    )
}

export default EntryList
