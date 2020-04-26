const records = [
  {
    id: 1,
    title: "Extra bonus",
    from_party: "BOA",
    to_party: "Benz",
    amount: 34000,
  },
  {
    id: 2,
    title: "hostility",
    from_party: "GOldMan",
    to_party: "Centime",
    amount: 41000,
  },
  {
    id: 3,
    title: "Same as Perks",
    from_party: "Amazon",
    to_party: "Benz",
    amount: 21000,
  },
  {
    id: 4,
    title: "Timber times",
    from_party: "Benz",
    to_party: "Centime",
    amount: 66000,
  },
  {
    id: 5,
    title: "Extra bonus",
    from_party: "HDFC",
    to_party: "Ferrari",
    amount: 33000,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  records,
};