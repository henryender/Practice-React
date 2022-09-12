import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './Header'
import SearchBar from './Search'
import Epp from './Epp'
import axios from 'axios'
import Gary from './Gary'
import Test from './UseContextByme'

function App() {

  return (
    <>
     <div className="App">
       <Test/>
       <Gary/><br/>
       <Header/><br/>
       <SearchBar/><br/>
       <Epp/><br/>
       <LikeArea/>
       <Opel/><br/>
       <Listmap/>
       <NameList/>
       <Gate/>
       <Datti/>
       <Dep/>
       <Deep/>
       <Deeper/>
       <Deepest/>
       <Great color="Black"make="Gucci" />
       <Great color="red" make="Designer"/>
       <Greet name= "Henry" state= "Anambra">
         <p>This is a child prop</p></Greet>

       <Greet name= "Ginika" state="Abia"/>
       
       <Greet name="Somto" state="Russia">
         <button>Click</button>
       </Greet>
       <DestProp color="red" make="Gucci"/>
       <DestProp color="Black" make="Designers"/>

       <Gat color="red" make="Gucci"/>
       <Gat color="Black" make="Designers"/>
       <Have/><br/>
       <Jay/> <br/>
       <Quet/> 
       <Tep/>
       <Tog/><br/>
       <ListItem/><br/>
       <Aina/><br/>
       <Todo/><br/>
       <Mad/><br/>
       <Revan/><br/>
       <Rat/><br/>
       <Tap/><br/>
       <Paso/><br/>
       <DataFetching/>
       <Mat/><br/>
       <Jero/><br/>
       <Mag/>
      </div>
    </>
  );}
  export default App;

  function LikeArea(){
    const [count, setCount] = useState(0)
     function increaseHandler(){ 
      setCount((prev)=> prev + 1);}

     function decreaseHandler(){
        if(count>0){setCount((prev)=>prev - 1)}; 
         }

  return(
      <>
        <button onClick={increaseHandler}>Increase likes </button>
        <button onClick={decreaseHandler}>Decrease likes </button>
        <h2>This page has been liked {count} time</h2>
      </>
    );
  }


function Opel (){

  const [name, setName]=useState("-----")
  const [item, selectedItem] = useState("Audi")
  const[showPassword, setShowPassword]= useState(false)
  const [password, setPassword]=useState("")

  function NameChange(event){setName(event.target.value)}

  function Ubi (event){setPassword(event.target.value)}

    function itemChanged(event){selectedItem(event.target.value)}
    
    function myTee(event){
      if(event.target.value.length<6){alert("Your Password is short")}
    }
     function Rex (){setShowPassword(!showPassword)}
return(
  <>
    <h2>Select from the drop down and see what happens</h2>
    <select onChange={itemChanged}>
      <option>Mercedes</option>
      <option>Audi</option>
      <option>Toyota</option>
    </select>
    <h2>Take this {item} parked here</h2>

    <h2>Event handlers with input appearing as you click</h2>
    <h3>FirstName: <input type="text" onChange={NameChange}/></h3>
    <h2>You typed {name} in the box </h2>
    <h3>Password: <input type="password" onBlur={myTee} onChange={Ubi}/></h3>
       
    <h2>{showPassword ? password :'*'.repeat(password.length)}</h2>
    <button onClick={Rex}>Show password</button>
    
  </>
)}

function Listmap(){
  const numbers = [0,1,2,3,4]
  const numbersMap= numbers.map(numbers=><li>{numbers}</li>)
  return(
    <>
    <div>
      <h2>{numbersMap}</h2>
    </div>
    </>
  );}

function NameList(){
  const person= [
            {id:1,name:'Bruce',age:25, skill:'Driving'},
            {id:2,name:'John',age:27, skill:'Barber'},
            {id:3,name:'Ben',age:22, skill:'react'},
             ]

  const personList= person.map(person=>
       <li> I know {person.name} that is {person.age} with job as {person.skill} </li>)
      //person.map(function(person){return <li>{person.name}<li/>})

  return(
    <>
    <h2>{personList}</h2>
    </>
  )}

//Sample Code for a list with key passed inside a component with props
function Make (props){
  return(
  <>
    <h3>I know {props.design} who is  a {props.work}</h3> 
  </>)};

