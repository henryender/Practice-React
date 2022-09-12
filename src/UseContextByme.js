import React, {useState, useContext, useMemo,createContext,useRef, useEffect,useReducer} from 'react'

const nameContext = createContext()
//First Create Context
//Remember to import useContext, createContext

function Test() {
 const [name, setName]= useState(false)
 function NameChange(){setName(!name)}
  return (
    <div>
        <h1>UseContext Hook</h1>
      <h2>Parent Component
      <button onClick={NameChange}>Click</button></h2> 
      {name?<h4>Not LoggedIn</h4>:<h4>LoggedIn: Welcome Emma!</h4>}
      <div>
           
          {/* Provide Context to children */}
           <nameContext.Provider value={{name,setName}}>
           <Component1 />
           <Component2 />
           <Component3 />
           <hr/>
           </nameContext.Provider>
           <Nati/>
           <Ref/><hr/>
           <Sari/><hr/>
           
      </div>
  
    </div>
  )
}

export default Test

function Component1 (){
    const{name,setName}=useContext(nameContext)
    // useContext is now used to access the Contexts

  function NameChange(){setName(!name)}
  return(
    <>
      <h2>I am Component 1st Child 
      <button onClick={NameChange}>Click</button>
      </h2>
      {name?<h4>Not LoggedIn</h4>:<h4> LoggedIn: Welcome Henry!</h4>}
    </>
)}

function Component2(){
    const{name,setName}=useContext(nameContext)

    function NameChange(){setName(!name)}
    return(
        <>
        <h2>I am Component 2nd child
        <button onClick={NameChange}>Click</button>
        </h2>
        {name?<h4>Not LoggedIn</h4>:<h4>LoggedIn: Welcome Joseph!</h4>}
        </>
    )}

function Component3(){
    const{name,setName}=useContext(nameContext)
    function NameChange(){setName(!name)}
    return(
        <>
        <h2>I am Component 3rd Child
        <button onClick={NameChange}>Click</button>
        </h2>
       {name?<h4>Not LoggedIn</h4>:<h4>LoggedIn: Welcome James!</h4>}
        </>
    )}


    //The Provider Value can be also be a string
    const DiffContext= createContext();
    const AnoContext= createContext();
function Nati(){
  return(
    <>
    <h1>I am the Parent</h1>
    <h4>The provider value can be as string,
      you can have multiple providers
    </h4>
    <DiffContext.Provider value={"Chinaza"}>
      <AnoContext.Provider value={"Anabelle"}>
        <Bani/>
        <Tap/>
      </AnoContext.Provider>
    </DiffContext.Provider>
    </>
  )
}

function Bani(){
  const user=useContext(DiffContext)
  
  return(
        <>
         <h4>I am a child, my name is {user}</h4>
        </>
  )}

  function Tap(){
    const name=useContext(AnoContext)
    return(
      <>
      <h4>I am also a child, my name is {name}</h4>
      <hr/>
      </>
    )}
//------------------------------------------------------------------------
    function Ref(){
           const [digi, setDigit] = useState(0)

           const prevDigit=useRef("")
          // prevDigit = {current:""}
        function digiHandler(){
          setDigit((digi)=> digi + 1)
          prevDigit.current = digi }

      return (
        
        <div>
          <h1>Use Ref HOOk <button onClick={digiHandler}>Count</button>
          </h1>
          <h3>Digit: {digi}</h3>
          <h3>Previous Digit: {prevDigit.current}</h3>
          <Time/>
        </div>
         )}

         function Time(){
           const [numb, setNumb]=useState(0)
           const prevNumb = useRef("")
          
        useEffect( ()=>{
                  setTimeout(()=>{
                    setNumb((numb)=>numb+1)
                  },1000)
                  prevNumb.current = numb
                },[numb])

          return(
                  <>
                  <h3>Another example of Use Effect and useRef</h3>
                  <h3>Timer: {numb}</h3>
                  <h3>Previous Time: {prevNumb.current}</h3>
                  <Uda/>
                  </>
          )
         }

         function Uda(){
           const [form, setForm] = useState('')
           const prevTyped= useRef('')
           const focused =useRef('')
           const Namz=useRef('')

           function TypeHandler(){
             focused.current.focus();
             focused.current.style.width="200px";
            Namz.current.style.width="150px"
           }
           
           function name(){
            Namz.current.focus();
             focused.current.style.width="150px"
             Namz.current.style.width = "200px"
             
           }
          
          function formHand(e){
            setForm(e.target.value)
            prevTyped.current=form
          }
         
          return(
            <>
           <h2> Use Ref with Focus and width Alternating In a Form</h2>
           <input type="text" value={form} onChange={formHand}
           ref={focused}/>
           <button onClick={TypeHandler}>Focus</button><br/>
           <input type="text" ref={Namz} />
           <button onClick={name}>Name</button>
           <h3>I typed: {form}</h3>
           <h3>Previous Value typed: {prevTyped.current}</h3>
            </>
          )}

          //-----------------------------------------------------------
         const initialstate=0
         const reducer= (state,action)=>{
            switch(action){
               case 'Increase' :return state + 1
               case 'Decrease' : return state - 1
               case 'Reset': return initialstate
               default: return state}
         }

         function Sari(){
           const [count,dispatch]= useReducer(reducer,initialstate)
           return (
             <>
             
             <h2>USE REDUCER HOOK</h2>
             <h3>Count:{count}</h3>
             <button onClick={()=>dispatch("Increase")}>Increase</button>
             <button onClick={()=>dispatch('Decrease')}>Decrease</button>
             <button onClick={()=>dispatch('Reset')}>Reset</button>
             <Sari2/>
             </>
           )}

           const init = {firstCounter:0}
           const reducer2=(state,action)=>{
               switch(action.type){
                 case "Increase":
                   return {firstCounter:state.firstCounter + action.value}
                  case "Decrease":
                   return {firstCounter:state.firstCounter - action.value}
                   case 'Reset':
                     return init
                     default: return state }
           }

