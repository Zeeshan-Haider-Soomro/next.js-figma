import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/images/Image (6).png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-semibold 1h-1 mb-3 text-orange-600">
              Best Destinations around the world
            </h1>
            <h1 className="display-5 fw-bold text-blue-950 lh-1 mb-3">
              Travel, enjoy<br></br>
              and live a new<br></br>
              and full life
            </h1>
            <p className="lead">
              Built Wicket longer admire do barton vanity itself do in it.
              <br></br> Preferred to sportsmen it engrossed listening. Park gate
              <br></br> sell they west hard for the.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Image
                src="/images/CTA.png"
                className="img-fluid"
                alt="CTA"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
