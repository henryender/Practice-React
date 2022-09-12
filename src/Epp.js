const Epp = () => {
   function afterClicked(ev){ 
       console.log(ev.target.value)
        }
  return (
    <>
     <h2>Event Listeners</h2>
    <select onClick={afterClicked}>
        <option>Apple</option>
        <option>Orange</option>
        <option>Guava</option>
    </select>
    </>
    
  )
}
export default Epp

