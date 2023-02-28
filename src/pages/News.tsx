import { Typography, Grid } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  selectPosts,
  selectPostsInfo,
} from "../store/features/getPosts/postsSlise";
import { useEffect } from "react";
import { loadPosts } from "../store/features/getPosts/postsSlise";
import { PostCard } from "../components/PostCard";

export const News: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const { qty, status, error } = useAppSelector(selectPostsInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadPosts());
    }
  }, [qty, dispatch]);

  return (
    <>
      {status === "loading" && <Typography>Loading...</Typography>}
      {error && <Typography>Error, my bad, sorry</Typography>}
      {status === "received" && (
        <Grid container spacing={2} sx={{ mt: "45px" }}>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      )}
    </>
  );
};
