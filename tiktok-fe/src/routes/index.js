import { OnlyHeader } from "~/components/Layouts";
import routesConfig from "~/config/routes";
import HomePage from "~/pages/Home";
import FollowingPage from "~/pages/Following";
import ProfilePage from "~/pages/Profile";
import UploadPage from "~/pages/Upload";
import SearchPage from "~/pages/Search";

const publicRoutes = [
  {
    path: routesConfig.home,
    element: HomePage,
  },
  {
    path: routesConfig.following,
    element: FollowingPage,
  },
  {
    path: routesConfig.profile,
    element: ProfilePage,
  },
  {
    path: routesConfig.upload,
    element: UploadPage,
    layout: OnlyHeader,
  },
  {
    path: routesConfig.search,
    element: SearchPage,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
