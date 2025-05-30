import Header from "../components/Header";
import Footer from "../components/Footer"
import {Link} from "react-router-dom";




function Restaurants() {
  return (

    <>
    <Header/>
    <main className="container py-4">
      <h1>Restaurants</h1>
      <div className="card d-flex flex-row mb-4">
        <img
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?ga=GA1.1.1648237721.1723553493&semt=ais_hybrid"
          style={{ width: "30%", objectFit: "cover" }}
          alt="Taste of India" />
        <div className="card-body">
          <h5 className="card-title">The Golden Spoon</h5>
          <p className="card-text">
            Enjoy authentic Indian cuisine at Taste of India. Explore a variety of delicious dishes from diffrent regions of India.
          </p>
        <p className="text-muted">Rating:4.7 | Open Now</p>
        <Link to="/restaurants/1" className="btn btn-primary">Read More</Link>
         </div>
         </div>

    
      
      <div className="card  d-flex flex-row">
        <img
          src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?ga=GA1.1.1648237721.1723553493&semt=ais_hybrid"
          style={{ width: "30%", objectFit: "cover" }}
          
          alt="Pizza Paradise"
        />
        <div className="card-body">
          <h5 className="card-title">Spice Junction</h5>
          <p className="card-text">
           Indulge in mouth-watring pizzas at Pizza Paradise. With a variety  of toppings and crusts, it's a pizza lover's dream.
          </p>
          <p className="text-muted">Rating: 4.5 | Open Now</p>
          <Link to="/restaurants/2" className="btn btn-primary">Read More</Link>
        </div>
      </div>


      <div className="card  d-flex flex-row">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800"
          style={{ width: "30%", objectFit: "cover" }}
          
          alt="Pizza Paradise"
        />
        <div className="card-body">
          <h5 className="card-title">Sushi Delight</h5>
          <p className="card-text">
           Indulge in mouth-watring pizzas at Pizza Paradise. With a variety  of toppings and crusts, it's a pizza lover's dream.
          </p>
          <p className="text-muted">Rating: 4.5 | Open Now</p>
          <Link to="/restaurants/3" className="btn btn-primary">Read More</Link>
        </div>
      </div>
    </main>

    <Footer/>
    </>
  );
}

export default Restaurants;
