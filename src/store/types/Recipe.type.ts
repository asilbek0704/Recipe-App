type Recipe = {
  id: string,
  title: string,
  cooktime: number,
  servings: number,
  instructions: string,
  ingredients: [string, string] | []
}

export default Recipe