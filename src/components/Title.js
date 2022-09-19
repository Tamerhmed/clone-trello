import React, { useState } from 'react';
import { InputBase, Typography } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyle = makeStyles((theme)=> ({
      editableTitleContainer: {
            marginLeft:theme.spacing(1),
            display: 'flex',
      },
      editableTitle: {
            marginLeft:theme.spacing(1),
            flexGrow: 1,
            foneSize:'1.2rem',
            fontWeight:'bold',
      },
      input: {
            margin: theme.spacing(1),
            foneSize:'1.2rem',
            fontWeight:'bold',
            "&:focus" : {
                  background: '#ddd',
            }
      }
}));

const Title = ({title}) => {
      const [open, setOpen] = useState(false);
      const classes =  useStyle();

  return (
    <div>
      {
            open?
            (
                 <div>
                   <InputBase value={title}
                   inputProps={{
                        className: classes.input,

                   }}
                   fullWidth
                   autoFocus
                   onBlur={()=>setOpen(!open) }
                  />
                  </div>  
            ) : (
                  <div className={classes.editableTitleContainer}>
                        <Typography
                        onClick={()=> setOpen(!open)}
                        className={classes.editableTitle}
                        >
                         {title}
                        </Typography>
                        <MoreHorizIcon />
                        </div>
            )
      }
      
     
    </div>
  )
}

export default Title