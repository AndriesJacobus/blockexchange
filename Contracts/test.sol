pragma solidity ^0.4.13;
/**
 * Does stock stuff
 */
contract BlockExchange {
	function BlockExchange (ctorArgs) {

		struct company{
			address walletCompany;
			string companyCode;
			string companyID;
			string[] buyerIDs;
			uint256 amountShares;
			var percentStake;
			var etherVal;

		}

		struct buyer{
			string buyerID
			address walletBuyer;
			buyerShare[] inventory
		}

		struct buyerShare{
			uint256 amount;
			string companyID;
			string buyerID;

		}

		company[] public companies;
		buyer[] public buyers;

		function getCompanies() returns (company[]){return companies}

		function getCompanies(string buyerID)  returns (string[]){
			string[] out;
			for (uint j = 0; j < companies.length; j++) {
				if (companies[j].buyerIDs.contains(buyerID)){
					out.push(companies[j].companyID);
				}
			}
			return out;
		}

		function getBuyers() returns (buyer[]){return buyers}

		function getBuyers(string companyID) returns (string[]){
			string[] out;
			for (uint j = 0; j < buyers.length; j++) {
				for (uint k = 0; k < buyers[j].inventory.length; k++) {
					if (buyers[j].inventory[k].company==companyID){
						out.push(buyers[j].buyerID);
					}
				}
			}
			return out;
		}

		// function getShares(string BuyerID) returns (buyerShare[]){
		
		// }

		function buyShares(buyer Buyer, company Company, uint256 amount) {
			var etherAmount=amount*Company.etherVal;
			require(Buyer.walletBuyer.balance>=etherAmount);
			Buyer.walletBuyer.send(etherAmount);
			buyerShare newShare;
			newShare.buyerID=Buyer.buyerID;
			newShare.companyID=Company.companyID;
			newShare.amount=amount;
			Buyer.buyShares.push(newShare);


		}

		
	}	
}

