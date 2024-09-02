import Card from "./Card"

const App = () => {
  return(
    <>
    <h1 className="text-[60px] text-center my-12">Olx Cards</h1>
    <div className="flex justify-around flex-wrap">
    <Card src="https://images.olx.com.pk/thumbnails/482688016-800x600.webp" price="Rs 360,000" description="14 pro max 256 GB pta approve" location="Gulshan-e-Iqbal, Karachi"/>
    <Card src="https://images.olx.com.pk/thumbnails/476910045-800x600.webp" price="Rs 115,000" description="I Phone 11 Dual Physical Sim Official PTA Approved" location="Jaranwala, Faisalabad"/>
    <Card src="https://images.olx.com.pk/thumbnails/482505443-800x600.webp" price="Rs 188,500" description="iPhone 12 Pro Max PTA APPROVED" location="Wapda Town Phase 1, Lahore"/> </div> <br />
    <div className="flex justify-around flex-wrap">
    <Card src="https://images.olx.com.pk/thumbnails/482260848-800x600.webp" price="Rs 45,000" description="Google pixel 5a 5g / google pixel 5 / pixel 4a 5g /Pixel 4xl" location="Johar Town, Lahore"/>
    <Card src="https://images.olx.com.pk/thumbnails/480971559-240x180.webp" price="Rs 19,999" description="Vivo S1 8Gb 256Gb ( Display fingerprints) 4500 Mah battery 10/10 Condi" location="Ichhra, Lahore"/>
    <Card src="https://images.olx.com.pk/thumbnails/441368640-800x600.webp" price="Rs 11,999" description="Vivo Y83 128 Gb 6 gb Brand new PTA Approved" location="Allama Iqbal Road, Sialkot"/>
    </div>
    
    
    </>
  )

}
export default App