function Sari2(){
  const[count, dispatch]=useReducer(reducer2,init)
    return(
       <>
               
       <h2>Example two: UseReducer with Complex state</h2>
        <h3>Count: {count.firstCounter}</h3>
        <button onClick={()=>dispatch({type:"Increase", value: 1})}>
         Increase</button>
        <button onClick={()=>dispatch({type:'Decrease', value : 1})}>
        Decrease</button>
        <button onClick={()=>dispatch({type:"Increase", value: 5})}>
        Increase 5</button>
        <button onClick={()=>dispatch({type:'Decrease', value : 5})}>
        Decrease 5</button>
        <button onClick={()=>dispatch({type:'Reset'})}>
        Reset</button>
        <Doak/>

        </>
           )}

  function Doak() {
    const [data,setData]=useState({name:"",email:""})
    const [item,setItem]=useState([])

    function onchangeName(event){
      setData({...data, name:event.target.value})
     }
    function onchangeEmail(event){
      setData({...data, email:event.target.value})
      }
    function addcontact(event){
      event.preventDefault();
      setItem([...item,{id:Date.now(), value:data.name,vac:data.email}])
      }
    function delContact(id){
      const del = item.filter((R)=> R.id !==id)
      setItem(del)
      }
          
  return (
          <>
              <h3>UseReducer Example Three</h3>
              <h3>There was no use reducer in all its examples.</h3>
              <form >
                 <label>Name:</label>
                 <input type="text" placeholder='name' 
                      onChange={onchangeName}/><br/>
                 <label>Email:</label>
                 <input type="text" placeholder="email" 
                      onChange={onchangeEmail}/><br/>
                 <button onClick={addcontact}>Addcontact</button>
              </form>
              {item.map(item=><div>
                  <h3 key={item.id}>{item.value}</h3>
                  <h3 key={item.id}>{item.vac}</h3>
                  <button onClick={()=>delContact(item.id)}>DelContact</button>
                  </div>)}<br/><hr/>
                  <Hap/>
            </>
                 
            )}
          //----------Use Memo Hook------------------------------
         function Hap(){
           const [count,setcount]=useState(0)
           const[form,setform]=useState('')
           function set(){
            setcount((count)=>count + 1)
           }
            function formChange(event){
              setform(event.target.value)
            }
            
            const isEven= useMemo(()=>{
              let i = 0
              while (i<200000000)i++
              return count % 2===0
            },[count])
             

            // const isEven=()=>{//Without useMemo Hook
            //   let i = 0
            //   while (i<2000000000)i++
            //   return count % 2===0
            // }
           return(
             <>
             <h2>This is useMemo Hook</h2>
             <h2> Count: {count}  
             {isEven? "Even" : "Odd"}
             {/* {isEven()? "Even" : "Odd"} */}
             </h2>
             <button onClick={set}>count</button><br/>
             <input type= "text" value={form}
             onChange={formChange}/>
             <h2>I typed : {form}</h2><hr/>
             <Fina/>
             </>
             
           )}
          //------------------Use Memo-----------------------
           function Fina(){
             return(
               <>
               <h2>This is Use Callback HOOK</h2>
               </>
             )}
     
          



