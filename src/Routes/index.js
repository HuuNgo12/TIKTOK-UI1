//Layout
import HeaderOnly from "../layouts/HeaderOnly";
import reoutesConfig from "../config/routes";

// pages
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

const publishRoutes = [
  { path: reoutesConfig.home, component: Home },
  { path: reoutesConfig.following, component: Following },
  { path: reoutesConfig.nickname, component: Profile },
  { path: reoutesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: reoutesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { publishRoutes, privateRoutes };
