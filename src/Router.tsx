import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route
        path="/event"
        element={<Navigate to="/event/lesson/abertura-do-evento-ignite-lab" replace />}
      />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}