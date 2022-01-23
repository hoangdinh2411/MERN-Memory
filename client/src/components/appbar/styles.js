import {makeStyles} from '@material-ui/core/styles';
import memories from "assets/memories.png";
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme)=>({
    appBar: {
        borderRadius: 15,
        padding: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      heading: {
        width: '200px',
        fontSize: '24px',
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        paddingTop: '0%',
        marginTop:0,
        backgroundImage: `url(${memories})`,
        backgroundPosition:'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '300px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
     
}));