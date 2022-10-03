import {
  ReserveAuctionFindersErc20AuctionBid as ReserveAuctionFindersErc20AuctionBidEvent,
  ReserveAuctionFindersErc20AuctionCanceled as ReserveAuctionFindersErc20AuctionCanceledEvent,
  ReserveAuctionFindersErc20AuctionCreated as ReserveAuctionFindersErc20AuctionCreatedEvent,
  ReserveAuctionFindersErc20AuctionEnded as ReserveAuctionFindersErc20AuctionEndedEvent,
  ReserveAuctionFindersErc20AuctionReservePriceUpdated as ReserveAuctionFindersErc20AuctionReservePriceUpdatedEvent,
  ReserveAuctionFindersErc20RoyaltyPayout as ReserveAuctionFindersErc20RoyaltyPayoutEvent
} from "../generated/ReserveAuctionFindersErc20/ReserveAuctionFindersErc20"
import {
  ReserveAuctionFindersErc20AuctionBid,
  ReserveAuctionFindersErc20AuctionCanceled,
  ReserveAuctionFindersErc20AuctionCreated,
  ReserveAuctionFindersErc20AuctionEnded,
  ReserveAuctionFindersErc20AuctionReservePriceUpdated,
  ReserveAuctionFindersErc20RoyaltyPayout
} from "../generated/schema"

export function handleReserveAuctionFindersErc20AuctionBid(
  event: ReserveAuctionFindersErc20AuctionBidEvent
): void {
  let entity = new ReserveAuctionFindersErc20AuctionBid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.firstBid = event.params.firstBid
  entity.extended = event.params.extended
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_finder = event.params.auction.finder
  entity.auction_duration = event.params.auction.duration
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersErc20AuctionCanceled(
  event: ReserveAuctionFindersErc20AuctionCanceledEvent
): void {
  let entity = new ReserveAuctionFindersErc20AuctionCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_finder = event.params.auction.finder
  entity.auction_duration = event.params.auction.duration
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersErc20AuctionCreated(
  event: ReserveAuctionFindersErc20AuctionCreatedEvent
): void {
  let entity = new ReserveAuctionFindersErc20AuctionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_finder = event.params.auction.finder
  entity.auction_duration = event.params.auction.duration
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersErc20AuctionEnded(
  event: ReserveAuctionFindersErc20AuctionEndedEvent
): void {
  let entity = new ReserveAuctionFindersErc20AuctionEnded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_finder = event.params.auction.finder
  entity.auction_duration = event.params.auction.duration
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersErc20AuctionReservePriceUpdated(
  event: ReserveAuctionFindersErc20AuctionReservePriceUpdatedEvent
): void {
  let entity = new ReserveAuctionFindersErc20AuctionReservePriceUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_finder = event.params.auction.finder
  entity.auction_duration = event.params.auction.duration
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersErc20RoyaltyPayout(
  event: ReserveAuctionFindersErc20RoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionFindersErc20RoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
