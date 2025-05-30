import Header from "../components/Header";
import Footer from "../components/Footer"


function About(){
	return(
		<>
		<Header/>
		<main className="container py-4">
			<h1>About Our Restaurants</h1>
			<div>
			<p>Restaurants know the importance of a strong first impression. It's why they invest in exterior design, decorate their entranceways and train hosts to welcome guests with a warm smile.</p>
			</div>
			<div>

			<p>Nowadays, however, more than 70% of diners visit a restaurant's website before deciding where to dine, which means the first impression happens long before they set foot on-premises. It happens online. And when it does, the restaurant description plays a pivotal role.</p>
</div>
<div>

			<p>A good restaurant description needs to make a strong first impression on would-be diners. This means the writing should be grammatically sound and typo-free — but it also means the content should make strategic sense for your brand.</p>
</div>
	</main>
<Footer/>
		</>
	)
}

export default About;