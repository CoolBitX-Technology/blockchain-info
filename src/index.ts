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
  Linea = 'Linea',
  Base = 'Base',
  Dis = 'DIS Chain',
  Dogecoin = 'Dogecoin',
  ArbitrumSepolia = 'Arbitrum Sepolia',
}

const EvmChainIdList: Record<string, number> = {
  [Network.Ethereum]: 1,
  [Network.BinanceSmartChain]: 56,
  [Network.Polygon]: 137,
  [Network.Arbitrum]: 42161,
  [Network.ArbitrumSepolia]: 421614,
  [Network.AvalancheCChain]: 43114,
  [Network.Optimism]: 10,
  [Network.EthereumClassic]: 61,
  [Network.Zen]: 7332,
  [Network.Cronos]: 25,
  [Network.Flare]: 14,
  [Network.ThunderCore]: 108,
  [Network.OKTChain]: 66,
  [Network.zkSync]: 324,
  [Network.Goerli]: 5,
  [Network.Linea]: 59144,
  [Network.Base]: 8453,
  [Network.Dis]: 513100,
};

export function getEvmChainIdByNetwork(network: Network): number {
  const id = EvmChainIdList[network];
  if (!id) throw Error(`${network} chain ID not found`);
  return id;
}

export const CoinMap: { [key: string]: { name: Network; symbol: string } } = {
  BTC: {
    name: Network.Bitcoin,
    symbol: 'BTC',
  },
  ETH: {
    name: Network.Ethereum,
    symbol: 'ETH',
  },
  Goerli: {
    name: Network.Goerli,
    symbol: 'GoerliETH',
  },
  LTC: {
    name: Network.Litecoin,
    symbol: 'LTC',
  },
  XRP: {
    name: Network.Ripple,
    symbol: 'XRP',
  },
  BCH: {
    name: Network.BitcoinCash,
    symbol: 'BCH',
  },
  ZEN: {
    name: Network.Zen,
    symbol: 'ZEN',
  },
  ICX: {
    name: Network.Icon,
    symbol: 'ICX',
  },
  BNB: {
    name: Network.Binance,
    symbol: 'BNB',
  },
  XLM: {
    name: Network.Stellar,
    symbol: 'XLM',
  },
  KAG: {
    name: Network.KinesisSilver,
    symbol: 'KAG',
  },
  KAU: {
    name: Network.KinesisGold,
    symbol: 'KAU',
  },
  BSC: {
    name: Network.BinanceSmartChain,
    symbol: 'BNB',
  },
  SGB: {
    name: Network.Songbird,
    symbol: 'SGB',
  },
  TRX: {
    name: Network.Tron,
    symbol: 'TRX',
  },
  ATOM: {
    name: Network.Cosmos,
    symbol: 'ATOM',
  },
  CROORG: {
    name: Network.CryptoOrg,
    symbol: 'CRO',
  },
  DOT: {
    name: Network.Polkadot,
    symbol: 'DOT',
  },
  CRO: {
    name: Network.Cronos,
    symbol: 'CRO',
  },
  ETC: {
    name: Network.EthereumClassic,
    symbol: 'ETC',
  },
  MATIC: {
    name: Network.Polygon,
    symbol: 'MATIC',
  },
  KSM: {
    name: Network.Kusama,
    symbol: 'KSM',
  },
  ADA: {
    name: Network.Cardano,
    symbol: 'ADA',
  },
  LUNC: {
    name: Network.TerraClassic,
    symbol: 'LUNC',
  },
  LUNA: {
    name: Network.Terra,
    symbol: 'LUNA',
  },
  ARETH: {
    name: Network.Arbitrum,
    symbol: 'ARETH',
  },
  XTZ: {
    name: Network.Tezos,
    symbol: 'XTZ',
  },
  AVAXC: {
    name: Network.AvalancheCChain,
    symbol: 'AVAX',
  },
  SOL: {
    name: Network.Solana,
    symbol: 'SOL',
  },
  OETH: {
    name: Network.Optimism,
    symbol: 'OETH',
  },
  APTOS: {
    name: Network.Aptos,
    symbol: 'APT',
  },
  FLR: {
    name: Network.Flare,
    symbol: 'FLR',
  },
  TT: {
    name: Network.ThunderCore,
    symbol: 'TT',
  },
  OKT: {
    name: Network.OKTChain,
    symbol: 'OKT',
  },
  ZKS: {
    name: Network.zkSync,
    symbol: 'ETH',
  },
  LINETH: {
    name: Network.Linea,
    symbol: 'ETH',
  },
  BASEETH: {
    name: Network.Base,
    symbol: 'BASEETH',
  },
  DIS: {
    name: Network.Dis,
    symbol: 'DIS',
  },
  DOGE: {
    name: Network.Dogecoin,
    symbol: 'DOGE',
  },
  ARETH_SEPOLIA: {
    name: Network.ArbitrumSepolia,
    symbol: 'ARETH_SEPOLIA',
  },
};

export enum WalletMode {
  Software = 'Software',
  Hardware = 'Hardware',
}

export enum AssetType {
  COIN= 'COIN',
  TOKEN= 'TOKEN',
  NFT= 'NFT',
}

