const menuBtn=document.getElementById('menuBtn'),navlinks=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('bookingForm').addEventListener('submit',function(e){
 e.preventDefault();
 const name=document.getElementById('guest').value,arrival=document.getElementById('arrival').value,departure=document.getElementById('departure').value,guests=document.getElementById('guests').value,msg=document.getElementById('message').value;
 const text=`Hello D Best Luxury Service Apartment! I would like to make a reservation enquiry.%0AName: ${encodeURIComponent(name)}%0AArrival: ${encodeURIComponent(arrival)}%0ADeparture: ${encodeURIComponent(departure)}%0AGuests: ${encodeURIComponent(guests)}%0ARequest: ${encodeURIComponent(msg)}`;
 window.open('https://wa.me/2348134969907?text='+text,'_blank');
});
