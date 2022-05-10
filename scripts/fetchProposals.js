async function fetchProposals() {
  const query = `{
    proposals (orderBy: "endBlock", orderDirection: "desc"){
      startBlock
      proposalId
      executed
      endBlock
      description
      calls {
        calldata
      }
      receipts {
        weight
        voter {
          id
        }
      }
      canceled
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
