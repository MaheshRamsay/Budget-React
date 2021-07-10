import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import EntryForm from '../components/EntryForm'
function EditExpenseModal({isOpen, setModal, title, amount, isExpense, setTitle, setAmount, setIsExpense}) {
    return (
        <Modal open={isOpen}>
        <Modal.Header>Edit Entry</Modal.Header>
         <Modal.Content>
         {/* <Modal.Description>
         Something here
         </Modal.Description> */}
         <EntryForm  
            title={title}
            amount={amount}
            isExpense={isExpense}
            setTitle={setTitle}
            setAmount={setAmount}
            setIsExpense={setIsExpense}
            ></EntryForm>
         </Modal.Content>
         <Modal.Actions>
            <Button
            onClick={()=> setModal(false)}>Close</Button>
            <Button
            onClick={() => setModal(false)} primary>Update</Button>
         </Modal.Actions>
        
        </Modal>

    )
}

export default EditExpenseModal
