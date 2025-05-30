import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";
import Header from "./components/Header"


export default function App() {
  return (
    <>
    <Header/>
    <main className="container py-4">
      <h1>Feature Restaurant</h1>
    
     
      <img src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?ga=GA1.1.1648237721.1723553493&semt=ais_hybrid" alt="blog 1" className='img-fluid rounded'/>
      <h4>Taste of Italy</h4>
      <p>Italian | Rating: 4.5 </p>
      <p>123 Main Street, Anytown, USA</p>
   

    
     <div>
      <img src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?ga=GA1.1.1648237721.1723553493&semt=ais_hybrid" alt="blog 1"/>
      <h4>Spice Village</h4>
<p>Indian | Rating 4.3</p>
<p>456 Elm Street, Anytown, USA</p>
      </div>
    </main>
    <Footer/>
    </>
  );
}
