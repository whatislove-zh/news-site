import { PostType } from "../store/features/getPosts/postsSlise";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

type propsType = {
  post: PostType;
};

export const PostCard: React.FC<propsType> = (props) => {
  const { title, imageUrl, summary } = props.post;

  return (
    <>
      <Grid item xs={12} md={4} justifyContent="center">
        <Card sx={{ maxWidth: 400, margin: "auto", height: "530px" }}>
          <CardMedia
            component="img"
            loading="lazy"
            alt={title}
            height="217px"
            image={imageUrl}
            sx={{ cursor: "pointer" }}
          />
          <CardContent>
            <Box
              display={"flex"}
              alignItems={"center"}
            ></Box>
            <Typography
              variant="h6"
              component="p"
              sx={{
                height: "88px",
                mb: "1rem",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >{title}</Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              height={90}
              fontSize={16}
              overflow="hidden"
            >{summary}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