function Gate (){
  const details= [
    {id:1,name:'Bruce',age:25, skill:'Driver'},
    {id:2,name:'John',age:27, skill:'Barber'},
    {id:3,name:'Ben',age:22, skill:'Doctor'},
     ]

const PersonKey= details.map(details=>
<Make key={details.id} design= {details.name} work={details.skill} />)
  return(
  <>
   <h2>{PersonKey}</h2>
  </>)
}

//ARRAY MAP() AND FILTER()
function Datti(){
  const digits =[5,9,4,6,2,7,10]
  const real = digits.map(function(digits){
  if(digits%2===0){return <li>{digits}</li>}
  else{return null} //for odd numbers digits%2!==0
  });

  const smallNumbers = digits.filter(function(digits){
   return digits< 6})

   const bigNumbers = digits.filter(function(digits){
    return digits> 6})
return (
  <>
  {real}
   <h2>{smallNumbers}</h2>
   <h2>{bigNumbers}</h2>
  </>
  )
}


// Method 1 of Conditionals
const Dep = () => {
  const isloggedon= false;
  if(isloggedon){return <h2>Hello Emeka</h2>}
  else{ return <h2>Hello Chika</h2>}
}

// Methos 2 of condtionals
const Deep = ()=> {
  const isloggedon= true;
  let message = ""
  if(isloggedon){message= <h2>Hello Ikemba</h2>}
  else{message = <h2>Hello Chukwuma</h2>}

  return message
}

//Method 3 of condtionals
//This is with ternary operators
const Deeper = ()=>{
const isloggedin = true;
return (
  <>
   {isloggedin? <h2>Welcome User</h2>: <h2>Please Log in</h2>}
  </>
)}

//Short Circuit Ternary Operators
//They render either the value or nothing
const Deepest = ()=>{
  const isloggedin = true;
  return (
    <>
     {isloggedin && <h2>Please Log in</h2>}
    </>
  )}

  //Props Samples
  function Great(props){
    return (
      <>
      <h3>This is my {props.color} {props.make} suit</h3>
      </>
    )
  }

  //Props with Children props
  //Note that the button and this is a child prop statement are children
 function Greet(props){
  return (
    <>
     <h3>I am {props.name} from {props.state}</h3>
    <h4>{props.children}</h4>
    </>)}

  //Destructuring of props using code on line 211 :Method one
 function DestProp ({color, make}){
   return (
     <>
     <h4>This is my {color} {make} suit</h4>
     </> )}

   //Method two using the code on line 211
   function Gat(props){
     const {color, make} = props
     return(
           <>
           <h4>This is my {color} {make} suit</h4>
          </>)}


// React Hook 

function Have(){
  const [count, setCount]=useState(0)
  
   function counter(){
     setCount(count + 1)
   }
   function counter2(){
    if (count > 0 ){setCount(count- 1)}
    else{setCount(count)}
   }

   return(
     <>
     <h2>Usestate with increment and decrement buttons</h2>
     <button onClick={counter}>+</button>
     <button onClick={counter2}>-</button>
     {count} <br/>
      </>
   )
}

//UseState with Previous and reset button
function Jay (){
  const initialCount = 0
  const [num, setNum]= useState(initialCount)
 
  function add(){
  setNum (prevNum=>prevNum + 1)}

  function reduce(){
   if(num > 0){setNum(prevNum=>prevNum - 1)}
   else{setNum(num)}
 }

  function reset (){
   setNum(initialCount)
 }

  return(
    <>
    <h2>Usestate with previous state</h2>
    <button onClick={reset}>Reset</button>
    <button onClick={add}>Add</button>
    <button onClick={reduce}>Reduce</button>
    {num} <br/>
    </>
  )}

//Usestate with Object
function Quet(){
 const[name, setName]= useState({firstName:"",lastName:""})
 function fname(event){
   setName({...name,firstName: event.target.value})
 }

 function lname(event){
   setName({...name,lastName: event.target.value})
 }

 return(
        <>
        <input type="text"  onChange={fname} />
        <input type="text"  onChange={lname}/>
        <h3>Your Firstname : {name.firstName}</h3>
        <h3>Your Lastname : {name.lastName}</h3>
       </>
       );}

       // UseState Hook with arrays
       function Tep (){
            const[items,setItems]=useState([])

            const lag = items.map(items=>
            <li key={items.id}>{items.value}</li>)

            function addItem(){
              setItems([...items,
                {id: items.length,value: Math.floor(Math.random() * 10) + 1}
              ])}

            return(
              <>
              <h2>Adding item with use state</h2>
              <button onClick={addItem}>Add Item</button>
              <ul>{lag}</ul>
              </>
                )}

