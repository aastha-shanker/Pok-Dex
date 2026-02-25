document.querySelector(".submit").addEventListener("click", fetchData);

async function fetchData(){
  try{
    const pokemonName = document.getElementById("name").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok){
      alert("That is not a Pokémon!");
      return;
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display= "block";

  } catch(error){
    console.log(error);
  }
}
