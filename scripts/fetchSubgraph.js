async function fetchSubgraph() {
  const query = `{
    proposals {
      id
      startBlock
      proposalId
      executed
      endBlock
      description
      calls {
        calldata
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
