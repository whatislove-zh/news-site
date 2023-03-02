import { Box, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../store/hook";
import { selectPosts } from "../store/features/getPosts/postsSlise";
import { PostCard } from "../components/PostCard";
import {useTranslation} from "react-i18next"

export const Home: React.FC = () => {
  const posts = useAppSelector(selectPosts);

  const todayDate = new Date().toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const todayPosts = posts.filter((post) => {
    const postedAt = new Date(post.publishedAt).toLocaleString("en-us", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return postedAt === todayDate;
  });
  const {t} = useTranslation()

  return (
    <>
      <Box>
        <Typography align="center" variant="h3" sx={{m:"50px"}}>{t("homeHeader")}</Typography>
        <Grid container spacing={2} justifyContent="center">
          {todayPosts.length > 0 ? todayPosts.map((post) => (
            <PostCard key={post.id} post={post} home />
          )):<PostCard post={posts[0]} home />}
        </Grid>
      </Box>
    </>
  );
};
