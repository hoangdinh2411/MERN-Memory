import useStyles from "./styles.js";
import { Card, CardMedia, Typography,Button ,CardContent,CardActions} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'
import {deletePostById , likePostById} from 'store/thunks'
import { useDispatch } from 'react-redux';

function Post({post,setCurrentId}) {

  const dispatch = useDispatch()
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"))
  
  const Likes = ()=>{
    if(post.likes.length>0){
      return post.likes.find(like=>like === (user?.result?._id || user?.result?.googleId))
      ?(
        <>
        <ThumbUpAltIcon fontSize="small" />&nbsp;
        {post.likes.length>2 ? `You and ${post.likes.length } other liked this memory` : `${post.likes.length} like${post.likes.length>1 ?'s':''}`} 
      </>
      )
      :(
        <>
        <ThumbUpAltIcon fontSize="small" />&nbsp;{`${post.likes.length} ${post.likes.length === 1? "Like" : "Likes"}`}
      </>
      )
    }
    return (
        <>
        <ThumbUpAltIcon fontSize="small" />&nbsp; Like
      </>
    )
   
  }
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
      {
        (user?.result?.googleId  === post?.creator || user?.result?._id=== post?.creator) &&
        <Button style={{color:'white'}} size="small" ><MoreHorizIcon fontSize="medium" onClick={()=>setCurrentId(post._id)} /></Button>
        || null
      }

      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {
            post.tags.map(tag=>'#'+tag+" ")
          }
        </Typography>
      </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">{post.message}</Typography>

      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button color="primary" size="small" onClick={()=>{dispatch(likePostById(post._id))}} title="like"><Likes /></Button>
      {
        (user?.result?.googleId  === post?.creator || user?.result?._id=== post?.creator) &&
        <Button color="primary" size="small" onClick={()=>{dispatch(deletePostById(post._id))}}><DeleteIcon fontSize="small"  />Delete</Button>
        || null
      }

      </CardActions>
    </Card>
  );
}

export default Post;
