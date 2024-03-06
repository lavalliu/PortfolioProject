import UserFavoritesAnimals from "./UserFavoriteAnimals";

export default function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
    return (
      <div>
        <h3>First Name : {user.firstName}</h3>
        <h3>Last Name : {user.lastName}</h3>
        <UserFavoritesAnimals favAnimals = {user.favAnimals} />
      </div>
    );
}


