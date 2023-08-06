function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      let newCart = []
      let exist = false
      if (state.cart.length >= 1) {
        newCart = state.cart.map((par) => {
          if (par.id === action.payload.id) {
            par.num = par.num + action.payload.num
            exist = true
            return par
          } else {
            return par
          }
        })
      }
      if (!exist) {
        newCart.push({ id: action.payload.id, num: action.payload.num })
      }
      return { ...state, cart: newCart }
    }
    case 'increase': {
      let newCart = []
      newCart = state.cart.map((car) => {
        if (car.id === action.payload.id) {
          return { id: car.id, num: car.num + 1 }
        } else {
          return car
        }
      })
      return { ...state, cart: newCart }
    }
    case 'decrease': {
      let newCart = []
      state.cart.forEach((car) => {
        if (car.id === action.payload.id) {
          console.log('decreas pressed?', car.num > 1)
          if (car.num > 1) {
            newCart.push({ id: car.id, num: car.num - 1 })
          }
        } else {
          newCart.push(car)
        }
      })
      return { ...state, cart: newCart }
    }
    case 'removeAll': {
      return { ...state, cart: [] }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

export default reducer
