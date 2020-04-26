const records = [
  {
    id: 1,
    titile: "Extra bonus",
    from_party: "BOA",
    to_party: "Benz",
    amount: 34000,
  },
  {
    id: 2,
    titile: "hostility",
    from_party: "GOldMan",
    to_party: "Centime",
    amount: 41000,
  },
  {
    id: 3,
    titile: "Same as Perks",
    from_party: "Amazon",
    to_party: "Benz",
    amount: 21000,
  },
  {
    id: 4,
    titile: "Timber times",
    from_party: "Benz",
    to_party: "Centime",
    amount: 66000,
  },
  {
    id: 5,
    titile: "Extra bonus",
    from_party: "HDFC",
    to_party: "Ferrari",
    amount: 33000,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  records,
};
