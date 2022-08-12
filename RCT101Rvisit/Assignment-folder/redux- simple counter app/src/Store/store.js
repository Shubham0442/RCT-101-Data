import {legacy_createStore as createStore} from 'redux'
import {reducer} from '../Reducer/reducer'




class Store {

    #state;
    #updater
    #listenerCallback
    constructor (initState, updaterFunc){
         this.#state = initState;
         this.#updater = updaterFunc;
    }

    getState(){
        return this.#state
    }

    get state(){
        return this.#state
    }

    dispatch (action){
      const currentState = this.#state
      const newState = this.#updater( currentState, action)
      this.#state = newState 

      if(currentState === newState)
      {
        return
      }
      else{
          if(this.#listenerCallback)
            this.#listenerCallback()
      }
    }

    subscribe (callback){
          this.#listenerCallback = callback
    }
}

export const store = createStore( reducer, {count:0} );

//console.log(store.getState())
//console.log(store.state)

store.subscribe(()=>{
    console.log("Store updated")
    console.log(store.state)
})

console.log(store.state)

// store.dispatch( {type:"INCREMENT"} )
// store.dispatch( {type:"INCREMENT"} )
// store.dispatch( {type:"INCREMENT"} )
// store.dispatch( {type:"DECREMENT"} )


