// actions
export const increment = () => {
  return {
    type: 'increment',
  };
};

//   reducers
export const counterReducer = (state = 0, action: any) => {
  if (action.type === 'increment') {
    return state + 1;
  } else {
    return state;
  }
};

export default counterReducer;
