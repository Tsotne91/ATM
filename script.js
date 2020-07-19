function ATM (GEL, USD){

	this.GEL = GEL;
	this.USD = USD;
	this.cards = [
		{
			number: "0000 1111 2222 3333",
			pin: 1111,
			GEL: 3000,
			USD: 3000
		}, {
			number: "1111 2222 3333 4444",
			pin: 2222,
			GEL: 4000,
			USD: 4000
		}, {
			number: "2222 3333 4444 5555",
			pin: 3333,
			GEL: 5000,
			USD: 5000
		}, {
			number: "3333 4444 5555 6666",
			pin: 4444,
			GEL: 6000,
			USD: 6000
		}		
	];


	this.isValidCardNumber = function (cardNumber){
		return cards.map( card => card.number ).includes(cardNumber);
	};
	this.isValidPin = function (cardNumber, pin){
		for (let card of cards){
			if (card.number==cardNumber){
				return pin===card.pin;
			}
		}
		return false;
	};
	this.askCurrency = function (cardNumber, currency){
		for (let currency of cards){
			if (card.number==cardNumber){
				return currency===card.currency;
			}
		}
	};

}


const objATM = new ATM (100000, 100000);

function cashOut (){
	let customerCard = prompt("Please enter your card number:")
	let customerPin = prompt("Please enter PIN:");
	let customerCurrencyChoice = prompt("Please enter currency:");
	let customerCashSum = prompt("How much to withdraw?");



}

