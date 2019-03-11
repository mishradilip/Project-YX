var prodJson = [{
        "title": "HRX Soul Deo, For Parlour",
        "price": "400",
        "image": "./images/download-1.jpeg",
        "tag": "Newest"
    },
    {
        "title": "Livaite | LIVAITE MAKEUP LINE",
        "price": "300",
        "image": "./images/download-2.jpeg",
        "tag": ""
    },
    {
        "title": "ONLINE GROCERY STORE MADURAI",
        "price": "100",
        "image": "./images/download-3.jpeg",
        "tag": "Popularity"
    },
    {
        "title": "Mortein Coil Red",
        "price": "400",
        "image": "./images/download-4.jpeg",
        "tag": ""
    },
    {
        "title": "Pathmeda Gavya Plus Soap",
        "price": "100",
        "image": "./images/download-5.jpeg",
        "tag": "Popularity"
    },
    {
        "title": "Tricho Care Scalp Stimulent Hydrating",
        "price": "200",
        "image": "./images/download.jpeg",
        "tag": "Newest"
    },
    {
        "title": "Crystal Secret Black Mask",
        "price": "300",
        "image": "./images/images-2.jpeg",
        "tag": "Newest"
    },
    {
        "title": "Buy Mixer Grinders Online at Tata CLiQ",
        "price": "100",
        "image": "./images/images-3.jpeg",
        "tag": ""
    },
    {
        "title": "Sample product",
        "price": "100",
        "image": "./images/images-4.jpeg",
        "tag": "Popularity"
    },
    {
        "title": "Perfect Plastic Putty - Plastic Model",
        "price": "200",
        "image": "./images/images-5.jpeg",
        "tag": ""
    },
    {
        "title": "Bee Caps Nature Cure Bee 120 Caplet",
        "price": "300",
        "image": "./images/images-6.jpeg",
        "tag": "Popularity"
    },
    {
        "title": "Product sample",
        "price": "500",
        "image": "./images/images-7.jpeg",
        "tag": "Popularity"
    },
    {
        "title": "Nissin | Cup Noodles – The original",
        "price": "400",
        "image": "./images/images.jpeg",
        "tag": "Popularity"
    }
]
var arr = [];
getProducts();

// Get product form product json
function getProducts() {
  arr = [];
  for (let i = 0; i < prodJson.length; i++) {
    arr.push('<li class="product-item-bock"><div class="product-item"><p class="tag-item '+ prodJson[i].tag.toLowerCase() +'">'+ prodJson[i].tag +'</p><div class="product-img-block flex"><img src="' + prodJson[i].image + '"></div><div class="product-detail-box"><span class="title">' + prodJson[i].title + '</span> <p class="price"> Rs. ' + prodJson[i].price + '</p></div></div></li>');
  }
  document.getElementById("productList").innerHTML = arr.join('');
}

// Product search
function productSearch() {
    var input, filter, ul, li, title, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("productList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        title = li[i].getElementsByTagName("span")[0];
        txtValue = title.textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Toggle Sort By dropdown
function toggleSortBy() {
  var sortEle = document.getElementById("sortBy");
  if (sortEle.style.display === "none") {
    sortEle.style.display = "block";
  } else {
    sortEle.style.display = "none";
  }
}

// Sort by product
function sortBy(sortType, sortoption) {
  var sortEle = document.getElementById("sortBy");
  sortEle.style.display = "none";
  if(sortType == 'price'){
    prodJson.sort(function(a, b) {
      //if sortoption is true then low to high else high to low
      return sortoption ? (a.price - b.price) : (b.price - a.price);
    });
  } else {
    var popArr = prodJson.filter(item=>item.tag.toLowerCase() == sortType.toLowerCase());
    var otherArr = prodJson.filter(item=>item.tag.toLowerCase() != sortType.toLowerCase());
    prodJson = popArr.concat(otherArr);
  }
  getProducts();
}
