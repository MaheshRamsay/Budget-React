import './App.css';
import {Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import BalanceSegment from './components/BalanceSegment'
import EntryListCell from './components/EntryListCell'

function App() {
  return (
    <Container>
      <MainHeader fontType='h1' title="Budget"></MainHeader>
      <DisplayBalance 
      title="Your Balance"
      value="2,5500.0"
      size = "small"
      color = "black" />
       <BalanceSegment />
        <MainHeader fontType='h3' title="History"></MainHeader>
      <EntryListCell title="Income" value="$20.0"></EntryListCell>
      <EntryListCell title="Expense" value="$10.0" isExpense='red'></EntryListCell>
     <MainHeader fontType='h3' title="Add New Transaction"></MainHeader>
      <NewEntryForm />
    </Container>
  );
}

export default App;
