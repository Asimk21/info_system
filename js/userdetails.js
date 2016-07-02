// 1. The return value of this method is in required format but not in json format.
// 2. Convert in json format
// 3. Post to server

var user = {
	getMid: function(){
		return document.getElementById("mid").value
	},
	getGivenName: function(){
		return document.getElementById("givenName").value
	},
	getSurName: function(){
		return document.getElementById("surName").value
	},
	getGender: function(){
		return document.getElementById("gender").value
	},
	getPassportId: function(){
		return document.getElementById("passportId").value
	},

	getNationality: function(){
		return document.getElementById("nationality").value
	},
	getDob: function(){
		return document.getElementById("dob").value
	},
	getPassportAddress: function(){
		return document.getElementById("passportAddress").value
	},
	getPassportPlaceOfIssue : function(){
		return document.getElementById("pPlaceOfIssue").value
	},
	getPassportValidity: function(){
		var validFrom = document.getElementById("pValidFrom").value;
		var validUntil = document.getElementById("pValidUntil").value;
		return [validFrom, validUntil];
	},
	getVisaType: function(){
		return document.getElementById("vType").value
	},

	getVisaValidity: function(){
		var validFrom = document.getElementById("vValidFrom").value;
		var validUntil = document.getElementById("vValidUntil").value;
		return [validFrom, validUntil];
	},

	getCos: function(){
		return document.getElementById("cos").value
	},

	getVisaPlaceOfIssue: function(vPlaceOfIssue){
		//This should probably be parameterized
		return document.getElementById(vPlaceOfIssue).value
	},

	getVisa: function(){
		// apply some kind of loop and get visa values
		var validity = new Array()
		validity = this.getVisaValidity()
		return {
			'type': this.getVisaType(), 
			'validFrom': validity[0], 
			'validUntil': validity[1], 
			'cos': this.getCos(), 
			'placeOfIssue':  this.getVisaPlaceOfIssue(),
		}
	},

	getPassportInfo: function(){
		// apply loop to get different passport details
		var validity = new Array()
		validity = this.getPassportValidity()
		var visaDetails = new Array()
		visaDetails.push(this.getVisa())
		return {
			'validFrom': validity[0],
			'validUntil': validity[1],
			'address': this.getPassportAddress(),
			'placeOfIssue': this.getPassportPlaceOfIssue(),
			'visa': visaDetails,
		}
	},

	getUserInfo: function(){
		var passportId = this.getPassportId()
		var passportInfo = this.getPassportInfo()
		return {
			'firstName': this.getFirstName(),
			'lastName': this.getLastName(),
			'gender': this.getGender(),
			'nationality': this.getNationality(),
			[passportId]: passportInfo
		}
	},

	userDetails: function(){
		var mid = this.getMid()
		return
		{
			mid: this.getUserInfo()
		}
	}

}






