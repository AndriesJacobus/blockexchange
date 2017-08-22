var shareToken = artifacts.require("./shareToken.sol");

module.exports = function(deployer) {
  deployer.deploy(shareToken, '0xC6CD0993AAE2C593f7B1F20827188d71d854AD20', 500, 2, 'StandardB', 0, '12345', {gas: 2100000});
};