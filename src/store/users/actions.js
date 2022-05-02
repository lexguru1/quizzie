export const newPrice = (price) => {
  return {
    type: "Price_Addedd",
    payload: { price },
  };
};


export const incrementQnNumber = () => {
    return {
      type: "increment_qn",
    };
  };