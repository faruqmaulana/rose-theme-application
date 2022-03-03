import Navbar from "../components/Kanal/Navigasi/Navbar";
import Beranda, { Contents } from "./Komponen";

export default function learn() {
  return (
    <div class="flex flex-col w-full min-h-screen">
      <Navbar></Navbar>
      <Beranda></Beranda>
      <Contents></Contents>
    </div>
  );
}
