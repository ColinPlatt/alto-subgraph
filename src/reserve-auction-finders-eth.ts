import {
  ReserveAuctionFindersEthAuctionBid as ReserveAuctionFindersEthAuctionBidEvent,
  ReserveAuctionFindersEthAuctionCanceled as ReserveAuctionFindersEthAuctionCanceledEvent,
  ReserveAuctionFindersEthAuctionCreated as ReserveAuctionFindersEthAuctionCreatedEvent,
  ReserveAuctionFindersEthAuctionEnded as ReserveAuctionFindersEthAuctionEndedEvent,
  ReserveAuctionFindersEthAuctionReservePriceUpdated as ReserveAuctionFindersEthAuctionReservePriceUpdatedEvent,
  ReserveAuctionFindersEthRoyaltyPayout as ReserveAuctionFindersEthRoyaltyPayoutEvent
} from "../generated/ReserveAuctionFindersEth/ReserveAuctionFindersEth"
import {
  ReserveAuctionFindersEthAuctionBid,
  ReserveAuctionFindersEthAuctionCanceled,
  ReserveAuctionFindersEthAuctionCreated,
  ReserveAuctionFindersEthAuctionEnded,
  ReserveAuctionFindersEthAuctionReservePriceUpdated,
  ReserveAuctionFindersEthRoyaltyPayout
} from "../generated/schema"

export function handleReserveAuctionFindersEthAuctionBid(
  event: ReserveAuctionFindersEthAuctionBidEvent
): void {
  let entity = new ReserveAuctionFindersEthAuctionBid(
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
  entity.auction_finder = event.params.auction.finder
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersEthAuctionCanceled(
  event: ReserveAuctionFindersEthAuctionCanceledEvent
): void {
  let entity = new ReserveAuctionFindersEthAuctionCanceled(
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
  entity.auction_finder = event.params.auction.finder
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersEthAuctionCreated(
  event: ReserveAuctionFindersEthAuctionCreatedEvent
): void {
  let entity = new ReserveAuctionFindersEthAuctionCreated(
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
  entity.auction_finder = event.params.auction.finder
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersEthAuctionEnded(
  event: ReserveAuctionFindersEthAuctionEndedEvent
): void {
  let entity = new ReserveAuctionFindersEthAuctionEnded(
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
  entity.auction_finder = event.params.auction.finder
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersEthAuctionReservePriceUpdated(
  event: ReserveAuctionFindersEthAuctionReservePriceUpdatedEvent
): void {
  let entity = new ReserveAuctionFindersEthAuctionReservePriceUpdated(
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
  entity.auction_finder = event.params.auction.finder
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_findersFeeBps = event.params.auction.findersFeeBps
  entity.save()
}

export function handleReserveAuctionFindersEthRoyaltyPayout(
  event: ReserveAuctionFindersEthRoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionFindersEthRoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
