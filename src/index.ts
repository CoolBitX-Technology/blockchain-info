/**
 * DataNetwork enum for identifying different blockchain networks.
 * This enum is used for data identification purposes across the application.
 * Example usage: DataNetwork.Ethereum, DataNetwork.Bitcoin, etc.
 */
export enum DataNetwork {
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
  TON = 'TON',
  KASPA = 'Kaspa',
  SUI = 'Sui'
}

/**
 * PriceNetwork enum for price service to identify different blockchain networks.
 * This enum uses lowercase with hyphen format for price service compatibility.
 * Example usage: PriceNetwork.Ethereum, PriceNetwork.Bitcoin, etc.
 */
export enum PriceNetwork {
  Ethereum = 'ethereum',
  Tron = 'tron',
  Polygon = 'polygon',
  Solana = 'solana',
  BinanceSmartChain = 'binance-smart-chain',
  Arbitrum = 'arbitrum-one',
  Avalanche = 'avalanche',
  Optimism = 'optimistic-ethereum',
  Bitcoin = 'bitcoin',
  BitcoinCash = 'bitcoin-cash',
  Cosmos = 'cosmos',
  Zen = 'zen',
  Icon = 'icon',
  Litecoin = 'litecoin',
  Polkadot = 'polkadot',
  Stellar = 'stellar',
  Tezos = 'tezos',
  Ripple = 'xrp',
  EthereumClassic = 'ethereum-classic',
  Cronos = 'cronos',
  Kusama = 'kusama',
  Cardano = 'cardano',
  Terra = 'terra',
  TerraClassic = 'terra-classic',
  Songbird = 'songbird',
  KinesisSilver = 'kinesis-silver',
  KinesisGold = 'kinesis-gold',
  Aptos = 'aptos',
  CryptoOrg = 'crypto-com-coin',
  Flare = 'flare-networks',
  ThunderCore = 'thunder-core',
  OKTChain = 'okt-chain',
  zkSync = 'zksync',
  Base = 'base',
  Dis = 'dis',
  Dogecoin = 'dogecoin',
  TON = 'the-open-network',
  KASPA = 'kaspa',
  SUI = 'sui',
  CORE = 'core',
}

// For backward compatibility
export type Network = DataNetwork;

const EvmChainIdList: Record<string, number> = {
  [DataNetwork.Ethereum]: 1,
  [DataNetwork.BinanceSmartChain]: 56,
  [DataNetwork.Polygon]: 137,
  [DataNetwork.Arbitrum]: 42161,
  [DataNetwork.ArbitrumSepolia]: 421614,
  [DataNetwork.AvalancheCChain]: 43114,
  [DataNetwork.Optimism]: 10,
  [DataNetwork.EthereumClassic]: 61,
  [DataNetwork.Zen]: 7332,
  [DataNetwork.Cronos]: 25,
  [DataNetwork.Flare]: 14,
  [DataNetwork.ThunderCore]: 108,
  [DataNetwork.OKTChain]: 66,
  [DataNetwork.zkSync]: 324,
  [DataNetwork.Goerli]: 5,
  [DataNetwork.Linea]: 59144,
  [DataNetwork.Base]: 8453,
  [DataNetwork.Dis]: 513100,
};

export function getEvmChainIdByNetwork(network: DataNetwork): number {
  const id = EvmChainIdList[network];
  if (!id) throw Error(`${network} chain ID not found`);
  return id;
}

