import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './css/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

// 主页面
import Bdemo from './pages/Bdemo';
import Cdemo from './pages/Cdemo';
import Ddemo from './pages/Ddemo';
import Edemo from './pages/Edemo';
import Fdemo from './pages/Fdemo';
import Gdemo from './pages/Gdemo';
import Hdemo from './pages/Hdemo';
import Idemo from './pages/Idemo';

// 组件
import Nav from './components/nav';


ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Route exact path="/" component={App} className="underline" />
            <Route path="/Bdemo" component={Bdemo} className="underline" />
            <Route path="/Cdemo" component={Cdemo} className="underline" />
            <Route path="/Ddemo" component={Ddemo} className="underline" />
            <Route path="/Edemo" component={Edemo} className="underline" />
            <Route path="/Fdemo" component={Fdemo} className="underline" />
            <Route path="/Gdemo" component={Gdemo} className="underline" />
            <Route path="/Hdemo" component={Hdemo} className="underline" />
            <Route path="/Idemo" component={Idemo} className="underline" />
            {/* <Route path="/Jdemo" component={Jdemo} />
            <Route path="/Ldemo" component={Ldemo} />
            <Route path="/Mdemo" component={Mdemo} />
            <Route path="/Ndemo" component={Ndemo} />
            <Route path="/Odemo" component={Odemo} />
            <Route path="/Pdemo" component={Pdemo} />
            <Route path="/Qdemo" component={Qdemo} />
            <Route path="/Rdemo" component={Rdemo} />
            <Route path="/Sdemo" component={Sdemo} />
            <Route path="/Tdemo" component={Tdemo} />
            <Route path="/Udemo" component={Udemo} />
            <Route path="/Vdemo" component={Vdemo} />
            <Route path="/Wdemo" component={Wdemo} />
            <Route path="/Xdemo" component={Xdemo} />
            <Route path="/Ydemo" component={Ydemo} />
            <Route path="/Zdemo" component={Zdemo} /> */}
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();