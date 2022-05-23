# fish-dao-interface-demo

https://api.studio.thegraph.com/query/20193/dao-fish-rinkeby/v0.0.6/graphql

https://api.studio.thegraph.com/query/20193/subgraph-block-rinkeby/v0.0.1

```graphql
query VoteProposals {
  proposals(
    orderBy: endBlock
    where: {executed: false, startBlock_lte: "10578160", endBlock_gte: "10578160", canceled: false}
  ) {
    proposalId
    description
    calls {
      calldata
    }
    receipts {
      voter {
        id
      }
      weight
    }
  }
}
```

![Screen Shot 2022-04-30 at 5 43 12 PM](https://user-images.githubusercontent.com/19412160/166123609-de3647ba-e596-4f99-8736-899c75d2d98c.png)

![Screen Shot 2022-04-30 at 5 43 22 PM](https://user-images.githubusercontent.com/19412160/166123607-08b39f22-7801-4d00-8adb-8b6728b3b5a5.png)
