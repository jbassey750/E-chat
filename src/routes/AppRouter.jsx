import { Routes, Route, Navigate } from "react-router-dom";

import ModeratorLayout from "../components/layout/ModeratorLayout";
import MessagesPage from "../pages/moderator/MessagesPage";
import StatsPage from "../pages/moderator/StatsPage";
import ModeratorHome from "../pages/moderator/ModeratorHome";

import { ModeratorProvider } from "../context/ModeratorContext";
import ModeratorLogin from "../pages/moderator/ModeratorLogin";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/moderate/logs/workspace" replace />} />
      <Route path="/moderate/logs/workspace" element={<ModeratorLogin />} />

      <Route
        path="/moderator/workspace"
        element={
          localStorage.getItem("token") ? (
            <ModeratorProvider>
              <ModeratorLayout />
            </ModeratorProvider>
          ) : (
            <Navigate to="/moderate/logs/workspace" replace />
          )
        }
      >
        <Route index element={<Navigate to="home" replace />} /> 
        <Route path="messages" element={<MessagesPage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="home" element={<ModeratorHome />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
 