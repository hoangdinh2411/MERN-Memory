import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap:'wrap'
      },
      smMargin: {
        margin: theme.spacing(2),
      },
      actionDiv: {
        textAlign: 'center',
      },
}));