export const CoinMap: { [key: string]: { name: DataNetwork; symbol: string } } = {
  BTC: {
    name: DataNetwork.Bitcoin,
    symbol: 'BTC',
  },
  ETH: {
    name: DataNetwork.Ethereum,
    symbol: 'ETH',
  },
  Goerli: {
    name: DataNetwork.Goerli,
    symbol: 'GoerliETH',
  },
  LTC: {
    name: DataNetwork.Litecoin,
    symbol: 'LTC',
  },
  XRP: {
    name: DataNetwork.Ripple,
    symbol: 'XRP',
  },
  BCH: {
    name: DataNetwork.BitcoinCash,
    symbol: 'BCH',
  },
  ZEN: {
    name: DataNetwork.Zen,
    symbol: 'ZEN',
  },
  ICX: {
    name: DataNetwork.Icon,
    symbol: 'ICX',
  },
  BNB: {
    name: DataNetwork.Binance,
    symbol: 'BNB',
  },
  XLM: {
    name: DataNetwork.Stellar,
    symbol: 'XLM',
  },
  KAG: {
    name: DataNetwork.KinesisSilver,
    symbol: 'KAG',
  },
  KAU: {
    name: DataNetwork.KinesisGold,
    symbol: 'KAU',
  },
  BSC: {
    name: DataNetwork.BinanceSmartChain,
    symbol: 'BNB',
  },
  SGB: {
    name: DataNetwork.Songbird,
    symbol: 'SGB',
  },
  TRX: {
    name: DataNetwork.Tron,
    symbol: 'TRX',
  },
  ATOM: {
    name: DataNetwork.Cosmos,
    symbol: 'ATOM',
  },
  CROORG: {
    name: DataNetwork.CryptoOrg,
    symbol: 'CRO',
  },
  DOT: {
    name: DataNetwork.Polkadot,
    symbol: 'DOT',
  },
  CRO: {
    name: DataNetwork.Cronos,
    symbol: 'CRO',
  },
  ETC: {
    name: DataNetwork.EthereumClassic,
    symbol: 'ETC',
  },
  MATIC: {
    name: DataNetwork.Polygon,
    symbol: 'MATIC',
  },
  KSM: {
    name: DataNetwork.Kusama,
    symbol: 'KSM',
  },
  ADA: {
    name: DataNetwork.Cardano,
    symbol: 'ADA',
  },
  LUNC: {
    name: DataNetwork.TerraClassic,
    symbol: 'LUNC',
  },
  LUNA: {
    name: DataNetwork.Terra,
    symbol: 'LUNA',
  },
  ARETH: {
    name: DataNetwork.Arbitrum,
    symbol: 'ARETH',
  },
  XTZ: {
    name: DataNetwork.Tezos,
    symbol: 'XTZ',
  },
  AVAXC: {
    name: DataNetwork.AvalancheCChain,
    symbol: 'AVAX',
  },
  SOL: {
    name: DataNetwork.Solana,
    symbol: 'SOL',
  },
  OETH: {
    name: DataNetwork.Optimism,
    symbol: 'OETH',
  },
  APTOS: {
    name: DataNetwork.Aptos,
    symbol: 'APT',
  },
  FLR: {
    name: DataNetwork.Flare,
    symbol: 'FLR',
  },
  TT: {
    name: DataNetwork.ThunderCore,
    symbol: 'TT',
  },
  OKT: {
    name: DataNetwork.OKTChain,
    symbol: 'OKT',
  },
  ZKS: {
    name: DataNetwork.zkSync,
    symbol: 'ETH',
  },
  LINETH: {
    name: DataNetwork.Linea,
    symbol: 'ETH',
  },
  BASEETH: {
    name: DataNetwork.Base,
    symbol: 'BASEETH',
  },
  DIS: {
    name: DataNetwork.Dis,
    symbol: 'DIS',
  },
  DOGE: {
    name: DataNetwork.Dogecoin,
    symbol: 'DOGE',
  },
  ARETH_SEPOLIA: {
    name: DataNetwork.ArbitrumSepolia,
    symbol: 'SepoliaARETH',
  },
  TON: {
    name: DataNetwork.TON,
    symbol: 'TON',
  },
  KAS: {
    name: DataNetwork.KASPA,
    symbol: 'KAS',
  },
  SUI: {
    name: DataNetwork.SUI,
    symbol: 'SUI',
  }
};

export enum WalletMode {
  Software = "Software",
  Hardware = "Hardware",
}

export enum AssetType {
  COIN = 'COIN',
  TOKEN = 'TOKEN',
  NFT = 'NFT',
}
