import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/Lesson05/Lesson05";
import FetchFox from "./components/fetchFox/FetchFox";
import NoPage from "./components/noPage/NoPage";
import LoginForm from "./components/loginForm/LoginForm";
import HomePage from "./components/homePage/HomePage";
import Feedback from "./components/Feedback/Feedback";
// import ProfileCard from "./components/ProfileCard/ProfileCard";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson02 from "./lessons/Lesson02/Lesson02";
// import Lesson01 from "./lessons/Lesson01/Lesson01";
// import Homework01 from "./components/Homework/Homework01/Homework01";
import Homework02 from "./components/Homework/Homework02/Homework02";
import Homework03 from "./components/Homework/Homework03/Homework03";
import Homework04 from "./components/Homework/Homework04/Homework04";
import SpaceMission from "./spaceMission/SpaceMission";
import Counter from "./components/counter/Counter";
import ShowDate from "./components/ShowDate/ShowDate";
import Lesson11 from "./lessons/lesson11/Lesson11";
// import FetchFox from "./components/fetchFox/FetchFox";
// import Lesson09 from './lessons/lesson09/Lesson09';
// import ShowDate from './components/ShowDate/ShowDate
// import Lesson08 from './lessons/Lesson08/Lesson08';
// import SpaceMission from './spaceMission/SpaceMission';
// import Lesson06 from './lessons/lesson06/Lesson06';
// import Lesson07 from './lessons/lesson07/Lesson07';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="fellowship" element={<Lesson05 />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="loginForm" element={<LoginForm/>} />
          <Route path="feedback" element={<Feedback/>} />
          <Route path="spaceMission" element={<SpaceMission/>} />
          <Route path="counter" element={<Counter/>} />
          <Route path="showDate" element={<ShowDate/>} />
          {/* <Route path="profileCard" element={<ProfileCard/>} /> */}
          {/* <Route path="lesson01" element={<Lesson01/>} /> */}
          <Route path="lesson02" element={<Lesson02/>} />
          <Route path="lesson03" element={<Lesson03/>} />
          <Route path="lesson04" element={<Lesson04/>} />
          <Route path="lesson05" element={<Lesson05/>} />
          <Route path="lesson06" element={<Lesson06/>} />
          <Route path="lesson07" element={<Lesson07/>} />
          <Route path="lesson08" element={<Lesson08/>} />
          <Route path="lesson09" element={<Lesson09/>} />
          <Route path="lesson11" element={<Lesson11/>} />
          {/* <Route path="Homework01" element={<Homework01/>} /> */}
          <Route path="Homework02" element={<Homework02/>} />
          <Route path="Homework03" element={<Homework03/>} />
          <Route path="Homework04" element={<Homework04/>} />

          <Route path="*" element={<NoPage />} />

          {/* <Lesson06/> */}
          {/* <SpaceMission /> */}
          {/* <Lesson08 /> */}
          {/* <ShowDate /> */}
          {/* <FetchFox /> */}
          {/* <Lesson09 /> */}
          {/* <Lesson07 /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
