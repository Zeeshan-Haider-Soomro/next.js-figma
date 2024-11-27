import Image from "next/image";

const Banner1 = () => {
  return (
    <div>
      
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image src="/Image (7).png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className=" fw-semibold 1h-1 mb-3 text-gray-600">Easy and Fast</h1>
        <h1 className="display-5 fw-bold text-blue-950 lh-1 mb-3">Book your next trip <br></br>
        in 3 easy steps
</h1>
        <p className="lead">Built Wicket longer admire do barton vanity itself do in it.<br></br> Preferred to sportsmen it engrossed listening. Park gate<br></br> sell they west hard for the.</p>
      



        <div className="container px-4 py-5" id="icon-grid">
    

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-1 g-4 py-5">
      <div className="col d-flex align-items-start">
       
        <Image src="/Group 7.png" className="bi text-body-secondary flex-shrink-0 me-3" alt="" width={47} height={48}/>
        <div> 
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Choose Destination</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br></br>
          adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
       
        <Image src="/Group 12.png" className="bi text-body-secondary flex-shrink-0 me-3" alt="" width={47} height={48}/>
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Make Payment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br></br>
          adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
       
        <Image src="/Group 11.png" className="bi text-body-secondary flex-shrink-0 me-3" alt="" width={47} height={48}/>
        <div>
          <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Reach Airport on Selected Date</h3>
          <p>Lorem ipsum dolor sit amet, consectetur <br></br>
          adipiscing elit. Urna, tortor tempus. </p>
        </div>
      </div>
 
   
    </div>
  </div>

      </div>
    </div>
  </div>






  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image src="/Group 64.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h4 className=" fw-semibold 1h-1 mb-3 text-gray-600">TESTIMONIALS</h4>
        <h1 className="display-5 fw-bold text-blue-950 lh-1 mb-3">What people say<br></br>
      
        about Us.</h1>

       
      

<div className="d-grid gap-2 d-md-flex justify-content-md-start" >
                <Image src="/Group 61.png" className="img-fluid"  alt="CTA" width={87} height={12} />
            </div>
            
      </div>
    </div>
  </div>




<div className="flex justify-center">
    <Image src="/logos (1).png" alt="" width={1073} height={162}/>
</div>





<div className="bg-slate-100  pt-10  rounded-tl-[80px] h-72 container">
    <div className="flex justify-end ">

<Image src="/arrow.png"  alt="" width={70} height={70}/>
</div>
    <h1 className="text-blue-950 text-center">Subscribe to get information, latest news and other<br></br>
    interesting offers about Jadoo</h1>
    <div className="flex justify-center  ">
    
    <Image src="/Group 46.png"  alt="" width={21} height={18} /><input type="text" placeholder="Your Email"></input>
    <button type="button" className="btn btn-danger ">Subscribe</button>
    </div>

</div>





    </div>
  )
}

export default Banner1