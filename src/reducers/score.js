const scoreReducerDefaultState = 0;

export default (state = scoreReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return state + action.score;

    case 'RESET_SCORE':
      return state = 0;
    
    default:
      return state;
  }
}