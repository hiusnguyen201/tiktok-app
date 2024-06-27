import { OnlyHeader } from "~/layouts";
import config from "~/config";
import HomePage from "~/pages/Home";
import FollowingPage from "~/pages/Following";
import ProfilePage from "~/pages/Profile";
import UploadPage from "~/pages/Upload";
import SearchPage from "~/pages/Search";
import FriendsPage from "~/pages/Friends";
import LivePage from "~/pages/Live";
import ExplorePage from "~/pages/Explore";

const publicRoutes = [
  {
    path: config.routes.home,
    element: HomePage,
  },
  {
    path: config.routes.following,
    element: FollowingPage,
  },
  {
    path: config.routes.profile,
    element: ProfilePage,
  },
  {
    path: config.routes.upload,
    element: UploadPage,
    layout: OnlyHeader,
  },
  {
    path: config.routes.search,
    element: SearchPage,
  },
  {
    path: config.routes.explore,
    element: ExplorePage,
  },
  {
    path: config.routes.live,
    element: LivePage,
  },
  {
    path: config.routes.friends,
    element: FriendsPage,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
