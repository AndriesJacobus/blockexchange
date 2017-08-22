var shareToken = artifacts.require("./shareToken.sol");

var meta;

return shareToken.deployed().then(function(instance) {
	meta = instance;
	meta.sharePrice.call().then(function(v) {
		console.log(v)
	})
})