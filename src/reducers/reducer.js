import { ADD, DELETE } from "../constants/actionTypes";

const initialState = [{
  name: 'aaa'
}];

const reducer = (state = initialState, action) => {
    console.log('reducer...', state, action);
    switch (action.type) {
      case ADD:
        return [...state,
            {
              equipmentName: action.payload.equipmentName,
              sensorName: action.payload.sensorName,
              setpoint: action.payload.setpoint
            }
          ];
      case DELETE:
        return state.filter(row => {
            return row.equipmentName !== action.payload.id;
          });
      default:
        return state;
    }
};

export default reducer;