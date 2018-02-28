# MBC PAPRIKA

Web interface for visualization "What's going on" in node/nodes

#### Run node

```sh
geth --dev --rpc  --rpcaddr "127.0.0.1" --rpcapi "admin,debug,miner,personal,eth,net,txpool,shh,web3" console
```

#### Same command for geth

Create new account

```
personal.newAccount(<password for accaunt>);
```

Show accounts

```
eth.accounts
```