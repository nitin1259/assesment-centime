const records = [
  {
    id: 1,
    from_party: "BOA",
    to_party: "Benz",
    amount: 34000,
    curreny: "USD",
  },
  {
    id: 2,
    from_party: "GOldMan",
    to_party: "Centime",
    amount: 41000,
    curreny: "USD",
  },
  {
    id: 3,
    from_party: "Amazon",
    to_party: "Benz",
    amount: 21000,
    curreny: "USD",
  },
  {
    id: 4,
    from_party: "Benz",
    to_party: "Amazon",
    amount: 66000,
    curreny: "USD",
  },
  {
    id: 5,
    from_party: "HDFC",
    to_party: "Ferrari",
    amount: 33000,
    curreny: "USD",
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  records,
};