//Toggle buttons with Usestate {Boolean}
function Tog(){
  const [toggled, setToggle]=useState(false)
  function clik (){setToggle(!toggled)}
  return(
    <>
    <h3>Toggle button with Usestate</h3>
    {toggled? "It is on":"It is off"}
    <br/>
    <button onClick={clik}>Toggle</button>
    <br/>
    </>
  )}


function ListItem (){
const[item, setItem] = useState([])
const [text, setText]= useState('')

const pot = item.map(item=><li key={item.id}>{item.value}</li>)

function list(){
  setItem([...item,{id:item.length, value:text}])
   }
  
function telo(event){
  setText(event.target.value)
  }

return(
     <>
      <h2>A TODO LIST</h2>
      <input type="text" onChange={telo}/>
      <button onClick={list}>Add</button>
     
      <ul>{pot}</ul>
     </>
)}

function Aina(){
const [name, setName]=useState({foreName:"",age:"",nationality:""})
function onchangeName(event){
  setName({...name,foreName: event.target.value})
}
function onchangeAge(event){
  setName({...name,age:event.target.value})
}

function onchangeNationality(event){
  setName({...name,nationality: event.target.value})
}
function onsubmit(event){
  event.preventDefault();
  alert(
    "Thanks for your Application, confirm your details, your name is " +
    name.foreName + " and you are " + name.age  + ", country of origin: " +
    name.nationality)

  console.log(
    "Thanks for your Application, confirm your details, your name is " +
    name.foreName + " and you are " + name.age  + ", country of origin: " +
    name.nationality)

  }

return(
  <>
    <form onSubmit={onsubmit} >
      <label>Forename: </label>
      <input type="text"  onChange={onchangeName}/><br/>
      <label>Age: </label>
      <input type="number" onChange={onchangeAge}/><br/>
      <label>Nationality :</label>
      <select onChange={onchangeNationality} >
       <option></option>
       <option>Nigeria</option>
       <option>Ghana</option>
       <option>Congo</option>
      </select><br/>
      <input type="submit"/>

    </form><br/>
  </>
)}

function Todo(){
  const[item, setItem]=useState([])
  const[form ,setForm]=useState('')

  const ulo= item.map(item=><div key={item.id}>{item.value}
    <button onClick={del}>Remove</button>
    </div>)

  function del(id){
  const nat = item.filter(item=>item.id !==id)
  setItem(nat)
  }

  function onchangeForm(event){
    setForm(event.target.value)
  }

  function clicker(){
    setItem([...item, {id:item.length,value:form}]); 
  }

  return(
    <>
    <input type="text" onChange={onchangeForm}/>
    <button onClick={clicker}>ADD</button>
    <div>
      <p>{ulo}</p>
      
    </div>
      
    
    </>
  )
}




function Mad(){
  const [list, setList]= useState([])
  const [input, setInput] = useState('')


 function onInputChange(event){
   setInput(event.target.value)
 }

 const AddTodo= ()=>{
   const newTodo={id:Math.random(), value:input};
   setList([...list,newTodo]);
   setInput('')
 }
 function delt(id){
   setList(list.filter(todo=>todo.id !==id));
 }

return(
  <>
  <input type="text" value={input} onChange={onInputChange}/>
  <button onClick={AddTodo}>ADDItem</button>
  <ul>
    {list.map(todo=><li key={todo.id}>{todo.value}
    <button onClick={()=> delt(todo.id)}>X</button></li>)}
  </ul>
  </>
     )
}

//UseState with Array list
const classmates=
["Chike","Obi","James","Mark","Felix","Andrew","Ifenna","Henry","junior"]

function Revan(){
const [Team, setTeam]=useState([]);

function AddTeamHandler(name){
  setTeam(members=>[...members,name])
  //Adds name from the Classmates list to the Basket Ball team
}

function RemoveHandler(name){
  setTeam(members=>{
     const result= [...members];result.splice(members.indexOf(name),1)
     return result;
     //This removes a name from the Basket team and add back to classmates
   })
}

return(
  <>
  <h2>UseState with list of Array</h2><br/>
  <h2>Classmates</h2>
  <ul>
    {
    classmates.map(name=> 
      {if(Team.includes(name)) return null;//To make sure name appears only once
      return <div key={name}>{name}
      <button onClick={()=>AddTeamHandler(name)}>Add</button>
      </div>})
    }
  </ul>
  <h2>Basketball Team</h2>
  <ul>
    {Team.map(name=><div key={name}>{name}
    <button onClick={()=>RemoveHandler(name)} >Remove</button>
    </div>)}
  </ul>
   
  </>
)}


