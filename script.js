function ATM (GEL, USD){

	this.GEL = GEL;
	this.USD = USD;

	const cards = [
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

	this.isValidCurrency = function (cardNumber, currency){
		for (let card of cards){
			if (card.number==cardNumber){
				return card.hasOwnProperty(currency);
			}
		}
	};
	this.haveEnoughFunds = function (cardNumber, funds){
		for (let funds of cards){
			if (card.number==cardNumber){
				return funds==card.//what the hell

			}
		}
	}



}


const objATM = new ATM (100000, 100000);


function cashOut (){
	let customerCard = prompt("Please enter your card number:")
	// objATM.isValidCardNumber(customerCard);
	if (!objATM.isValidCardNumber(customerCard)) {
		return alert ("Card is not valid!")
	}


	let customerPin = parseInt(prompt("Please enter PIN:"));
	// objATM.isValidPin(customerPin);
	if (!objATM.isValidPin(customerCard, customerPin)) {
		return alert ("Invalid PIN")
	}



	let customerCurrencyChoice = prompt("Enter currency between GEL or USD:");
	// objATM.isValidCurrency(customerCurrencyChoice);
	if (!objATM.isValidCurrency (customerCard, customerCurrencyChoice)) {
		return alert ("Invalid currency!")
	}

	let customerCashSum = parseInt(prompt("How much to withdraw?"));
	if (){
		alert("Funds not available in your account");
	}; 


};

cashOut();
