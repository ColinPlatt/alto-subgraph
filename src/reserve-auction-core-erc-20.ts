import {
  AuctionBid as AuctionBidEvent,
  AuctionCanceled as AuctionCanceledEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionEnded as AuctionEndedEvent,
  AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent,
  ReserveAuctionCoreErc20RoyaltyPayout as ReserveAuctionCoreErc20RoyaltyPayoutEvent
} from "../generated/ReserveAuctionCoreErc20/ReserveAuctionCoreErc20"
import {
  AuctionBid,
  AuctionCanceled,
  AuctionCreated,
  AuctionEnded,
  AuctionReservePriceUpdated,
  ReserveAuctionCoreErc20RoyaltyPayout
} from "../generated/schema"

export function handleAuctionBid(event: AuctionBidEvent): void {
  let entity = new AuctionBid(
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
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleAuctionCanceled(event: AuctionCanceledEvent): void {
  let entity = new AuctionCanceled(
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
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
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
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  let entity = new AuctionEnded(
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
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleAuctionReservePriceUpdated(
  event: AuctionReservePriceUpdatedEvent
): void {
  let entity = new AuctionReservePriceUpdated(
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
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_currency = event.params.auction.currency
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreErc20RoyaltyPayout(
  event: ReserveAuctionCoreErc20RoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionCoreErc20RoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
