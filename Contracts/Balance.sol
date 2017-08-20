pragma solidity ^0.4.13;

/**
 * Gets the balance of the wallet
 */
contract Balance {

	address public walletAddress;

	function Balance (
		address walletID) {
		walletAddress=walletID;

	}	

	function getBalance() returns (uint256 balance){
		return walletAddress.balance;
	}
}
