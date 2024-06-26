import { OnlyHeader } from "~/layouts";
import config from "~/config";
import HomePage from "~/pages/Home";
import FollowingPage from "~/pages/Following";
import ProfilePage from "~/pages/Profile";
import UploadPage from "~/pages/Upload";
import SearchPage from "~/pages/Search";

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
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
