const records = [
  {
    id: 1,
    title: "Extra bonus",
    from_party: "BOA",
    to_party: "Centime",
    amount: 34000,
  },
  {
    id: 2,
    title: "hostility",
    from_party: "Centime",
    to_party: "Goldman Sach",
    amount: 41000,
  },
  {
    id: 3,
    title: "Same as Perks",
    from_party: "Centime",
    to_party: "Antaric",
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
    from_party: "Centime",
    to_party: "Ferrari",
    amount: 13000,
  },
  {
    id: 6,
    title: "Funding",
    from_party: "Rera",
    to_party: "Centime",
    amount: 30000,
  },
  {
    id: 7,
    title: "Round1",
    from_party: "Centime",
    to_party: "Ferrari",
    amount: 3000,
  },
  {
    id: 8,
    title: "Extra bonus",
    from_party: "AON",
    to_party: "Centime",
    amount: 22000,
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  records,
};
