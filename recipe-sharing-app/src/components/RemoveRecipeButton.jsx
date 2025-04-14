import { useRecipeStore } from '../store/recipeStore';

const RemoveRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '4px' }}>
      Delete Recipe
    </button>
  );
};

export default RemoveRecipeButton;
