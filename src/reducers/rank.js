const rankReducerDefaultState = [];

export default (state = rankReducerDefaultState, action) => {
  switch (action.type) {
    case 'UPDATE_RANKING':
      return [
        ...state, 
        action.match
      ];
    
    default:
      return state;
  }
}