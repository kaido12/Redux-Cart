const initialState = {
  prodList: [],
};

const prodReducer = (state = initialState, action) => {
  console.log(action.type, action.payload);

  switch (action.type) {
    case "ADD_TO_CART":
      let item = action.payload;

      const isExist = state.prodList.find((e) => e.id == item.id);

      console.log(isExist);

      if (isExist) {
      } else {
        return {
          prodList: state.prodList.push(item),
          ...state,
        };
      }

    case "REMOVE_FROM_CART":
      // let s = state.prodList.filter((item) => item.id !== action.payload);
      // console.log(s)
      // prodList = state.prodList.filter((item)=> item.id ==action.payload),
      
      // Removing data from Cartlist,first laoding all the state and then taking the specifice field and updating
      return {
       ...state,
       prodList : state.prodList.filter((item)=> item.id !==action.payload)
        
      };

    default:
      return state;
  }
};

export default prodReducer;
