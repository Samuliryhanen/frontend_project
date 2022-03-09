window.onload = function (){

  fetch('https://www.ruohonjuuri.fi/products.json?limit=50')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      create_products(data);
    }
  );

  function create_products(data){
    for(var i of data.products){
      var div_item = document.createElement('div');
      var div_img = document.createElement('img');
      div_img.setAttribute('height', '100px');
      div_img.setAttribute('width', '100px');
      div_img.setAttribute('src', i.images[0].src);
      div_img.addEventListener("mouseover", function(e){
        console.log(e.target);
        e.target.style.opacity = 1;
        e.target.style.height = '55%';
        e.target.style.width = '55%';
        e.target.style.boxShadow = '30px 30px 30px 20px #170b04';
      })
      div_img.addEventListener("mouseleave", function(e){
        console.log(e.target);
        e.target.style.opacity = 0.7;
        e.target.style.height = '50%';
        e.target.style.width = '50%';
        e.target.style.boxShadow = null;
      })
      var p_name = document.createElement('p');
      p_name.appendChild(document.createTextNode(i.title));
      var p_price = document.createElement('p');
      p_price.appendChild(document.createTextNode(i.variants[0].price + '€'));
      
      div_item.appendChild(div_img);
      div_item.appendChild(p_name);
      div_item.appendChild(p_price);

      document.getElementsByClassName('items')[0].appendChild(div_item);
    }
  }

}

