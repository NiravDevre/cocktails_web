
import gsap from "gsap";
import { ScrollTrigger , SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className=" h-[100vh]">
      <h1 className="flex-center"> hello world</h1></div>
  )
}

export default App