//   /*
//  * All reducers get two parameters passed in, state and action that occurred
//  *       > state isn't entire apps state, only the part of state that this reducer is responsible for
//  * */
//
// // "state = null" is set so that we don't throw an error when app first boots up
// // null b/c a user is not selected yet.
// export default function (state = null, action) {
//     switch (action.type) {
//         case 'USER_SELECTED':
//             return action.payload;
//             break;
//     }
//     return state;
// }
//
//   import Phase from './reducer-phase';
//       import { FETCH_SEQUENCES, FETCH_SEQUENCE } from '../actions/index';
//
//   const INITIAL_STATE = { all: Sequences(), sequence: null }
//
//   export default function(state = INITIAL_STATE, action) {
//       switch(action.type) {
//           case 'FETCH_SEQUENCE':
//               return { ...state, sequence: action.payload.data };
//           case 'FETCH_SEQUENCES':
//               return { ...state, all: action.payload.data };
//           default:
//               return state;
//       }
//   }