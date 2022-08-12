
export const instate = {
    count: 0
  };
  
  export const counterReducer = (state, { type, payload }) => {
    switch (type) {
      case "INCREMENT_AMOUNT": {
        return {
          ...state,
          count: state.count + Number(payload),
        };
      }
      case "DECREMENT_AMOUNT": {
        return {
          ...state,
          count: state.count - Number(payload),
        };
      }
      default: {
        return state;
      }
    }
  };