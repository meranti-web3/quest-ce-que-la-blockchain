// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToothbrushRewards {
    mapping(address => uint) public rewards;
    mapping(address => uint) public lastBrushingTime;

    uint public rewardAmount = 100; // La quantité de récompense en tokens pour chaque brossage de dents réussi

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function brushTeeth() public {
        require(
            lastBrushingTime[msg.sender] == 0 ||
                block.timestamp > lastBrushingTime[msg.sender] + 24 hours,
            unicode"Vous ne pouvez réclamer qu'une récompense par jour."
        );
        lastBrushingTime[msg.sender] = block.timestamp;
        rewards[msg.sender] += rewardAmount;
    }

    function viewReward(address user) public view returns (uint) {
        return rewards[user];
    }

    function getReward() public {
        require(
            rewards[msg.sender] > 0,
            unicode"Vous n'avez pas de récompense à réclamer."
        );

        rewards[msg.sender] = 0;
    }

    function setRewardAmount(uint _rewardAmount) public {
        require(
            msg.sender == owner,
            unicode"Vous n'êtes pas autorisé à effectuer cette action."
        );
        rewardAmount = _rewardAmount;
    }
}
