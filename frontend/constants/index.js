export const CONTRACT_ADDRESS = "0xD73A04ab2a2d733a1Bd2b26EBA15B715E827182F";
export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "sitelink",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comment",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "rating",
        type: "uint8",
      },
    ],
    name: "Rating",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_sitelink",
        type: "string",
      },
    ],
    name: "deleteRating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "sitelink",
        type: "string",
      },
    ],
    name: "getAllRatingData",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "rating",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        internalType: "struct Rate.RatingData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "sitelink",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "RatingID",
        type: "uint256",
      },
    ],
    name: "getRatingData",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "rating",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
        ],
        internalType: "struct Rate.RatingData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_sitelink",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_rating",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_comment",
        type: "string",
      },
    ],
    name: "rating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "siteToRatingData",
    outputs: [
      {
        internalType: "uint8",
        name: "rating",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "comment",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
