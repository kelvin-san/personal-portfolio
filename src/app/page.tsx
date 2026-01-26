import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import HomeSection from "./components/1home/HomeSection";

export default function Home() {
  return (
    <div>
      <div>
        <Header secNumber={1} secTitle="Home" />
      </div>
      <div>
        <SideMenu />
      </div>
      <div className="snap-container">
        <div className="snap-section">
          <HomeSection />
        </div>
      </div>
    </div>
  )
}
