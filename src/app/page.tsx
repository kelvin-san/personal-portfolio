import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import HomeSection from "./components/1home/HomeSection";

export default function Home() {
  return (
    <div>
      <Header secNumber={1} secTitle="Home"></Header>
      <SideMenu></SideMenu>
      <HomeSection></HomeSection>
    </div> 
  )
}
