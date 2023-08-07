export default function BookList() {
   let pageTitle = "Kickass Bouks";
   let book1 = "https://bookshopapocalypse.com/cdn/shop/products/faultinourstarssigned-1sig_1024x1024@2x.jpg?v=1638668974";
   let book2 = "https://bookshopapocalypse.com/cdn/shop/files/goosebumpshauntedmask2015reprint-1sq_300x300.jpg?v=1685592486";
   let book3 = "https://bookshopapocalypse.com/cdn/shop/files/thewalking-1sq_1024x1024@2x.jpg?v=1689633848";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Sorry too big" />
         <img src={book2} alt="Not too big we fixed it" />
         <img src={book3} alt="Aaaaaaa" />
      </div>      
   );
}