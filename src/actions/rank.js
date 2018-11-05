export const updateRanking = ({ name = '', score = 0, email = '' }) => ({
  type: 'UPDATE_RANKING',
  match: {
    name,
    email,
    score
  }
});