require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain hole grid process success gesture'; 
let testAccounts = [
"0x7e3fc9b9f52cf53999a49d74f635d4b79f9674a1e61532d77978bf5aeec2118f",
"0xcab35a3870de10ac4a4064ff7539db04f4f9f2239f0eee64ad55c196b5f5f061",
"0x1307f370fa9021f6b021cb503265180a8034a93c4e3e6e8358116233294dd41f",
"0x7309e2e9dc9f09a1e33ec591827f9ad7b22704643ff5b552782a121ac38d7a18",
"0x58a24b09e0de5440ed3dd17be697ae8898261411bb4bac4e7d0e6abf376d072c",
"0x558a8e66da10dfe451a2138bd1d0987b311b69fa0c87d08dde7a31caf4636836",
"0x7bea9bf900a3480e07d1071ff685fd5aa326808fa29323f8ab96ca2a06d808ea",
"0x4b129b78d1d5640f60017954826bc708efd4bedb6d5bb67cc4c7dd5605024963",
"0xebc0e4cabb24875eee82a66ee7a73d7b8a00b3223519a1fd111e57fc4d1996a8",
"0xd549cbffa49680d09b8e361fa4d87ebec3e004fbf883aabc67d79bbff2edda52"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

