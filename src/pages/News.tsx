import { Typography, Grid, Button } from "@mui/material";
import { useAppSelector } from "../store/hook";
import {
  selectPosts,
  selectPostsInfo,
} from "../store/features/getPosts/postsSlise";
import { useState } from "react";
import { PostCard } from "../components/PostCard";
import {useTranslation} from "react-i18next"

export const News: React.FC = () => {
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(6);
  const [isOverflowList, setIsOverflowList] = useState(false);

  //const posts = useAppSelector((state) => state.posts.list);
  const deletedItems = useAppSelector((state) => state.deletedItems);
  const posts = useAppSelector(selectPosts);
  const { status, error } = useAppSelector(selectPostsInfo);

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
  const {t} = useTranslation()

  return (
    <>
      {status === "loading" && <Typography>Loading...</Typography>}
      {error && <Typography>Error, my bad, sorry</Typography>}
      {status === "received" && (
        <Grid justifyContent="center" container spacing={2} sx={{ mt: "45px" }}>
          {visiblePosts.slice(0, numberOfitemsShown).map((post) => (
            <PostCard key={post.id} post={post} home={false} />
          ))}
          <Grid item lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              disabled={isOverflowList}
              variant="outlined"
              sx={{ m: "35px" }}
              onClick={showMoreHelper}
            >
              {isOverflowList ? t("noMore") : t("showMore")}
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
