
      // let toggleButton = document.querySelector('.toggle-button');
      // let dropdown = document.querySelector('.dropdown');
      // const icon = toggleButton.querySelector('i'); // Get the <i> icon inside the button

      // toggleButton.addEventListener('click', function() {
      //   dropdown.classList.toggle('hidden');
      //   dropdown.classList.toggle('flex');     
        
        
      //   if (dropdown.classList.contains('flex')) {
      //     icon.classList.remove('fa-bars');
      //     icon.classList.add('fa-xmark');
      //   } else {
      //     icon.classList.remove('fa-xmark');
      //     icon.classList.add('fa-bars');
      //   }

        
        
      // });

let toggleButton = document.querySelector('.toggle-button');
let dropdown = document.querySelector('.dropdown');
const icon = toggleButton.querySelector('i');

toggleButton.addEventListener('click', function () {
  dropdown.classList.toggle('hidden');
  dropdown.classList.toggle('flex');

  if (dropdown.classList.contains('flex')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});
    

// swiper


let project = document.getElementById('project');
let clients = document.getElementById('clients');   
let awards = document.getElementById('awards');


  let count = 0
  let count2 = 0;
  let count3 =  0;

  let interval1 = setInterval(function(){
    count++;
    project.innerText = count + "+";
   

    if(count === 880) { 
        clearInterval(interval1);   
      
    }
  },8);

 let interval2 = setInterval(function(){
    count2++;
    clients.innerText = count2 + "+";
   

    if(count2 === 678) { 
        clearInterval(interval2);   
      
    }
  },10);

 let interval3 = setInterval(function(){
    count3++;    
    awards.innerText = count3 + "+";   

    if(count3 === 121) { 
        clearInterval(interval3);   
      
    }
  },10);


// owl carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

  $(document).ready(function(){
  $(".testimonal-theme").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      }
    }
  });
});

$(document).ready(function(){
  $(".project-theme").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    dotsEach: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
});

$(document).ready(function(){
  $(".client-theme").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    dotsEach: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 2
      },
      1024: {
        items: 5
      }
    }
  });
});

$(document).ready(function(){
  $(".card-swiper").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    dotsEach: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      640: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 2
      },
      1440:{
        items : 3
      }
    }
  });
});



$(document).ready(function () {
    $(".first-theme").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 }
      }
    });
  });


let discoverContainer = document.getElementById('discoverContainer');
let planningContainer = document.getElementById('planningContainer');
let marketingContainer = document.getElementById('marketingContainer');
let growthContainer = document.getElementById('growthContainer'); 

let discover = document.getElementById('Discover');
let planning = document.getElementById('Planning');
let marketing = document.getElementById('Marketing');
let growth = document.getElementById('Growth');


discover.addEventListener('click', function () {
  discover.classList.add('text-green-500');
  planning.classList.remove('text-green-500');
  marketing.classList.remove('text-green-500');
  growth.classList.remove('text-green-500');
  
  discover.querySelector('div').classList.add('bg-green-500');
  planning.querySelector('div').classList.remove('bg-green-500'); 
  marketing.querySelector('div').classList.remove('bg-green-500');
  growth.querySelector('div').classList.remove('bg-green-500');

  discoverContainer.classList.remove('d-none');
  planningContainer.classList.add('d-none');
  marketingContainer.classList.add('d-none');
  growthContainer.classList.add('d-none');
 

});

planning.addEventListener('click', function () {
  planning.classList.add('text-green-500');
  discover.classList.remove('text-green-500');
  marketing.classList.remove('text-green-500');
  growth.classList.remove('text-green-500');  

  planning.querySelector('div').classList.add('bg-green-500');
  discover.querySelector('div').classList.remove('bg-green-500'); 
  marketing.querySelector('div').classList.remove('bg-green-500');
  growth.querySelector('div').classList.remove('bg-green-500');

  discoverContainer.classList.add('d-none');
  planningContainer.classList.remove('d-none');
  marketingContainer.classList.add('d-none');
  growthContainer.classList.add('d-none');
});

marketing.addEventListener('click', function () {
  marketing.classList.add('text-green-500');
  discover.classList.remove('text-green-500');
  planning.classList.remove('text-green-500');
  growth.classList.remove('text-green-500');

  marketing.querySelector('div').classList.add('bg-green-500');
  discover.querySelector('div').classList.remove('bg-green-500'); 
  planning.querySelector('div').classList.remove('bg-green-500');
  growth.querySelector('div').classList.remove('bg-green-500');

  discoverContainer.classList.add('d-none');
  planningContainer.classList.add('d-none');
  marketingContainer.classList.remove('d-none');
  growthContainer.classList.add('d-none');
});


growth.addEventListener('click', function () {
  growth.classList.add('text-green-500');
  discover.classList.remove('text-green-500');
  planning.classList.remove('text-green-500');
  marketing.classList.remove('text-green-500');

  growth.querySelector('div').classList.add('bg-green-500');
  discover.querySelector('div').classList.remove('bg-green-500'); 
  planning.querySelector('div').classList.remove('bg-green-500');
  marketing.querySelector('div').classList.remove('bg-green-500');

  discoverContainer.classList.add('d-none');
  planningContainer.classList.add('d-none');
  marketingContainer.classList.add('d-none');
  growthContainer.classList.remove('d-none');
});
