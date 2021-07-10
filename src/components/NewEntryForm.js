import React from 'react'
import {Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'
function NewEntryForm({addEntry, title, amount, isExpense, setTitle, setAmount, setIsExpense}) {


    return (
        <>
        <Form unstackable>
            <EntryForm 
            title={title}
            amount={amount}
            isExpense={isExpense}
            setTitle={setTitle}
            setAmount={setAmount}
            setIsExpense={setIsExpense}
            ></EntryForm>
            <ButtonSaveOrCancel addEntry={addEntry} title={title} amount={amount} isExpense={isExpense}/>
        </Form>
        </>
    )
}

export default NewEntryForm
