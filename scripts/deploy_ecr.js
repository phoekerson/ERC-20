const hre = require("hardhat");

async function main() {
  const initialSupply = "1000000";
  
  // Fix: Use the correct contract name "MonJetonERC20"
  const MonJetonERC20 = await hre.ethers.getContractFactory("MonJetonERC20");
  const monJeton = await MonJetonERC20.deploy(initialSupply);
  
  // Fix: Use waitForDeployment() instead of deployed() for newer Hardhat versions
  await monJeton.waitForDeployment();
  
  // Fix: Use getAddress() instead of address for newer ethers.js versions
  const contractAddress = await monJeton.getAddress();
  console.log("CalebToken deployed at:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});