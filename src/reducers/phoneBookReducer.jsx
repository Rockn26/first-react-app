const phoneBookReducer = (state, action) => {
    switch (action.type) {
      case "add":
       return [action.payload, ...state]
      case "remove":
        const newState = [...state];
         newState.splice(action.index, 1);
          return newState;
   
    }
  };

    export default phoneBookReducer;