async function fetchProposals(_blockNumber) {
  const where = _blockNumber ? `where: {executed: false, startBlock_lte: "${_blockNumber}", endBlock_gte: "${_blockNumber}", canceled: false}` : `where: {executed: false, canceled: false}`;
  const query = `{
    proposals(
      orderBy: endBlock
      ${where}
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
      supports {
        support
      }
    }
  }`;

  const data = await fetch("https://api.studio.thegraph.com/query/20193/dao-fish-rinkeby/v0.0.6", {
    headers: {
      accept: "application/json, multipart/mixed",
      "content-type": "application/json",
    },
    body: JSON.stringify({ query }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => res.data.proposals)
    .catch((err) => {
      console.log(err);
      return [];
    });

  return data;
}
