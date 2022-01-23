import { useState, useEffect } from "react";
import useStyles from "./styles.js";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { createNewPost, updatePostById } from "store/thunks";
import { useDispatch, useSelector } from "react-redux";
function Form({ currentId, setCurrentId }) {
  const post = useSelector((state) =>
    currentId ? state.posts.data.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  const user = JSON.parse(localStorage.getItem("profile"))

  useEffect(() => {
    if (post) {
      setPostData({
        title: post.title,
        message: post.message,
        tags: post.tags,
        selectedFile: post.selectedFile,
      });
    }
  }, [post]);

  const emptyForm = () => {
    setPostData({
      title: "",
      message: "",
      tags: [],
      selectedFile: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePostById(currentId, {...postData, name : user?.result.name}));
      setCurrentId(null);
      handleClear()
    } else {
      dispatch(createNewPost({...postData, name : user?.result.name}));
      handleClear()
    }
  };

  const handleClear = (e) => {
    
    setCurrentId(null);
    emptyForm();
  };


  if(!user?.result.name ){
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6">
          Please sign in to create a new memory
        </Typography>
      </Paper>
    )
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing a memory" : "New Post"}{" "}
        </Typography>
        
        <TextField
          value={postData.title}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          value={postData.message}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          value={postData.tags}
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase 
            value={postData.selectedFile}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={handleClear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
