// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchSequences } from '../actions/index';
// import { Link } from 'react-router';
//
// class SequenceList extends Component {
//     componentWillMount() {
//         console.log(this.props.fetchSequences());
//     }
//
//     renderList() {
//         // map over phases array and return an <li> for each phase
//         return this.props.phases.map((phase) => {
//             return (
//                 <div>
//                     <li key={ phase.id } className="list-group-item phase">
//                         <Link to={ "breathers/" + phase.id } className="link flex">{ phase.title }</Link>
//                         {/* <FontAwesome name="fa fa-angle-down" aria-hidden="true" /> */}
//                         <div>
//                             <hr/>
//                             <h5>{ phase.description }</h5>
//                             {/* <h4>Inhale: { phase.inhale } counts</h4>
//                              { phase.initialHold > 0 &&
//                              <h4>
//                              Hold: { phase.initialHold } counts
//                              </h4>
//                              }
//                              <h4>Exhale: { phase.exhale } counts</h4>
//                              { phase.secondaryHold > 0 &&
//                              <h4>Hold: { phase.secondaryHold } counts</h4>
//                              } */}
//                         </div>
//                     </li>
//                 </div>
//             );
//         });
//     }
//
//     render() {
//         return (
//             <div className="phase-list">
//                 <div className="container col-xs-12 col-md-8 col-md-offset-2 float-none">
//                     <h1>Select a Breather:</h1>
//                     <ul className="list-group">
//                         {this.renderList()}
//                     </ul>
//                     <Link to={"/"} className="btn btn-md">Peace out (home)</Link>
//                 </div>
//             </div>
//         );
//     }
// }
//
// // takes the application state; whatever is returned will show up inside SequenceList
// // the object returned is available as this.props
// function mapStateToProps(state) {
//     return { phases: state.phases.all }; //state.phases references piece of state 'phases' from reducers/index.js
// }
//
// export default connect(mapStateToProps, { fetchSequences: fetchSequences })(SequenceList);