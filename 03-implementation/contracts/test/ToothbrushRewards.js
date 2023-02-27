const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("ToothbrushRewards", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function ddeployToothbrushRewardsFixture() {
    const [ownerAccount, aliceAccount, bobAccount] = await ethers.getSigners();

    const ToothbrushRewards = await ethers.getContractFactory(
      "ToothbrushRewards"
    );
    const toothbrushRewards = await ToothbrushRewards.deploy();

    return {
      toothbrushRewards,
      ownerAccount,
      aliceAccount,
      bobAccount,
    };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { toothbrushRewards, ownerAccount } = await loadFixture(
        ddeployToothbrushRewardsFixture
      );

      expect(await toothbrushRewards.owner()).to.equal(ownerAccount.address);
    });
  });

  describe("Rewards", function () {
    it("Should not return rewards for Alice", async function () {
      const { toothbrushRewards, aliceAccount } = await loadFixture(
        ddeployToothbrushRewardsFixture
      );

      expect(await toothbrushRewards.viewReward(aliceAccount.address)).to.equal(
        0
      );
    });

    it("Should return rewards for Alice after an efficient brush", async function () {
      const { toothbrushRewards, aliceAccount } = await loadFixture(
        ddeployToothbrushRewardsFixture
      );

      await toothbrushRewards.connect(aliceAccount).brushTeeth();

      expect(await toothbrushRewards.viewReward(aliceAccount.address)).to.equal(
        100
      );
    });

    it("Should distribute rewards after an efficient brush", async function () {
      const { toothbrushRewards, aliceAccount } = await loadFixture(
        ddeployToothbrushRewardsFixture
      );

      await toothbrushRewards.connect(aliceAccount).brushTeeth();

      await toothbrushRewards.connect(aliceAccount).getReward();

      expect(await toothbrushRewards.viewReward(aliceAccount.address)).to.equal(
        0
      );
    });
  });
});
