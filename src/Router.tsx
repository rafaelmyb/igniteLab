import { Navigate, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route
        path="/event"
        element={<Navigate to="/event/lesson/abertura-do-evento-ignite-lab" replace />}
      />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}