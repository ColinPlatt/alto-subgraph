import {
  ReserveAuctionListingEthAuctionBid as ReserveAuctionListingEthAuctionBidEvent,
  ReserveAuctionListingEthAuctionCanceled as ReserveAuctionListingEthAuctionCanceledEvent,
  ReserveAuctionListingEthAuctionCreated as ReserveAuctionListingEthAuctionCreatedEvent,
  ReserveAuctionListingEthAuctionEnded as ReserveAuctionListingEthAuctionEndedEvent,
  ReserveAuctionListingEthAuctionReservePriceUpdated as ReserveAuctionListingEthAuctionReservePriceUpdatedEvent,
  ReserveAuctionListingEthRoyaltyPayout as ReserveAuctionListingEthRoyaltyPayoutEvent
} from "../generated/ReserveAuctionListingEth/ReserveAuctionListingEth"
import {
  ReserveAuctionListingEthAuctionBid,
  ReserveAuctionListingEthAuctionCanceled,
  ReserveAuctionListingEthAuctionCreated,
  ReserveAuctionListingEthAuctionEnded,
  ReserveAuctionListingEthAuctionReservePriceUpdated,
  ReserveAuctionListingEthRoyaltyPayout
} from "../generated/schema"

export function handleReserveAuctionListingEthAuctionBid(
  event: ReserveAuctionListingEthAuctionBidEvent
): void {
  let entity = new ReserveAuctionListingEthAuctionBid(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingEthAuctionCanceled(
  event: ReserveAuctionListingEthAuctionCanceledEvent
): void {
  let entity = new ReserveAuctionListingEthAuctionCanceled(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingEthAuctionCreated(
  event: ReserveAuctionListingEthAuctionCreatedEvent
): void {
  let entity = new ReserveAuctionListingEthAuctionCreated(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingEthAuctionEnded(
  event: ReserveAuctionListingEthAuctionEndedEvent
): void {
  let entity = new ReserveAuctionListingEthAuctionEnded(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingEthAuctionReservePriceUpdated(
  event: ReserveAuctionListingEthAuctionReservePriceUpdatedEvent
): void {
  let entity = new ReserveAuctionListingEthAuctionReservePriceUpdated(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_firstBidTime = event.params.auction.firstBidTime
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingEthRoyaltyPayout(
  event: ReserveAuctionListingEthRoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionListingEthRoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
