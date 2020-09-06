import React from "react";
// import Data from "../dataProductInfo.json";

const ProductInfo = (props) => {
  console.log(props);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    /*
If you want to add more url images, you have to add 2 path inside the JSON file 
that contains all the data used, check the App.js in the imports to be sure which json 
data you are using. If you are just starting with react props, read the App.js carefully
and notice that if starts there, then it s passed through PROPS to Product and then to ProductInfo,
but as you see inside the ProductInfo.js , you can add whatever you want here:

    id,
      productName,
      url,
      url2,
      price,
      inventory,
      tags,
      label,
      link,
      descriptionLong,
      delivery,
    } = item;



    */
    //
    //
    //
    const {
      id,
      productName,
      url,
      url2,
      price,
      inventory,
      tags,
      label,
      link,
      descriptionLong,
      delivery,
    } = item;
    //
    //
    //
    return (
      <div key={id} className="box-quote">
        {/* // */}
        <div className="productInfo-boxImg">
          <img className="img-box" src={url2} alt={label} />
        </div>
        {/* // */}
        <div className="productInfo-boxDescription">
          <h3 className="headline-productName">{productName}</h3>
          <h4>{inventory}</h4>
          <h5>&euro; {price}</h5>
          <h6>{label}</h6>
          <p>{descriptionLong}</p>
          <span>{delivery}</span>
          <a href={link}>More info</a>
        </div>
      </div>
      //
    );
  });

  return (
    <React.Fragment>
      <div className="product-info-banner"></div>

      <h1>AW/20 </h1>
      <p>All, Collection</p>

      <div className="product-info">{moreInfo}</div>

      <div className="footer-product-info">
        <p> &#169; 2020</p>

        <div className="insta">
          <div className="dot"></div>
          <p>facebook</p>
        </div>
        <ol>
          <ul>
            <li>ONLINE CATALOGUE 2019</li>
            <li>TERMS &amp; CONDITIONS </li>
            <li>PRIVACY POLICY</li>
          </ul>
          <ul>
            <li>OUR STORY</li>
            <li>CAREERS</li>
            <li>SALES</li>
          </ul>
          <ul>
            <li>CLAIMS</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
          </ul>
        </ol>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;

/*




import React from "react";

const ProductInfo = (props) => {
  console.log(props);
  const selectedItem = props.data.filter((item) => item.id == props.id);
  const moreInfo = selectedItem.map((item) => {
    //
    //
    //
    const {
      id,
      productName,
      url,
      price,
      inventory,
      tags,
      label,
      link,
      descriptionLong,
      delivery,
    } = item;
    //
    //
    //
    return (
      <div key={id} className="box-quote">
      
// 
        <div className="productInfo-boxImg">
          <img className="img-box" src={url} alt={label} />
        </div>
// 
        <div className="productInfo-boxDescription">
          <h3 className="headline-productName">{productName}</h3>
          <h4>{inventory}</h4>
          <h5>&euro; {price}</h5>
          <h6>{label}</h6>
          <p>{descriptionLong}</p>
          <span>{delivery}</span>
          <a href={link}>More info</a>
        </div>
      </div>
      //
    );
  });

  return (
    <React.Fragment>
      <div className="product-info-banner"></div>

      <h1>AW/20 </h1>
      <p>All, Collection</p>

      <div className="product-info">{moreInfo}</div>

      <div className="footer-product-info">
        <p> &#169; 2020</p>

        <div className="insta">
          <div className="dot"></div>
          <p>facebook</p>
        </div>
        <ol>
          <ul>
            <li>ONLINE CATALOGUE 2019</li>
            <li>TERMS &amp; CONDITIONS </li>
            <li>PRIVACY POLICY</li>
          </ul>
          <ul>
            <li>OUR STORY</li>
            <li>CAREERS</li>
            <li>SALES</li>
          </ul>
          <ul>
            <li>CLAIMS</li>
            <li>FAQ</li>
            <li>CONTACT US</li>
          </ul>
        </ol>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;







*/
