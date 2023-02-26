# 02 Cas d'usages

Pour trouver des cas d'usages à la blockchain j'ai demandé à ma nouvelle amie ChatGPT.

![3 choses que font les françaises et français le matin](./images/chatgpt-1.png)

Je ne pense pas que se brosser les dents aie à voir avec la blockchain, mais demandons à ChatGPT.

![blockchain et brossage de dents](./images/chatgpt-2.png)

Gagner de l'argent en se brossant les dents! Grâce à une nouvelle collab entre Colg8 et Br0hn c'est maintenant possible. Puis-je avoir le Smart Contract?

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ToothbrushRewards {

    mapping(address => uint) public rewards;
    mapping(address => uint) public lastBrushingTime;

    uint public rewardAmount = 100; // La quantité de récompense en tokens pour chaque brossage de dents réussi
    uint public brushingTimeRequirement = 120; // Le temps minimum en secondes pour considérer que le brossage est réussi

    function brushTeeth() public {
        require(lastBrushingTime[msg.sender] == 0 || block.timestamp > lastBrushingTime[msg.sender] + 24 hours, "Vous ne pouvez réclamer qu'une récompense par jour.");
        lastBrushingTime[msg.sender] = block.timestamp;
        rewards[msg.sender] += rewardAmount;
    }

    function getReward() public {
        require(rewards[msg.sender] > 0, "Vous n'avez pas de récompense à réclamer.");
        require(block.timestamp > lastBrushingTime[msg.sender] + 24 hours, "Vous ne pouvez réclamer qu'une récompense par jour.");
        rewards[msg.sender] = 0;
    }

    function setRewardAmount(uint _rewardAmount) public {
        require(msg.sender == owner, "Vous n'êtes pas autorisé à effectuer cette action.");
        rewardAmount = _rewardAmount;
    }

    function setBrushingTimeRequirement(uint _brushingTimeRequirement) public {
        require(msg.sender == owner, "Vous n'êtes pas autorisé à effectuer cette action.");
        brushingTimeRequirement = _brushingTimeRequirement;
    }

}

```

![commentaires](./images/chatgpt-3.png)
