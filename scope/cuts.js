//firebase

// require("https://cdn.firebase.com/js/client/1.0.17/firebase.js");


var firebase = require("firebase/app");

var config = {
    apiKey: "AIzaSyAZNzuqfWKM8ujbvI8ECGD8DP5eeOfz5LQ",
    authDomain: "studybuddy-93453.firebaseapp.com",
    databaseURL: "https://studybuddy-93453.firebaseio.com",
    storageBucket: "studybuddy-93453.appspot.com",
    messagingSenderId: "1059577164770"
};
firebase.initializeApp(config);

// Initialize the default app
// var defaultApp = firebase.initializeApp(defaultAppConfig);
//
// console.log(defaultApp.name);



<script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
<script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZNzuqfWKM8ujbvI8ECGD8DP5eeOfz5LQ",
    authDomain: "studybuddy-93453.firebaseapp.com",
    databaseURL: "https://studybuddy-93453.firebaseio.com",
    storageBucket: "studybuddy-93453.appspot.com",
    messagingSenderId: "1059577164770"
};
firebase.initializeApp(config);
</script>


.Buttoncontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 15vw;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 10vh;
}

.btn {
    flex: 1 1 auto;
    padding: 15px;
    border-radius: 8px;
    margin-top: 5em;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    transition: .3s;
    border: 2px solid #69676d;
    color: #69676d;

}

.btn:hover {
    cursor: pointer;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    transform: scale(1.25);
    color: #69676d;
}



/*.gradient, .gradient:after {*/
/*display: block;*/
/*content: "";*/
/*width: 400px; height: 80px;*/
/*background: #bd328f;*/
/*background: -moz-linear-gradient(-45deg,  #bd328f 0%, #bd328f 18%, #2976ab 42%, #61DAFB 62%, #bd328f 82%, #bd328f 100%);*/
/*background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#bd328f), color-stop(18%,#bd328f), color-stop(42%,#2976ab), color-stop(62%,#61DAFB), color-stop(82%,#bd328f), color-stop(100%,#bd328f));*/
/*background: -webkit-linear-gradient(-45deg,  #bd328f 0%,#bd328f 18%,#2976ab 42%,#61DAFB 62%,#bd328f 82%,#bd328f 100%);*/
/*background: -o-linear-gradient(-45deg,  #bd328f 0%,#bd328f 18%,#2976ab 42%,#61DAFB 62%,#bd328f 82%,#bd328f 100%);*/
/*background: -ms-linear-gradient(-45deg,  #bd328f 0%,#bd328f 18%,#2976ab 42%,#61DAFB 62%,#bd328f 82%,#bd328f 100%);*/
/*background: linear-gradient(135deg,  #bd328f 0%,#bd328f 18%,#2976ab 42%,#61DAFB 62%,#bd328f 82%,#bd328f 100%);*/
/*}*/


/* dark blue 61DAFB*/
/*med blue 61DAFB*/
/*lt blue 5BCAFF*/
/*background: linear-gradient(135deg, rgba(85,239,203,1) 0%,rgba(30,87,153,1) 0%,rgba(85,239,203,1) 0%,rgba(91,202,255,1) 100%);*/
/*background: linear-gradient(135deg,  #55EFCB 0%,#61DAFB 18%,#61DAFB 42%,#61DAFB 62%,#55EFCB 82%,#55EFCB 100%);*/

/*h1:hover {*/
/*color: #006699;*/
/*color: #55EFCB;*/
/*color: #39EFD1;*/
/*color: rgba(97, 218, 251, 1);*/
/*transition: .3s;*/

/*}*/

/*h2:hover {*/
/*color: #006699;*/
/*color: #55EFCB;*/
/*color: #39EFD1;*/
/*color: rgba(97, 218, 251, 1);*/
/*transition: .3s;*/

/*}*/


<div className="App">
    <Header />
    <div className="col-6">
        <h1>Welcome!</h1>
        <div className="fade-in one space-around">I'm currently learning about scope.</div>
        <div className="fade-in two space-around">Want to dive deeper with me?</div>
    </div>


<div className="col-6">
    <div className="Buttoncontainer fade-in three">
        <Link to={"/CompilationPhase"} className="btn">Yes!</Link>
    </div>
    <div className="Buttoncontainer fade-in five">
        <Link to={"/CompilationPhase"} className="btn"> Hell Yes!</Link>
    </div>
