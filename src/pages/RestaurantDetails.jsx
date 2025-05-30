import {useParams} from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


 const RestaurantDetails = () => {

	const restaurantId = useParams()

const restaurents = [
	{id: "1",
	name: "The Golden Spoon",
	cuisine: "Italian",
	location: "123 Main Street, Cityville",
	rating: 4.5,
	description: "Experience authentic Italian cuisine in a cozy atmosphere.",

	menu: [
		{name: "Spaghetti Carbonara", price: "$15"},
		{name: "Margherita Pizza", price: "$12"},
		{name: "Tiramisu", price: "$8"},
],
},

{id: "2",
	name: "Spice Junction",
	cuisine: "Indian",
	location: "456 Elm Street, Townsville",
	rating: 4.2,
	description: "Saver the flavors of India with our traditional dishes.",

	menu: [
		{name: "Chicken Tikka Masala", price: "$14"},
		{name: "Vegetable Biryani", price: "$12"},
		{name: "Gulab Jamun", price: "$6"},
],
},

{id: "3",
	name: "Sushi Delight",
	cuisine: "Japanese",
	location: "789 Oak Avenue, Villageland",
	rating: 4.7,
	description: "Enjoy exquisite Japanese sushi prepared by master chefs. ",

	menu: [
		{name: "California Roll", price: "$10"},
		{name: "Sashimi Platter", price: "$18"},
		{name: "Green tea Ice Cream", price: "$5"},
],
},


]

const restaurantData = restaurents.find((restaurant) => restaurant.id == restaurantId.restaurantId)
 
console.log(restaurantData)
return (

	<>
	<Header/>
	<main className="container py-4">
		<h1>{restaurantData.name}</h1>
		
		<p className="pt-3">Cuisine: {restaurantData.cuisine}</p>
		<p className="pt-3">Location: {restaurantData.location}</p>
		<p className="pt-3">Rating: {restaurantData.rating}</p>
		<p className="pt-3">{restaurantData.description}</p>
		<h3>Menu</h3>

		<div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>{restaurantData.menu[0].name}</h5>
                <p>Price: {restaurantData.menu[0].price}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>{restaurantData.menu[1].name}</h5>
                <p>Price: {restaurantData.menu[1].price}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>{restaurantData.menu[2].name}</h5>
                <p>Price: {restaurantData.menu[2].price}</p>
              </div>
            </div>
          </div>
        </div>
		</main>
	<Footer/>

	</>
)


}

export default RestaurantDetails;