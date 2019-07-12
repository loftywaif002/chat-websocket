import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/FaceOutlined';
import './App.css'
import { generateUser } from '../src/actions'
//Redux
import { Provider } from 'react-redux'
import store from './store'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  users: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    height: '97%',
    marginBottom: theme.spacing(1),
  },
  userList: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  messages: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    height: '75vh',
    marginBottom: theme.spacing(1),
  },
  addMessage: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    height: '12vh',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));


const App = () => {
   // Declare a new state variable, which we'll call "name"
  const [name, setName] = useState(0);
  useEffect(()=>{
  let { user } = store.dispatch(generateUser())
   setName(user)
  }, [])
   const classes = useStyles()
    return(
      <Provider store={store}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
           <Paper className={classes.users} style={{overflowY: 'scroll'}}>
            <h2 style={{backgroundColor:'#26a69a', display: 'inline-block', width: '40%',height:'5%', borderRadius: '5px',  color: 'white'}}>Users</h2>
            <List style={{maxHeight: '70%', overflow: 'hidden', overflowY: 'scroll'}}>
                
                <ListItem button>
                   <ListItemIcon>
                     <FaceIcon />
                   </ListItemIcon>
                   <Typography paragraph={true} style={{ paddingTop: "12px" }}>
                       {name}
                   </Typography>
                </ListItem>

            </List>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.messages}>
          <h2 style={{backgroundColor:'#673ab7', display: 'inline-block', width: '20%',height:'6%', borderRadius: '5px', color: 'white'}}>Messages</h2>
          </Paper>
            <Paper className={classes.addMessage}>
            <TextField
              InputProps={{
                disableUnderline: true
              }}
              id="standard-bare"
              className={classes.textField}
              placeholder="Type here"
              margin="normal"
              inputProps={{ 'aria-label': 'bare' }}
              fullWidth
             />
            </Paper>
          </Grid>
        </Grid>  
      </Provider>
    )
}

export default App;