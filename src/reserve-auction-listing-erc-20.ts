import {
  ReserveAuctionListingErc20AuctionBid as ReserveAuctionListingErc20AuctionBidEvent,
  ReserveAuctionListingErc20AuctionCanceled as ReserveAuctionListingErc20AuctionCanceledEvent,
  ReserveAuctionListingErc20AuctionCreated as ReserveAuctionListingErc20AuctionCreatedEvent,
  ReserveAuctionListingErc20AuctionEnded as ReserveAuctionListingErc20AuctionEndedEvent,
  ReserveAuctionListingErc20AuctionReservePriceUpdated as ReserveAuctionListingErc20AuctionReservePriceUpdatedEvent,
  ReserveAuctionListingErc20RoyaltyPayout as ReserveAuctionListingErc20RoyaltyPayoutEvent
} from "../generated/ReserveAuctionListingErc20/ReserveAuctionListingErc20"
import {
  ReserveAuctionListingErc20AuctionBid,
  ReserveAuctionListingErc20AuctionCanceled,
  ReserveAuctionListingErc20AuctionCreated,
  ReserveAuctionListingErc20AuctionEnded,
  ReserveAuctionListingErc20AuctionReservePriceUpdated,
  ReserveAuctionListingErc20RoyaltyPayout
} from "../generated/schema"

export function handleReserveAuctionListingErc20AuctionBid(
  event: ReserveAuctionListingErc20AuctionBidEvent
): void {
  let entity = new ReserveAuctionListingErc20AuctionBid(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_duration = event.params.auction.duration
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingErc20AuctionCanceled(
  event: ReserveAuctionListingErc20AuctionCanceledEvent
): void {
  let entity = new ReserveAuctionListingErc20AuctionCanceled(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_duration = event.params.auction.duration
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingErc20AuctionCreated(
  event: ReserveAuctionListingErc20AuctionCreatedEvent
): void {
  let entity = new ReserveAuctionListingErc20AuctionCreated(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_duration = event.params.auction.duration
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingErc20AuctionEnded(
  event: ReserveAuctionListingErc20AuctionEndedEvent
): void {
  let entity = new ReserveAuctionListingErc20AuctionEnded(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_duration = event.params.auction.duration
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingErc20AuctionReservePriceUpdated(
  event: ReserveAuctionListingErc20AuctionReservePriceUpdatedEvent
): void {
  let entity = new ReserveAuctionListingErc20AuctionReservePriceUpdated(
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
  entity.auction_listingFeeRecipient = event.params.auction.listingFeeRecipient
  entity.auction_duration = event.params.auction.duration
  entity.auction_listingFeeBps = event.params.auction.listingFeeBps
  entity.save()
}

export function handleReserveAuctionListingErc20RoyaltyPayout(
  event: ReserveAuctionListingErc20RoyaltyPayoutEvent
): void {
  let entity = new ReserveAuctionListingErc20RoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