</div>
<Footer />



</div>

// <Header />
// <div className="Info">
//     <h2>Welcome</h2>
{/*<div className="fade-in one space-around">I'm currently learning about scope.</div>*/}
{/*<div className="fade-in two space-around">Want to dive deeper with me?</div>*/}
{/*<div className="Buttoncontainer fade-in three">*/}
{/*<Link to={"/CompilationPhase"} className="btn">Yes!</Link>*/}
{/*</div>*/}
{/*<div className="Buttoncontainer fade-in five">*/}
{/*<Link to={"/CompilationPhase"} className="btn"> Hell Yes!</Link>*/}
{/*</div>*/}
{/*</div>*/}
{/*<Footer />*/}



{/*<img src={logo} className="App-logo" alt="logo" />*/}
{/*<img src={logo} className="App-logo" alt="logo" />*/}
{/*<img src="./logo.svg" className="App-logo" alt="logo" />*/}
{/*<img src="./logo.js" className="App-logo" alt="logo" />*/}
{/*<logo />*/}


// what index.js used to say

<div>
    <Provider store={store}>
        <App />
    </Provider>,
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/CompilationPhase" component={CompilationPhase}/>
    </Router>


</div>,

<div>
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/CompilationPhase" component={CompilationPhase}/>
    </Router>
    <App/>
</div>,

    reducers/index.js = imports reducers from other files. ex: UserReducer from './reducer-users';
reducer-users = export default function returns array of user info
reducer-active-user = export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}

actions/index.js = export const selectUser = (user) => {
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

yes-button
pause-button
replay-button



//     what app.js used to say

// this is just a function that returns html
// const App = () => (
//     <div className="App">
//         <Header />
//         <div className="Info">
//             <h2>Welcome</h2>
//             <div className="fade-in one">I'm currently learning about $scope.</div>
//             <div className="fade-in two">Want to dive deeper with me?</div>
//             <div className="Buttoncontainer fade-in three">
//                 <Link to={"/CompilationPhase"} className="btn">Yes!</Link>
//             </div>
//         </div>
//         <Footer />
//     </div>
// );
//
// export default App;


/**
 * Created by lisa on 1/5/17.
 */


// from routes.js
// import React from 'react';
// import { Route, IndexRoute } from 'react-router';
//
// import App from '../dev/js/components/App';
// import CompilationPhase from '../dev/js/components/CompilationPhase';
//
// export default (
//     <Route path="/" component={App}>
//         <Route path="compilationPhase" component={CompilationPhase} />
//     </Route>
// )

// import CompilationPhase from './components/CompilationPhase';


// export default (
//     <Route path="/" component={App}>
//         <Route path="compilationPhase" component={CompilationPhase} />
//     </Route>
// )

// // dev/js/actions/info.js
// import React, {Component} from 'react';
//
// class IDE extends Component {
//     render() {
//         return <div>
//             <h1>IDE</h1>
//         </div>
//     }
// }
//
// export default IDE;
//
// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { fetchSequence } from '../dev/js/actions/index';
// import { Link } from 'react-router';
//
// class SequenceStart extends Component {
//     static contextTypes = {
//         router: PropTypes.object
//     };
//
//     componentWillMount() {
//         this.state = {};
//         this.state.sequence = this.props.fetchSequence(this.props.params.id).payload;
//     }
//
//     render() {
//         console.log("this is this.props.sequence in START:", this.state.sequence);
//         return(
//
//             <div className="sequence-start">
//                 <div className="container flex">
//                     <div className="container-start">
//                         <div className="octagon shape"></div>
//                         <div className="heptagon shape"></div>
//                         <div className="hexagon shape"></div>
//                         <div className="pentagon shape"></div>
//                         <div className="square shape"></div>
//                         <div className="triangle shape"></div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// function mapStateToProps(state) {
//     return { phase: state.phases.phase }
// }
//
// export default connect(mapStateToProps, { fetchSequence: fetchSequence })(SequenceStart);

import React, { Component } from 'react';
// import '../dev/scss/YesButton.css'; // Tell Webpack that YesButton.js uses these styles
//
// class YesButton extends Component {
//     render() {
//         // You can use them as regular CSS styles
//         return <div>
//             <div className="Buttoncontainer">
//                 <div className="YesButton">Yes!</div>
//             </div>
//         </div>
//     }
// }
//
// export default YesButton;
