// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 totalValue;

    constructor() {
        console.log("Yo wassup, I am a the smartest contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have received %d total waves!", totalWaves);
        return totalWaves;
    }

    //Each wave is worth $10 (really!)
    function getTotalValue() public returns (uint256) {
        totalValue = totalWaves*10;
        console.log("We have made $%d from our waves!", totalValue);
        return totalValue;
    }
}