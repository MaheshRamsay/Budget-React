import './App.css';
import {Container, Header, Statistic, Segment, Grid, Icon, Form, Button} from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'> 
        <Statistic.Label> Your Balance: </Statistic.Label>
        <Statistic.Value> 2,5500.0</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
          <Grid columns={2} divided>
            <Grid.Row>
                <Grid.Column>
                 <Statistic size = 'small' color='green'>
                  <Statistic.Label style={{textAlign:"left"}}>Income:</Statistic.Label>
                  <Statistic.Value ST>1,045.50</Statistic.Value>
                  </Statistic>
                </Grid.Column>
                 <Grid.Column>
                 <Statistic size = 'small' color='red'>
                  <Statistic.Label style={{textAlign:"left"}}>Expenses:</Statistic.Label>
                  <Statistic.Value ST>700</Statistic.Value>
                  </Statistic>
                </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>

      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign='center' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign= 'left'>Something</Grid.Column>
             <Grid.Column width={3} textAlign= 'left'>$10,00</Grid.Column>
             <Grid.Column width={3}>
                <Icon name ="edit" bordered></Icon>
                <Icon name ="trash" bordered></Icon>
             </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>


       <Segment color="green">
        <Grid columns={3} textAlign='center' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign= 'left'>Something One</Grid.Column>
             <Grid.Column width={3} textAlign= 'left'>$100,00</Grid.Column>
             <Grid.Column width={3}>
                <Icon name ="edit" bordered></Icon>
                <Icon name ="trash" bordered></Icon>
             </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>


         <Segment color="blue">
        <Grid columns={3} textAlign='center' divided>
          <Grid.Row>
            <Grid.Column width={10} textAlign= 'left'>Something Two</Grid.Column>
             <Grid.Column width={3} textAlign= 'left'>$10</Grid.Column>
             <Grid.Column width={3}>
                <Icon name ="edit" bordered></Icon>
                <Icon name ="trash" bordered></Icon>
             </Grid.Column>
          </Grid.Row>
          </Grid>
      </Segment>


     <Header as="h3"> Add New Transaction</Header>
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
           <Button.Group style={{marginLeft: 5, marginTop: 20}}>
           <Button>Cancel</Button>
           <Button.Or />
           <Button primary>Update</Button>
        </Button.Group>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
