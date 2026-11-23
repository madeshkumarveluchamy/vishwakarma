import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader/Loader";

// Core Page Components
import Services from "./Components/Services/Services";
import Carousel from "./Components/Carousel/Carousel";
import Gallery from "./Components/Projects/Gallery";
import Projectmain from "./Components/Projects/Projectmain";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import About from "./Components/About Us/Aboutus";
import Contact from "./Components/Contactus/Contact";
import Team from "./Components/Team/Team";
import Journal from "./Components/Journal/Journal";
import Publications from "./Components/Journal/Publications/Publications";
import Thoughts from "./Components/Journal/Thoughts/Thoughts";
import Recognitions from "./Components/Journal/Recognitions/Recognitions";
import Design from "./Components/Journal/Design/Design";
import Planning from "./Components/Journal/Planning/Planning";

// Lazy-loaded Project and Sub-page Components (Code-Split)
const Kayal = lazy(() => import("./Components/Projects/DetailedProjects/Kayal/Kayal"));
const Springmountschool = lazy(() => import("./Components/Projects/DetailedProjects/Springschool/Springmountschool"));
const Centuryappearls = lazy(() => import("./Components/Projects/DetailedProjects/CenturyAppearls/Centuryappearls"));
const Colorhouse = lazy(() => import("./Components/Projects/DetailedProjects/Colorhouse/Colorhouse"));
const Lighthouse = lazy(() => import("./Components/Projects/DetailedProjects/Lighthouse/Lighthouse"));
const Donutsai = lazy(() => import("./Components/Projects/DetailedProjects/DonutSai/Donutsai"));
const DonutThu = lazy(() => import("./Components/Projects/DetailedProjects/DonutThu/DonutThu"));
const Elgi = lazy(() => import("./Components/Projects/DetailedProjects/Elgi/Elgi"));
const Texmo = lazy(() => import("./Components/Projects/DetailedProjects/Texmo/Texmo"));
const Houseofearthen = lazy(() => import("./Components/Projects/DetailedProjects/HouseofEarthen/Houseofearthen"));
const Stackhouse = lazy(() => import("./Components/Projects/DetailedProjects/Stackhouse/Stackhouse"));
const Yarnhouse = lazy(() => import("./Components/Projects/DetailedProjects/Yarn/Yarnhouse"));
const Mootram = lazy(() => import("./Components/Projects/DetailedProjects/Mootram/Mootram"));
const Nalanda = lazy(() => import("./Components/Projects/DetailedProjects/Nalanda/Nalanda"));
const Sks = lazy(() => import("./Components/Projects/DetailedProjects/SKS/Sks"));
const Villanunc = lazy(() => import("./Components/Projects/DetailedProjects/Villanunc/Villanunc"));
const Summerhouse = lazy(() => import("./Components/Projects/DetailedProjects/Summerhouse/Summerhouse"));
const Actcall = lazy(() => import("./Components/Projects/DetailedProjects/Act Call/Actcall"));
const Eventdecor = lazy(() => import("./Components/Projects/DetailedProjects/Eventdecor/Eventdecor"));
const Mahilampoo = lazy(() => import("./Components/Projects/DetailedProjects/Mahilampoo/Mahilampoo"));
const Malli = lazy(() => import("./Components/Projects/DetailedProjects/Malli/Malli"));
const JJmills = lazy(() => import("./Components/Projects/DetailedProjects/JJmills/JJmills"));
const Lnbjewellers = lazy(() => import("./Components/Projects/DetailedProjects/LNB Jewellers/Lnbjewellers"));
const Precot = lazy(() => import("./Components/Projects/DetailedProjects/Precot/Precot"));
const Precol = lazy(() => import("./Components/Projects/DetailedProjects/Precol/Precol"));
const SPMKadrimills = lazy(() => import("./Components/Projects/DetailedProjects/SPM Kadrimills/SPMKadrimills"));
const Berylhouse = lazy(() => import("./Components/Projects/DetailedProjects/Beryl House/Berylhouse"));
const Circularhouse = lazy(() => import("./Components/Projects/DetailedProjects/Circular House/Circularhouse"));
const Cottonblossom = lazy(() => import("./Components/Projects/DetailedProjects/Cotton Blossom/Cottonblossom"));
const Isaiveedu = lazy(() => import("./Components/Projects/DetailedProjects/Isai Veedu/Isaiveedu"));
const Oculus = lazy(() => import("./Components/Projects/DetailedProjects/Oculus House/Oculus"));
const Sepiahouse = lazy(() => import("./Components/Projects/DetailedProjects/Sepia House/Sepiahouse"));
const Terra = lazy(() => import("./Components/Projects/DetailedProjects/Terra House/Terra"));
const Treehouse = lazy(() => import("./Components/Projects/DetailedProjects/Tree of Life House/Treehouse"));
const Victorianhouse = lazy(() => import("./Components/Projects/DetailedProjects/Victorian House/Victorianhouse"));
const Veedu1 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-1/Veedu1"));
const Veedu2 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-2/Veedu2"));
const Veedu3 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-3/Veedu3"));
const Veedu4 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-4/Veedu4"));
const Veedu5 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-5/Veedu5"));
const Veedu6 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-6/Veedu6"));
const Veedu7 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-7/Veedu7"));
const Avatharjewellers = lazy(() => import("./Components/Projects/DetailedProjects/Avathar Jewllers/Avatharjewellers"));
const Adamstailor = lazy(() => import("./Components/Projects/DetailedProjects/Adams Tailor/Adamstailor"));
const Anantaboutique = lazy(() => import("./Components/Projects/DetailedProjects/Ananta Boutique/Anantaboutique"));
const Coolcooper = lazy(() => import("./Components/Projects/DetailedProjects/Cool Cooper Show/Coolcooper"));
const Donutvadavalli = lazy(() => import("./Components/Projects/DetailedProjects/Donut Vadavalli/Donutvadavalli"));
const Garmentnook = lazy(() => import("./Components/Projects/DetailedProjects/Garment Nook/Garmentnook"));
const Ishalife = lazy(() => import("./Components/Projects/DetailedProjects/Isha Life/Ishalife"));
const Kotajewellers = lazy(() => import("./Components/Projects/DetailedProjects/Kota Jewellers/Kotajewellers"));
const Mahapalace = lazy(() => import("./Components/Projects/DetailedProjects/Maha Palace/Mahapalace"));
const Pralochnanew = lazy(() => import("./Components/Projects/DetailedProjects/Pralochna New/Pralochnanew"));
const Pralochnaold = lazy(() => import("./Components/Projects/DetailedProjects/Pralochna Old/Pralochnaold"));
const Purplebay = lazy(() => import("./Components/Projects/DetailedProjects/Purple Bay/Purplebay"));
const Soupandsaladadyar = lazy(() => import("./Components/Projects/DetailedProjects/Soup and Salad Adyar/Soupandsaladadyars"));
const Soupandsaladttk = lazy(() => import("./Components/Projects/DetailedProjects/Soup and Salad TTk/Soupandsaladtk"));
const Bharanisilks = lazy(() => import("./Components/Projects/DetailedProjects/Bharani silks/Bharanisilks"));
const Chiar = lazy(() => import("./Components/Projects/DetailedProjects/Chiar/Chiar"));
const Vasavitemple = lazy(() => import("./Components/Projects/DetailedProjects/Vasavi temple/Vasavitemple"));
const Veedu8 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-8/Veedu8"));
const Insideout = lazy(() => import("./Components/Journal/Publications/Publication1/Insideout"));
const Interiorexterior = lazy(() => import("./Components/Journal/Publications/Publications2/Interiorexterior"));
const Interiorexterior2 = lazy(() => import("./Components/Journal/Publications/Publications3/Interiorexterior2"));
const Societyinterior = lazy(() => import("./Components/Journal/Publications/Publications4/Societyinterior"));
const Avinashilingam = lazy(() => import("./Components/Journal/Recognitions/Recognitions1/Avinashilingam"));
const Designperspective = lazy(() => import("./Components/Journal/Recognitions/Recognitions2/Designperspective"));
const Foaid = lazy(() => import("./Components/Journal/Recognitions/Recognitions3/Foaid"));
const Foundersthought = lazy(() => import("./Components/Journal/Thoughts/Thoughts1/Foundersthought"));
const Functionality = lazy(() => import("./Components/Journal/Thoughts/Thoughts2/Functionality"));
const Genusloci = lazy(() => import("./Components/Journal/Thoughts/Thoughts3/Genusloci"));
const Materiality = lazy(() => import("./Components/Journal/Thoughts/Thoughts4/Materiality"));
const Wade = lazy(() => import("./Components/Journal/Recognitions/Recognitions4/Wade"));
const Artisanaldesign = lazy(() => import("./Components/Journal/Design/Design1/Artisanaldesign"));
const Handsketch = lazy(() => import("./Components/Journal/Design/Design2/Handsketch"));
const Turya = lazy(() => import("./Components/Journal/Design/Design3/Turya"));
const Spatial = lazy(() => import("./Components/Journal/Planning/Planning1/Spatial"));
const Environment = lazy(() => import("./Components/Journal/Planning/Planning2/Environment"));
const Ksir = lazy(() => import("./Components/Projects/DetailedProjects/Ksir School/Ksir"));
const Balledoftime = lazy(() => import("./Components/Projects/DetailedProjects/Aballedoftime/Balledoftime"));
const AModernSanctuary = lazy(() => import("./Components/Projects/DetailedProjects/A-Modern-Sanctuary/AModernSanctuary"));
const StackedHouse = lazy(() => import("./Components/Projects/DetailedProjects/StackedHouse/StackedHouse"));
const FluidHarmony = lazy(() => import("./Components/Projects/DetailedProjects/FluidHarmony/FluidHarmony"));
const Veedu9 = lazy(() => import("./Components/Projects/DetailedProjects/Veedu-9/Veedu9"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/About" element={<About />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Journal" element={<Journal />} />
          <Route path="/gallery" element={<Gallery />} /> {/* Updated path */}
          <Route path="/Projectmain" element={<Projectmain />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/project/1" element={<Kayal />} />
          <Route path="/project/9" element={<Springmountschool />} />
          <Route path="/project/2" element={<Centuryappearls />} />
          <Route path="/project/4" element={<Colorhouse />} />
          <Route path="/project/7" element={<Lighthouse />} />
          <Route path="/project/15" element={<Donutsai />} />
          <Route path="/project/16" element={<DonutThu />} />
          <Route path="/project/14" element={<Elgi />} />
          <Route path="/project/11" element={<Texmo />} />
          <Route path="/project/12" element={<Houseofearthen />} />
          <Route path="/project/8" element={<Stackhouse />} />
          <Route path="/project/5" element={<Yarnhouse />} />
          <Route path="/project/6" element={<Mootram />} />
          <Route path="/project/10" element={<Nalanda />} />
          <Route path="/project/17" element={<Sks />} />
          <Route path="/project/18" element={<Villanunc />} />
          <Route path="/project/3" element={<Summerhouse />} />
          <Route path="/project/19" element={<Actcall />} />
          <Route path="/project/20" element={<Eventdecor />} />
          <Route path="/project/21" element={<Mahilampoo />} />
          <Route path="/project/22" element={<Malli />} />
          <Route path="/project/23" element={<JJmills />} />
          <Route path="/project/24" element={<Lnbjewellers />} />
          <Route path="/project/25" element={<Precot />} />
          <Route path="/project/26" element={<Precol />} />
          <Route path="/project/27" element={<SPMKadrimills />} />
          <Route path="/project/28" element={<Berylhouse />} />
          <Route path="/project/29" element={<Circularhouse />} />
          <Route path="/project/30" element={<Cottonblossom />} />
          <Route path="/project/31" element={<Isaiveedu />} />
          <Route path="/project/33" element={<Oculus />} />
          <Route path="/project/34" element={<Sepiahouse />} />
          <Route path="/project/35" element={<Terra />} />
          <Route path="/project/36" element={<Treehouse />} />
          <Route path="/project/37" element={<Victorianhouse />} />
          <Route path="/project/38" element={<Veedu1 />} />
          <Route path="/project/39" element={<Veedu2 />} />
          <Route path="/project/40" element={<Veedu3 />} />
          <Route path="/project/41" element={<Veedu4 />} />
          <Route path="/project/42" element={<Veedu5 />} />
          <Route path="/project/43" element={<Veedu6 />} />
          <Route path="/project/44" element={<Veedu7 />} />
          <Route path="/project/45" element={<Avatharjewellers />} />
          <Route path="/project/60" element={<Chiar />} />
          <Route path="/project/61" element={<Vasavitemple />} />
          <Route path="/project/62" element={<Veedu8 />} />
          <Route path="/project/63" element={<Ksir />} />
          <Route path="/project/46" element={<Adamstailor />} />
          <Route path="/project/47" element={<Anantaboutique />} />
          <Route path="/project/48" element={<Coolcooper />} />
          <Route path="/project/49" element={<Donutvadavalli />} />
          <Route path="/project/50" element={<Garmentnook />} />
          <Route path="/project/51" element={<Ishalife />} />
          <Route path="/project/52" element={<Kotajewellers />} />
          <Route path="/project/53" element={<Mahapalace />} />
          <Route path="/project/54" element={<Pralochnanew />} />
          <Route path="/project/55" element={<Pralochnaold />} />
          <Route path="/project/56" element={<Purplebay />} />
          <Route path="/project/57" element={<Soupandsaladadyar />} />
          <Route path="/project/58" element={<Soupandsaladttk />} />
          <Route path="/project/59" element={<Bharanisilks />} />
          <Route path="/project/64" element={<Balledoftime />} />
          <Route path="/project/65" element={<AModernSanctuary />} />
          <Route path="/project/66" element={<StackedHouse />} />
          <Route path="/project/67" element={<FluidHarmony />} />
          <Route path="/project/68" element={<Veedu9 />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/Publications" element={<Publications />} />
          <Route path="/Thoughts" element={<Thoughts />} />
          <Route path="/Recognitions" element={<Recognitions />} />
          <Route path="/Publications1" element={<Insideout />} />
          <Route path="/Publications2" element={<Interiorexterior />} />
          <Route path="/Publications3" element={<Interiorexterior2 />} />
          <Route path="/Publications4" element={<Societyinterior />} />
          <Route path="/Recognitions1" element={<Avinashilingam />} />
          <Route path="/Recognitions2" element={<Designperspective />} />
          <Route path="/Recognitions3" element={<Foaid />} />
          <Route path="/Recognitions4" element={<Wade />} />
          <Route path="/Thoughts1" element={<Foundersthought />} />
          <Route path="/Thoughts2" element={<Functionality />} />
          <Route path="/Thoughts3" element={<Genusloci />} />
          <Route path="/Thoughts4" element={<Materiality />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/Artisanal" element={<Artisanaldesign />} />
          <Route path="/Handsketch" element={<Handsketch />} />
          <Route path="/Turya" element={<Turya />} />
          <Route path="/Planning" element={<Planning />}/>
          <Route path="/theSpatial" element={<Spatial />}/>
          <Route path="/Environment" element={<Environment />}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
