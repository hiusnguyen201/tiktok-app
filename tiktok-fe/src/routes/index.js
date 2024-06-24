import { OnlyHeader } from "~/components/Layouts";

import HomePage from "~/pages/Home";
import FollowingPage from "~/pages/Following";
import ProfilePage from "~/pages/Profile";
import UploadPage from "~/pages/Upload";
import SearchPage from "~/pages/Search";

const publicRoutes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/following",
    element: FollowingPage,
  },
  {
    path: "/@:nickname",
    element: ProfilePage,
  },
  {
    path: "/upload",
    element: UploadPage,
    layout: OnlyHeader,
  },
  {
    path: "/search",
    element: SearchPage,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
