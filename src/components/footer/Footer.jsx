const FooterContent = () => {
  return (
    <footer className="text-white">
      <section className="bg-black flex justify-between px-4">
        <div>
          <h2 className="text-3xl font-bold">Join the Renshop Club!</h2>
        </div>
        <div>
          <p className="font-bold">Perks of signing up:</p>
          <ul>
            <li className="uppercase">welcome offer</li>
            <li className="uppercase">exclusive deals</li>
            <li className="uppercase">first dibs on new drops</li>
            <li className="uppercase">
              30-day hassle-free exchanges in stores
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-red text-white">Get 10% Off</button>
        </div>
      </section>
      <section className="bg-red flex">
        <div className="flex">
          <article>
            <h2 className="uppercase">company</h2>
            <ul>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Mission</a>
              </li>
              <li>
                <a href="">Vision</a>
              </li>
              <li>
                <a href="">Stores</a>
              </li>
            </ul>
          </article>
          <article>
            <h2 className="uppercase">help</h2>
            <ul>
              <li>
                <a href="">Refund</a>
              </li>
              <li>
                <a href="">Shipping & Returns</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Warranty</a>
              </li>
            </ul>
          </article>
        </div>
        <div>
          <h1>Need assistance?</h1>
          <p>
            If you have inquiries or need assistance, don&apos;t hesitate to
            ask!
          </p>
          <div></div>
        </div>
      </section>
    </footer>
  );
};

export default FooterContent;
