function navbar() {
  return `     <div class="main">
      <div class="navbar">
        <div class="undertopnav">
          <div class="leftuppernavbar">
            <div><i class="fas fa-home"></i></div>
            <div><i class="fas fa-phone-alt">Orders 0800 731 1256</i></div>

            <div><i class="fas fa-envelope">Email us</i></div>
            <div>Subscribe to our Newsletter</div>
            <div>
              <input type="text" placeholder="Email us" />
              <button><i class="fa fa-envelope"></i></button>
            </div>
          </div>
          <div class="rightuppernavbar">
            <div><i class="fas fa-shopping-cart">Basket</i></div>
            <div>Login</div>
            <div> <a href="../../views/register.ejs">Register</a></div>
          </div>
        </div>

        <div class="topnavbottom">
          <div>
            <div><img src="../image/facebook.jpeg" alt="" /></div>

            <img
              src="https://img.icons8.com/material-rounded/24/000000/twitter.png"
            />

            <img
              src="https://img.icons8.com/material-sharp/24/000000/facebook-new.png"
            />

            <img
              src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png"
            />
          </div>

          <div><img src="../image/lovelula.png" alt="" /></div>
          <div><img src="../image/freedelivery.png" alt="">
            <form action=""><input type="text"><button><i class = "fas fa-envelope"></i></button></form>
          </div>
        </div>
        <div class="nav">
          <div><a href="../../views/index.ejs"><i class = "fa fa-home"></i></a></div>
          <div>  <a href="../../views/brands.ejs">BRANDS</a></div>
          <div><a href="../../views/products.ejs">PRODUCTS</a></div>
          <div><a href="../../views/skincare.ejs">SKINCARE</a></div>
          <div><a href="makeup.html">MAKEUP</a></div>
          <div><a href="body.html">BODY</a></div>
          <div><a href="../../views/hair.ejs">HAIR</a></div>
          <div><a href="nail.html">NAILS</a></div>
          <div><a href="vegan.html">VEGAN</a></div>
          <div><a href="../../views/gift.ejs">GIFTS</a></div>
          <div><a href="offers.html">OFFERS</a></div>
          <div><a href="beautybox.html">BEAUTY BOX</a></div>
        </div>
      </div>
    </div>`;
}

export default navbar;