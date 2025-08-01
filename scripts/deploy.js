const hre = require("hardhat");

async function main() {
  const initialSupply = "1000000";
  
  const MonJetonERC20 = await hre.ethers.getContractFactory("MonJetonERC20");
  const monJeton = await MonJetonERC20.deploy(initialSupply);
  
  await monJeton.waitForDeployment();
  
  const contractAddress = await monJeton.getAddress();
  console.log("CalebToken deployed at:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});