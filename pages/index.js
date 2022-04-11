import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
export default function Recipes({recipes}) {
  console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map((recipe,i)=>(
        <RecipeCard key={recipe.sys.id} recipe={recipe}  />
      ))}
       <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}
export async function getStaticProps(){
   let client = createClient({
     space:process.env.CONTENT_SPACE_ID,
     accessToken:process.env.CONTENT_ACCESS_TOKEN,
   });
   const res = await client.getEntries({content_type:'recipe'});
   return{
     props:{
        recipes:res.items
     }
   }
}