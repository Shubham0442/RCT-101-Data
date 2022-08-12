
const func = (currentState, action)=>{
   
    if(action.type === "INCREMENT")
    {
        return {
            ...currentState,
            count: currentState.count + 1
        }
        
    }
    else if(action.type === "DECREMENT")
    {
        return {
            ...currentState,
            count: currentState.count - 1
        }
        
    }
    else{
        return currentState;
    }
}





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

const store = new Store ( {count:1}, func );

//console.log(store.getState())
//console.log(store.state)

store.subscribe(()=>{
    console.log("Store updated")
    console.log(store.state)
})

console.log(store.state)

store.dispatch( {type:"INCREMENT"} )
store.dispatch( {type:"INCREMENT"} )
store.dispatch( {type:"INCREMENT"} )
store.dispatch( {type:"DECREMENT"} )


