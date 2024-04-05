export type SplTokenMinter = {
  "version": "0.0.1",
  "name": "spl_token_minter",
  "instructions": [
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "createTokenMint",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "rentAddress",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "metadataProgramId",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "freezeauthority",
          "type": "publicKey"
        },
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "mintTo",
      "accounts": [
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "metadata": {
    "address": "8pWmtvfP3pk2dAt2TYjWWo7ne5AMZhH9fwXzDQwuyTj7"
  }
};

export const IDL: SplTokenMinter = {
  "version": "0.0.1",
  "name": "spl_token_minter",
  "instructions": [
    {
      "name": "new",
      "accounts": [
        {
          "name": "dataAccount",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": []
    },
    {
      "name": "createTokenMint",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "mint",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "metadata",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "mintAuthority",
          "isMut": false,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "rentAddress",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "metadataProgramId",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "freezeauthority",
          "type": "publicKey"
        },
        {
          "name": "decimals",
          "type": "u8"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "mintTo",
      "accounts": [
        {
          "name": "mint",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "mintAuthority",
          "isMut": true,
          "isSigner": true,
          "isOptional": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "isOptional": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "metadata": {
    "address": "8pWmtvfP3pk2dAt2TYjWWo7ne5AMZhH9fwXzDQwuyTj7"
  }
};
