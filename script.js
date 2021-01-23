//https://github.com/shihabshoron/assignment.js//

//First Problem//
function kilometerToMeter(meter)
{
  var kilometer = meter*1000;
  return kilometer;
}
var result = kilometerToMeter(6.5)
console.log(result);



//Second Problem//
function budgetCalculator(watch, phone, laptop)
{
  
    var watch = watch*50;
    var phone = phone*100;
    var laptop = laptop*500;
    var totalPrice = watch + phone + laptop;
    return totalPrice;

}
var shopping = budgetCalculator(10, 8 ,2);
console.log(shopping);



//Third Problem//
function hotelCost(days)
{
  var rentCost = 0;
  if(days<=10)
    {
    rentCost = days*100;
    }
  else if(days<=20)
  {
    var firstOffer = 10 * 100;
    var discountDays = days - 10;
    var secondOffer = discountDays * 80;
    rentCost = firstOffer + secondOffer;
  }
  else
  {
    var firstOffer = 10*100;
    var secondOffer = 10*80;
    var discountDays = days-20;
    var thirdOffer = discountDays * 50;
    rentCost = firstOffer + secondOffer + thirdOffer;
  }
  return rentCost;
}
var finalCost = hotelCost(25)
console.log(finalCost);

//Fourth Problem//
function megaFriend(megaFrnd)
{
  var friends = ["Asif", "Bablu","Neyamul","Hasib"];
  var megaFrnd = friends[0];
  for(var i = 0; i< friends.length; i++)
  {
    var nameSize = friends[i];
    if(nameSize > megaFrnd)
    {
      megaFrnd = nameSize;
    }
  }
  return megaFrnd;
}
var size = megaFriend()
console.log(size);