import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import CssSkyBox from './demos/cssSkybox'
import ThreeSkybox from './demos/threeSkybox'
import Index from './demos/test'
function App() {
  
  const menuConfig=[
    // { component: Index, title: 'demo' ,path:'/',exact:true},
    { component: CssSkyBox, title: 'css天空盒',path:'/CssSkyBox',exact:true },
    { component: ThreeSkybox, title: 'three制作的天空盒' ,path:'/threeSkybox',exact:true}
  ];
  return (
    <Router>
      <div className="App">
        <div className="leftNav">
          {menuConfig.map((item, index) => {
            return (
             <NavLink to={item.path} className='example-sidebar_menu-item'>{item.title}</NavLink>
            );
          })}
        </div>
        <div className="rightMain">
          {menuConfig.map((item, index) => {
            return (
              <Route exact={item.exact} key={index} path={item.path} component={item.component} />
            );
          })}
        </div>
      </div>
    </Router>
  );
}

export default App;
