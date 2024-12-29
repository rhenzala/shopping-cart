const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] mt-16 w-full px-[10%] py-10">
      <div>
        <h1 className="text-4xl font-semibold">About Us</h1>
        <section className="mt-4 flex flex-col gap-4">
          <article className="">
            <p>
              Welcome to Renshoppe, your trusted destination for high-quality
              products and seamless online shopping experiences.
            </p>
            <p>
              At Renshoppe, we believe that shopping should be simple,
              enjoyable, and convenient. That’s why we’re dedicated to bringing
              you a curated selection of products, all in one place.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              To redefine online shopping by offering top-notch products,
              exceptional customer service, and an effortless checkout process,
              ensuring a memorable shopping journey for every customer.
            </p>
          </article>
          <article>
            <h2 className="text-xl font-semibold mb-2">Why Choose us?</h2>
            <ul className="list-disc pl-8">
              <li>
                <span className="font-medium">Wide Range of Products: </span>
                From Electronics to Clothing, we’ve got everything you need.
              </li>
              <li>
                <span className="font-medium">Customer-Centric Approach: </span>
                Your satisfaction is our priority. We’re here to assist you
                every step of the way.
              </li>
              <li>
                <span className="font-medium">Secure Shopping: </span>Our
                platform ensures the highest level of data security so you can
                shop with confidence.
              </li>
              <li>
                <span className="font-medium">Fast Shipping: </span>Get your
                favorite items delivered to your doorstep in no time.
              </li>
            </ul>
          </article>
          <article>
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              To become your go-to online marketplace, setting a benchmark for
              quality and reliability in the e-commerce industry.
            </p>
            <p>
              Whether you’re looking for daily essentials or unique finds,
              Renshoppe is here to help you discover what you love. Start
              shopping with us today and experience the difference!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
