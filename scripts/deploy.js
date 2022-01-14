const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    
  
    console.log("Deploying contracts with account: ", deployer.address);

    const accountBalance = await deployer.getBalance();
    console.log("Account balance: ", accountBalance.toString());
  
    const Token = await hre.ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    await portal.deployed();
  
    console.log("WavePortal address: ", portal.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();