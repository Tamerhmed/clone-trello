import React from 'react'
import { Button, IconButton, InputBase, Paper} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { alpha, makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=> ({
      card: {
            
            padding: theme.spacing(3,1,3,1),
            margin:theme.spacing(0,1,1,1),
      },
      input: {
            margin: theme.spacing(1),
      },
      btnConfirm: {
            backgroundColor: '#5aac44',
            color: 'white',
             "&:hover": {
                  backgroundColor: alpha('#5aac44', 0.75),
            }
      },
      confirm: {
            margin: theme.spacing(0,1,1,1),
            color: 'white',
           
      }
}));

const InputCard = ({setOpen}) => {
      const classes = useStyle();

  return (
    <div>
      <div>
      <Paper className={classes.card}>
            <InputBase
            onBlur={()=> setOpen(false)}
             multiline
             fullWidth
             inputProps={{
                  classes: classes.input,
             }}
             placeholder='Enter a title ..'
             />
      </Paper>
    </div>
    <div className={classes.confirm}>
      <Button className={classes.btnConfirm}
      onClick={()=> setOpen(false)}
      >
            Add card
      </Button>
      <IconButton onClick={()=> setOpen(false)}>
            <ClearIcon />
      </IconButton>
    </div>
    </div>
  )
}

export default InputCard