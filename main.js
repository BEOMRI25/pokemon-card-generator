const card = document.querySelector('.card')
const button = document.querySelector('button')

button.addEventListener('click', generateCard)

async function generateCard() {
  const randomPokemonIndex = Math.floor(Math.random() * 151)
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`)
  const pokemon = await response.json()
  updateCard(pokemon)
}

function updateCard(pokemon) {
  let secondTypeChip = ''
  if (pokemon.types.length === 2) {
    setTypeColors(1, pokemon)
    secondTypeChip = `<span class="type two">${pokemon.types[1].type.name}</span>`
  }

  setTypeColors(0, pokemon)

  card.innerHTML = `
        <span class="hp">HP<span class="hp-num">${pokemon.stats[0].base_stat}</span></span>
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="A Picture Of the Pokemon ${pokemon.name}">
        <span class="name">${pokemon.name}</span>
        <div class="types">
            <span class="type one">${pokemon.types[0].type.name}</span>
            ${secondTypeChip}
        </div>
        <div class="stats">
            <span><span class="stat">${pokemon.stats[1].base_stat}</span><br>Attack</span>
            <span><span class="stat">${pokemon.stats[2].base_stat}</span><br>Defence</span>
        </div>
    `
}

function setTypeColors(index, pokemon) {
  const type = pokemon.types[index].type.name
  const typeColor = getTypeColor(type)
  document.documentElement.style.setProperty(`--type-${index === 0 ? 'one' : 'two'}-color`, typeColor.backgroundColor)
  document.documentElement.style.setProperty(`--type-${index === 0 ? 'one' : 'two'}-text-color`, typeColor.textColor)
}

function getTypeColor(type) {
  switch (type) {
    case 'normal':
      return {
        backgroundColor: '#A8A878',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'fire':
      return {
        backgroundColor: '#F08030',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'water':
      return {
        backgroundColor: '#6890F0',
        textColor: 'white',
      }
    case 'grass':
      return {
        backgroundColor: '#78C850',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'electric':
      return {
        backgroundColor: '#F8D030',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'ice':
      return {
        backgroundColor: '#98D8D8',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'fighting':
      return {
        backgroundColor: '#C03028',
        textColor: 'white',
      }
    case 'poison':
      return {
        backgroundColor: '#A040A0',
        textColor: 'white',
      }
    case 'ground':
      return {
        backgroundColor: '#E0C068',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'flying':
      return {
        backgroundColor: '#A890F0',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'psychic':
      return {
        backgroundColor: '#F85888',
        textColor: 'white',
      }
    case 'bug':
      return {
        backgroundColor: '#A8B820',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'rock':
      return {
        backgroundColor: '#B8A038',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'ghost':
      return {
        backgroundColor: '#705898',
        textColor: 'white',
      }
    case 'dark':
      return {
        backgroundColor: '#705848',
        textColor: 'white',
      }
    case 'dragon':
      return {
        backgroundColor: '#7038F8',
        textColor: 'white',
      }
    case 'steel':
      return {
        backgroundColor: '#B8B8D0',
        textColor: 'var(--pokemon-dark-blue)',
      }
    case 'fairy':
      return {
        backgroundColor: '#EE99AC',
        textColor: 'var(--pokemon-dark-blue)',
      }
  }
}
