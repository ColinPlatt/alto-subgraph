import {
  ReserveAuctionCoreEthAuctionBid as ReserveAuctionCoreEthAuctionBidEvent,
  ReserveAuctionCoreEthAuctionCanceled as ReserveAuctionCoreEthAuctionCanceledEvent,
  ReserveAuctionCoreEthAuctionCreated as ReserveAuctionCoreEthAuctionCreatedEvent,
  ReserveAuctionCoreEthAuctionEnded as ReserveAuctionCoreEthAuctionEndedEvent,
  ReserveAuctionCoreEthAuctionReservePriceUpdated as ReserveAuctionCoreEthAuctionReservePriceUpdatedEvent,
  ReserveAuctionCoreEthRoyaltyPayout as ReserveAuctionCoreEthRoyaltyPayoutEvent
} from "../generated/ReserveAuctionCoreEth/ReserveAuctionCoreEth"
import {
  ReserveAuctionCoreEthAuctionBid,
  ReserveAuctionCoreEthAuctionCanceled,
  ReserveAuctionCoreEthAuctionCreated,
  ReserveAuctionCoreEthAuctionEnded,
  ReserveAuctionCoreEthAuctionReservePriceUpdated,
  ReserveAuctionCoreEthRoyaltyPayout
} from "../generated/schema"

export function handleReserveAuctionCoreEthAuctionBid(
  event: ReserveAuctionCoreEthAuctionBidEvent
): void {
  let entity = new ReserveAuctionCoreEthAuctionBid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.firstBid = event.params.firstBid
  entity.extended = event.params.extended
  entity.auction_seller = event.params.auction.seller
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreEthAuctionCanceled(
  event: ReserveAuctionCoreEthAuctionCanceledEvent
): void {
  let entity = new ReserveAuctionCoreEthAuctionCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreEthAuctionCreated(
  event: ReserveAuctionCoreEthAuctionCreatedEvent
): void {
  let entity = new ReserveAuctionCoreEthAuctionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreEthAuctionEnded(
  event: ReserveAuctionCoreEthAuctionEndedEvent
): void {
  let entity = new ReserveAuctionCoreEthAuctionEnded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreEthAuctionReservePriceUpdated(
  event: ReserveAuctionCoreEthAuctionReservePriceUpdatedEvent
): void {
  let entity = new ReserveAuctionCoreEthAuctionReservePriceUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.auction_seller = event.params.auction.seller
  entity.auction_reservePrice = event.params.auction.reservePrice
  entity.auction_sellerFundsRecipient =
    event.params.auction.sellerFundsRecipient
  entity.auction_highestBid = event.params.auction.highestBid
  entity.auction_highestBidder = event.params.auction.highestBidder
  entity.auction_duration = event.params.auction.duration
  entity.auction_startTime = event.params.auction.startTime
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.save()
}

export function handleReserveAuctionCoreEthRoyaltyPayout(
  event: ReserveAuctionCoreEthRoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionCoreEthRoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
