import Image from "next/image";

const Card = () => {
  return (
    <div>
       <div className='text-center'>
       <h4 className='text-gray-500'>CATEGORY</h4>
       <h1>We Offer Best Services</h1>
       </div>


       <div className="container px-4 py-5" id="featured-3">
 
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center tbg-gradient fs-2 mb-3">
 
          <Image src="/images/Group 48.png" alt="" height={90} width={90}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Calculated Weather</h3>
        <p>Built Wicket longer <br></br>admire do barton<br></br> vanity itself do in it.</p>
        
      </div>

      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <Image src="/images/Group 51.png" alt="" height={90} width={90}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Best Flights</h3>
        <p>Engrossed listening.<br></br> Park gate sell they<br></br> west hard for the.</p>
       
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
    
          <Image src="/images/Group 49.png" alt="" height={90} width={90}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Local Events</h3>
        <p>Barton vanity itself do<br></br> in it. Preferd to men it<br></br> engrossed listening. </p>
       
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
        <Image src="/images/Group 50.png" alt="" height={90} width={90}/>
        </div>
        <h3 className="fs-2 text-body-emphasis">Customization</h3>
        <p>We deliver outsourced<br></br>
aviation services for<br></br>
military customers</p>
      </div>
    </div>
  </div>




<div className="flex flex-wrap justify-center gap-4 md:justify-evenly">
  <Image 
    src="/images/Destination.png" 
    alt="Destination 1" 
    width={315} 
    height={457} 
    className="w-full sm:w-[315px] h-auto"
  />
  
  <Image 
    src="/images/Destination (2).png" 
    alt="Destination 2" 
    width={315} 
    height={457} 
    className="w-full sm:w-[315px] h-auto"
  />
  
  <Image 
    src="/images/Destination (1).png" 
    alt="Destination 3" 
    width={315} 
    height={457} 
    className="w-full sm:w-[315px] h-auto"
  />
</div>






</div>

  )
}

export default Card;