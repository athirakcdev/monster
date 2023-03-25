import { useState ,useEffect} from "react";
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"
import './App.css';

const App=()=>{
    const [searchField,setSearchField]=useState("")
    // const [title,setTitle]=useState("")
    const [monsters,setMonsters]=useState([])
    const [filteredMonsters,setFilteredMonsters]=useState([monsters])
    console.log("render")
    useEffect(()=>{
      console.log("useeffect1")
      console.log("effect fired")
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((users)=>setMonsters(users))
    },[])

     useEffect(()=>{
      console.log("useeffect2")
      console.log({monsters})
      const newFilteredMonsters = monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField)   
    })
     setFilteredMonsters(newFilteredMonsters)
     console.log("effect is firing")
     console.log({newFilteredMonsters})
     },[monsters,searchField])

    const onSearchChange=(event)=>{
    const searchFieldString=event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
    }
    // const onTitleChange=(event)=>{
    //   const searchFieldString=event.target.value.toLocaleLowerCase()
    //   setTitle(searchFieldString)
    //   }


  return (
        <div className="App">
        <h1 className="app-title">Monster Rodolex</h1>
        <SearchBox className="monster-search-box" 
        placeholder="search monsters" 
        onChangeHandler={onSearchChange}/>
        {
          // <br/>
        // <SearchBox className="title-search-box" 
        // placeholder="set title" 
        // onChangeHandler={onTitleChange}/>
        }
        <CardList monsters={filteredMonsters}/>
  
        </div>
      );
}

// class App extends Component {
//   constructor(){
//     super()
//     this.state={
//        monsters:[],
//        searchField:""
//     }
//   }
//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response)=>response.json())
//     .then((users)=>this.setState(()=>{
//       return {monsters:users}
//     },
//     ()=>{
//       console.log(this.state)
//     }))
//   }
//   onSearchChange=(event)=>{
//     console.log(event.target.value)
//     const searchString=event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//      return {searchField: searchString}
//     })
// }
// render(){
//   const {monsters,searchField}=this.state
//   const {onSearchChange}=this
//   const filteredMonsters = monsters.filter((monster)=>{
//     return monster.name.toLocaleLowerCase().includes(searchField)
    
// })
// console.log(filteredMonsters)
//   return (
//     <div className="App">
//     <h1 className="app-title">Monster Rodolex</h1>
//     <SearchBox className="monster-search-box" placeholder="search monsters" onChangeHandler={onSearchChange}/>
//     <CardList monsters={filteredMonsters}/>
//     </div>
//   );
// }
 
// }

export default App;

