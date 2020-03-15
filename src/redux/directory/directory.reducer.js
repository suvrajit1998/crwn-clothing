const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      Linkurl: "shop/hats"
    },
    {
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      Linkurl: "shop/jackets"
    },
    {
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      Linkurl: "shop/sneakers"
    },
    {
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      Linkurl: "shop/womens"
    },
    {
      title: "MENS",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      Linkurl: "shop/mens"
    }
  ]
};

const directoryreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryreducer;
