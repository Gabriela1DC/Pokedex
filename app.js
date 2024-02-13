const getTypeColor = type => {
  const normal = '#F5F5F5'
  return {
    normal,
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    ice: '#DEF3FD',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    ghost: '#CAC0F7',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    fighting: '#E6E0D4'
  }[type] || normal
}

pokemonCount=40

const urlBase='https://pokeapi.co/api/v2/pokemon?offset=0&limit=30'

colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors)

getPokemons = async (id) => {
  const url=`https://pokeapi.co/api/v2/pokemon/${id}`
  const resp = await fetch(url)
  const data = await resp.json()
  return data
}

fetchPokemon = async ()=>{
  for(let i = 1; i<=pokemonCount; i++){
    pokes = await getPokemons(i)
    createCardsPokemon(pokes)
  }
}

const createCardsPokemon = (pokes) => {

  // console.log(pokes)
    const pokeTypes = pokes.types.map(type=>type.type.name)
    // console.log(pokeTypes)
    // tt=pokeTypes.map(type=>{
    //   if(type.length>1){
    //     console.log(type)
    //   }else{
    //     console.log(pokeTypes)
    //   }
    // })
    const types=mainTypes.find(type => pokeTypes.indexOf(type)>-1)
    // console.log(types)
    // const colors = colors[types]
    var container = document.querySelector('.pokedex')

        container.innerHTML+= `
        <div class="card">
          <h3 class="card-subtitle">#00`+ pokes.id +`</h3>
          <h1 class="card-title">`+ pokes.name +`</h1>
          <img class="card-image" src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokes.id}.png>
          <h4>type:</h4>
          <h4 >${pokeTypes}<h4>
        </div>
      `
}

fetchPokemon();

    