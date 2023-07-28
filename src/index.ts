export enum Network {
  Bitcoin = 'Bitcoin',
  BitcoinCash = 'Bitcoin Cash',
  Binance = 'Binance Chain',
  Cosmos = 'Cosmos',
  Ethereum = 'Ethereum',
  Zen = 'Horizen',
  Icon = 'Icon',
  Litecoin = 'Litecoin',
  Polkadot = 'Polkadot',
  Stellar = 'Stellar',
  Tezos = 'Tezos',
  Tron = 'TRON',
  Ripple = 'Ripple',
  EthereumClassic = 'Ethereum Classic',
  Polygon = 'Polygon',
  Cronos = 'Cronos',
  Kusama = 'Kusama',
  Cardano = 'Cardano',
  Terra = 'Terra',
  TerraClassic = 'Terra Classic',
  AvalancheCChain = 'Avalanche C-Chain',
  Solana = 'Solana',
  Songbird = 'Songbird',
  KinesisSilver = 'Kinesis Silver',
  KinesisGold = 'Kinesis Gold',
  Arbitrum = 'Arbitrum',
  Optimism = 'Optimism',
  BinanceSmartChain = 'Binance Smart Chain',
  Aptos = 'Aptos',
  CryptoOrg = 'Crypto.org',
  Flare = 'Flare',
  ThunderCore = 'ThunderCore',
  OKTChain = 'OKXChain',
  zkSync = 'zkSync Era',
  Goerli = 'Goerli',
}

const EvmChainIdList: Record<string, number> = {
  [Network.Ethereum]: 1,
  [Network.BinanceSmartChain]: 56,
  [Network.Polygon]: 137,
  [Network.Arbitrum]: 42161,
  [Network.AvalancheCChain]: 43114,
  [Network.Optimism]: 10,
  [Network.EthereumClassic]: 61,
};

export function getEvmChainIdByNetwork(network: Network): number {
  const id = EvmChainIdList[network];
  if (!id) throw Error(`${network} chain ID not found`);
  return id;
}

export const CoinMap = {
  BTC: {
    name: 'Bitcoin',
    symbol: 'BTC',
  },
  ETH: {
    name: 'Ethereum',
    symbol: 'ETH',
  },
  Goerli: {
    name: 'Goerli',
    symbol: 'GoerliETH',
  },
  LTC: {
    name: 'Litecoin',
    symbol: 'LTC',
  },
  XRP: {
    name: 'Ripple',
    symbol: 'XRP',
  },
  BCH: {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
  },
  ZEN: {
    name: 'Horizen',
    symbol: 'XRP',
  },
  ICX: {
    name: 'Icon',
    symbol: 'ICX',
  },
  BNB: {
    name: 'Binance Chain',
    symbol: 'BNB',
  },
  XLM: {
    name: 'Stellar',
    symbol: 'XLM',
  },
  KAG: {
    name: 'Kinesis Silver',
    symbol: 'KAG',
  },
  KAU: {
    name: 'Kinesis Gold',
    symbol: 'KAU',
  },
  BSC: {
    name: 'Binance Smart Chain',
    symbol: 'BNB',
  },
  SGB: {
    name: 'Songbird',
    symbol: 'SGB',
  },
  TRX: {
    name: 'TRON',
    symbol: 'TRX',
  },
  ATOM: {
    name: 'Cosmos',
    symbol: 'ATOM',
  },
  CROORG: {
    name: 'Crypto.org',
    symbol: 'CRO',
  },
  DOT: {
    name: 'Polkadot',
    symbol: 'DOT',
  },
  CRO: {
    name: 'Cronos',
    symbol: 'CRO',
  },
  ETC: {
    name: 'Ethereum Classic',
    symbol: 'ETC',
  },
  MATIC: {
    name: 'Polygon',
    symbol: 'MATIC',
  },
  KSM: {
    name: 'Kusama',
    symbol: 'KSM',
  },
  ADA: {
    name: 'Cardano',
    symbol: 'ADA',
  },
  LUNC: {
    name: 'Terra Classic',
    symbol: 'LUNC',
  },
  LUNA: {
    name: 'Terra',
    symbol: 'LUNA',
  },
  ARETH: {
    name: 'Arbitrum',
    symbol: 'ARETH',
  },
  XTZ: {
    name: 'Tezos',
    symbol: 'XTZ',
  },
  AVAXC: {
    name: 'Avalanche C-Chain',
    symbol: 'AVAX',
  },
  SOL: {
    name: 'Solana',
    symbol: 'SOL',
  },
  OETH: {
    name: 'Optimism',
    symbol: 'OETH',
  },
  APTOS: {
    name: 'Aptos',
    symbol: 'APT',
  },
  FLR: {
    name: 'Flare',
    symbol: 'FLR',
  },
  TT: {
    name: 'ThunderCore',
    symbol: 'TT',
  },
  OKT: {
    name: 'OKXChain',
    symbol: 'OKT',
  },
  ZKS: {
    name: 'zkSync Era',
    symbol: 'ETH',
  },
};
