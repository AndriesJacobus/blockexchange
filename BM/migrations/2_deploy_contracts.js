var share = artifacts.require("./shareToken.sol");

module.exports = function(deployer) {
  deployer.deploy(share);
};
