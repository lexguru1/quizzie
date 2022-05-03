const initialState = {
  name: null,
  price: 0,
  current_qn: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "Price_Addedd":
      return {
        ...state,
        price: action.payload,
      };
    case "increment_qn":
      return {
        ...state,
        current_qn: state.current_qn + 1,
      };
    case "reset":
      return {
        ...state,
        current_qn: 0,
      };
    default:
      return state;
  }
}
