import {useState, useEffect} from 'react';
import './App.css';
import {Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import BalanceSegment from './components/BalanceSegment'
import EntryList from './components/EntryList'
import EditExpenseModal from './components/EditExpenseModal'

function App() {
  const [entries, setEntries] = useState(initialEntries)
  
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpense, setIsExpense] = useState(true);
    const [modal, setModal] = useState(false);
    const [entryId, setEntryId] = useState();
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [balance, setTotalBalance] = useState(0);
    useEffect(() => {
      if (!modal && entryId) {
        const index = entries.findIndex(entry=> entry.id)
        const newEntries = [...entries];
        newEntries[index].title = title
        newEntries[index].value = amount
        newEntries[index].isExpense = isExpense
        setEntries(newEntries);
        resetEntry();
      }
    }, [modal]);

    useEffect(() => {
      let totalIncome = 0
      let totalExpense = 0

      entries.map(entry => {
        if(entry.isExpense) {
          return (totalExpense += Number(entry.value))
        } else {
          return (totalIncome += Number(entry.value))
        }
      })
        setTotalBalance(totalIncome-totalExpense);
        setExpenseTotal(totalExpense)
        setIncomeTotal(totalIncome)
     
    }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result)
  }

  function addEntry(title, amount, isExpense) {
    const result = entries.concat({
      id: entries.length+1, 
      title: title, 
      value: amount,
      isExpense: isExpense
      });
      setEntries(result);
      resetEntry();
  }


  function editEntry(id) {
    console.log(`edit entry ${id}`)
    if (id) {
      const index = entries.findIndex(entries=> entries.id === id)
      const entry = entries[index];
      setEntryId(id)
      setTitle(entry.title)
      setAmount(entry.value)
      setIsExpense(entry.isExpense)
      setModal(true);
      // resetEntry();
    }
  }

  function resetEntry() {
    setTitle('');
    setAmount('');
    setIsExpense(true);
  }
  return (
    <Container>
      <MainHeader fontType='h1' title="Budget"></MainHeader>
      <DisplayBalance 
      title="Your Balance"
      value={balance}
      size = "small"
      color = "black" />
       <BalanceSegment incomeTotal={incomeTotal} expenseTotal={expenseTotal}/>
        <MainHeader fontType='h3' title="History"></MainHeader>
        
        <EntryList 
           entries={entries} 
           deleteEntry={deleteEntry}
           editEntry={editEntry}>
         </EntryList>

     
     <MainHeader fontType='h3' title="Add New Transaction"></MainHeader>
      <NewEntryForm 
            addEntry={addEntry} 
            title={title}
            amount={amount}
            isExpense={isExpense}
            setTitle={setTitle}
            setAmount={setAmount}
            setIsExpense={setIsExpense}
      />
        <EditExpenseModal 
            isOpen ={modal} 
            setModal={setModal} 
            title={title}
            amount={amount}
            isExpense={isExpense}
            setTitle={setTitle}
            setAmount={setAmount}
            setIsExpense={setIsExpense}></EditExpenseModal>

    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    title:"Salary",
    value:6000,
    isExpense:false
  },
  {
    id:2,
    title:"Pub",
    value:300,
    isExpense:true
  }, {
    id:3,
    title:"Rent",
    value:600,
    isExpense:true
  },
  {
    id:4,
    title:"Food",
    value:400,
    isExpense:true
  }
]