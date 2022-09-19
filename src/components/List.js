import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import Card from './Card';
import InputContainer from './input/InputContainer';

const useStyle = makeStyles((theme)=> ({
      root: {
            width:'300px',
            backgroundColor: '#ebecf0',
            marginLeft:theme.spacing(1),
      },
}));

const List = ({list}) => {

      const classes = useStyle();
console.log(list)
  return (
    <div>
      <Paper className={classes.root}>
            <CssBaseline />
            <Title title={list.title}/>
           {list.cards.map((card)=> (
                  <Card key={card.id} card={card}/>
           ))}
            <InputContainer />
      </Paper>
    </div>
  )
}

export default List;
