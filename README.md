# Blockchain - A Stock Exchange using blockchain

<h2>Summary:</h1>

<p>
  This is our team's project done for the Standard Bank Impact Challenge 2017.
  
  The idea is that:
  <ul>
  <li>A company registers shares on Blockchain</li>
  <li>The value for a share is then converted to Ether (since we use the Ethereum blockchain because of smart contracts)</li>
  <li>A buyer buys a certain amount of shares at the set Ether price per share</li>
  <li>Two things then work at the same time: the company's ether wallet is updated with the payment amount (that is deducted from the buyer's ether wallet) and the buyer's share amount account is updated with the share amount (that is deducted from the company's share account)</li>
  <li>Any user can track the exchanges made on BlockExchange</li>
  </ul>
</p>

<h2>How to run:</h1>

<p>
  Install truffle and setup testrpc.<br/>
  Start testrpc with: testrpc -m '<your 12 word MetaMask account setting>'<br/>
  Run: truffle compile; truffle migrate; node app.js
</p>
