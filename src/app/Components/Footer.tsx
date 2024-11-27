import Image from "next/image";

const Footer = () => {
  return (
    <div>



<div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-6 py-5 my-5 ">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
   
        <Image src="/images/Jadoo.png" alt="" height={66} width={152}/>
      </a>
      <p className="text-body-secondary">Book your trip in minute, get full
Control for much longer.
</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3">
      <h5>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mobile</a></li>
        
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help/FAQ</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Press</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Affilates</a></li>

      </ul>
    </div>

    <div className="col mb-3">
      <h5>More</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Airelinefees</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Aireline</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Low fare tips</a></li>
     
      </ul>
    </div>

    <div className="col mb-3">
  <Image src="/images/Social.png" alt="" width={177} height={45}/>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Discover our app</a></li>
   
   <div className="flex gap-3">
     <Image src="/images/Play Store.png" alt="" width={107} height={35}/> <Image src="/images/Google Play.png" alt="" width={107} height={35}/>
     </div>
      </ul>
    </div>

  </footer>
</div>

</div>
  )
}

export default Footer