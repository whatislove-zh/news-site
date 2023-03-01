import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { News } from "./pages/News";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import {useEffect} from "react"
import { loadPosts } from "./store/features/getPosts/postsSlise";
import {  useAppDispatch, useAppSelector } from "./store/hook";
import { selectPostsInfo } from "./store/features/getPosts/postsSlise";

const App: React.FC = () => {

  const dispatch = useAppDispatch();
  const { qty } = useAppSelector(selectPostsInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadPosts());
    }
  }, [qty, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
