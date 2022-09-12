

 const SearchBar = () => {

     function submitted(ev){console.log('submitted')}

     function focused(ev){console.log('onFocus')}

     function changed(ev){console.log('onInput',ev.target.value)}

     function clicked(ev){console.log('clicked')}

  return (
    <div>
        <section>
            <form onSubmit={submitted}>
                <input type="text" name="keyword" placeholder ="Keyword" 
                onFocus={focused}
                onInput={changed}
                />
                <button id="submit" onClick={clicked}>Search</button>
            </form>
        </section>
    </div>
  )
}
export default SearchBar