import { Typography, Grid, Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../store/hook";
import {
  selectPosts,
  selectPostsInfo,
} from "../store/features/getPosts/postsSlise";
import { useEffect, useState } from "react";
import { loadPosts } from "../store/features/getPosts/postsSlise";
import { PostCard } from "../components/PostCard";

export const News: React.FC = () => {
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(6);
  const [isOverflowList, setIsOverflowList] = useState(false);

  const dispatch = useAppDispatch();
  //const posts = useAppSelector((state) => state.posts.list);
  const deletedItems = useAppSelector((state) => state.deletedItems);
  const posts = useAppSelector(selectPosts);
  const { qty, status, error } = useAppSelector(selectPostsInfo);

  const visiblePosts = posts.filter((post) => {
    return !deletedItems.includes(post.id);
  });

  const showMoreHelper = () => {
    if (numberOfitemsShown + 6 <= posts.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 6);
    } else {
      setNumberOfItemsToShown(posts.length);
      setIsOverflowList(true);
    }
  };

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
        <Grid justifyContent="center" container spacing={2} sx={{ mt: "45px" }}>
          {visiblePosts.slice(0, numberOfitemsShown).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          <Grid item lg={12} sx={{display:"flex", justifyContent:"center"}} >
            <Button
              disabled={isOverflowList}
              variant="outlined"
              sx={{ m: "35px" }}
              onClick={showMoreHelper}
            >
              {isOverflowList ? "No more news" : "Show more"}
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
