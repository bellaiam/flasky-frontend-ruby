import Restaurant from "./Restaurant";
import  PropTypes  from "prop-types";
// const RestaurantList = (props) => {

  // const data = [
  //   {id:1,name:"Salty's",cuisine:"Seafood", rating:4.8,distance:"5 miles"},
  //   {id:2,name: "Toulouse",cuisine:"Creole", rating:2.5,distance:"2 miles"},
  //   {id:3,name:"Tanoor",cuisine:"Arab", rating:4,distance:"2.5 miles"},
  //   {id:4,name:"Meet",cuisine:"Korean BBQ", rating:4.5,distance:"1 miles"}]
  const RestaurantList = ({ data }) => {
    const restaurantComponents = data.map((restaurant) => {
      return (<Restaurant 
      key={restaurant.id}
      name={restaurant.name} 
      cuisine={restaurant.cuisine} 
      rating={restaurant.rating} 
      distance={restaurant.distance}
      />
      );
    });
      return (
      <div>
        <h1> Restaurant List </h1>
        {restaurantComponents}
      </div>
    );
  };

RestaurantList.propTypes = {
  // data:PropTypes.array.isRequired
  data:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
  })).isRequired, // isRequired should be both in the array itself and every objet

};
export default RestaurantList;