//THE USE EFFECT HOOK
function Rat(){
const[count, setCount]=useState(0)

useEffect(()=>{setTimeout(()=>{setCount((count)=> count +1)
    },1000)
})//Use Effect with no dependency
return(
  <>
  <h2>This has rendered {count} times</h2>
  </>
)}

function Tap(){
const[Count, setcount]=useState(0)

useEffect(()=>{setTimeout(()=>{setcount((Count)=> Count + 1);
  },1000);
},[])//Use Effect with dependency
return(
  <>
   <h3>This can only be rendered {Count} time</h3>
  </>
)}

function Paso(){
  const [number , setnumber]=useState(0);
  const [figure, setFigure] = useState(0);

  function addHandler(){setnumber((number)=> number + 1)}

  useEffect(()=>{setFigure(()=>number *3);},[number]);

  return(
    <>
      <h2>Use Effect Hook in action</h2>
      <button onClick={addHandler}>+</button>
      <h3>Count:{number}</h3>
      <h3>Calculation: {figure}</h3>

    </>
  )}


//Fetching Data with UseEffect
function DataFetching(){
  const [post, setpost]=useState({});
  const [id, setId]=useState(1);
  const[IdfromButton,setIdfromButton] =useState(1);
 useEffect(()=>{
   axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
   .then(res=>{setpost(res.data)})
   .catch(err=>{console.log(err)})
 },[IdfromButton,id]) //Remove id passed here to make fetch button work

 function OnchangeId(e){
   setId(e.target.value)
 }

 function OnclickId(){
  setIdfromButton(id)
}
  return(
    <>
    <h2>UseEffect for fetching data </h2>
    <input type="text" value={id} onChange={OnchangeId}/>
    <button onClick={OnclickId}>Fetch</button>
    <h3>{post.title}</h3>
    {/* {post.map(post=><li key={post.id}>{post.title}</li>)} */}
    </>
  )}

  //Use Effect  Practice
   function Mat(){
    const[show, setShow]= useState(false);
    
     function handleChange(){
       setShow(!show)
     }
       return(
      <>
      <button onClick={handleChange}>ShowInput</button>
      {show && <Text/>}
      </>
    )
  }function Text(){
    const [text, setText] =useState("");

    useEffect(()=>{
      console.log("Component Mounted");

      return ()=>{console.log("Component Unmounted")}
    },[])
  // without dependency array: Mount and Update , with dependency array: Mount alone,
  //With a variable passed in the dependency array: Mount and Update only when changes are done to the variable
    function handleInput(e){
      setText(e.target.value)
    }
   return(
       <>  
      <input type="text" value={text} onChange={handleInput}/>
      <h3>{text}</h3>
       </>
    )
  }

  //Fetch Data with UseEffect with a delay and loading display

  function Jero(){
    const[deal, setDeals]=useState([])
    const[loading,setloading]= useState(true)

    useEffect(()=>{
        setTimeout(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{setDeals(response.data)})
        setloading(false)
        },5000)
      },[setDeals])
    return(
      <div>
      <h2>Data for publication fetched with UseEffect</h2> 
      {loading &&<p>It is loading...</p>}
      {!loading &&<>{deal.map(deals=><li key={deals.id}>{deals.email}</li>)}</>}
    </div>
      )}

function Mag (){
const [resource, setResource]=useState("post")
const [item,setItem]=useState([])

useEffect(
  ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res=> {setItem(res.data)})
  },[resource])

function HandlePost(){
  setResource("Post")
}

function HandleUser(){
  setResource("User")
}

function HandleComment(){
  setResource("Comment")
}

return(
  <>
  <button onClick={HandlePost}>Post</button>
  <button onClick={HandleUser}>User</button>
  <button onClick={HandleComment}>Comment</button><br/>
  {resource}
  {item.map(data=><li>{data.name}</li>)}
  </>
)
}

