
export default function UserFavoritesAnimals({favAnimals}) {
    return (
        <div>
            <h3>Favorite Animals are:</h3>
            <ol>
                {favAnimals.map(favAnimal => <li>{favAnimal}</li>)}
            </ol>
        </div>
    );
    }