import { Outlet } from "react-router-dom";
import SideBar from "./component/SideBar";

export default function App() {
  return (
    <main className="w-screen h-screen">
      <SideBar />
      <Outlet />
    </main>
  );
}
