import { Grid , CircularProgress } from "@material-ui/core";
import React from "react";
import Post from "./post";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";

function Posts({setCurrentId}) {
  const { data, isLoading, error } = useSelector((state) => state.posts);
  const classes = useStyles();
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Please try again</h1>;
  }

  
   return (
   
      <Grid className={classes.mainContainer}>
        {
        (!data.length & CircularProgress) ||
          data.map((post) => {
            return (
              <Grid key={post.id} className={classes.smMargin} item xs={12} sm={5}>
                <Post post={post} key={post.id} setCurrentId={setCurrentId}/>
              </Grid>
            );
          })
          
          }
      </Grid>
   )
  ;
}

export default Posts;
