import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(){
  return <img className="avatar" src="./anhdep.jpeg" alt="" />
}
function Intro(){
  return <div>
    <h1>Tuan Anh </h1>
    <p>Full Stack Web Developer and Full Stack Ios Developer. when on my free time. I like to play game and enjoying Billiards</p>
  </div>
}
function SkillList(){
  return <div>
    <Skill skill='React' emoji = '🤡' color='#c084e8' />
    <Skill skill='Node Js' emoji = '🤡' color='#cdb4de' />
    <Skill skill='Html Css' emoji = '🤡' color='#668573'  />
    <Skill skill='Ios Developer With React Native' emoji = '🤡' color='#d1388a' />
    <Skill skill='Swift' emoji = '🤡' color='#d9705d' />
  </div>
}
function Skill(props){
  return <div className="skill" style={{backgroundColor:props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
