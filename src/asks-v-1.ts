import {
  AskCanceled as AskCanceledEvent,
  AskCreated as AskCreatedEvent,
  AskFilled as AskFilledEvent,
  AskPriceUpdated as AskPriceUpdatedEvent,
  AsksV1ExchangeExecuted as AsksV1ExchangeExecutedEvent,
  AsksV1RoyaltyPayout as AsksV1RoyaltyPayoutEvent
} from "../generated/AsksV1/AsksV1"
import {
  AskCanceled,
  AskCreated,
  AskFilled,
  AskPriceUpdated,
  AsksV1ExchangeExecuted,
  AsksV1RoyaltyPayout
} from "../generated/schema"

export function handleAskCanceled(event: AskCanceledEvent): void {
  let entity = new AskCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskCreated(event: AskCreatedEvent): void {
  let entity = new AskCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskFilled(event: AskFilledEvent): void {
  let entity = new AskFilled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.buyer = event.params.buyer
  entity.finder = event.params.finder
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskPriceUpdated(event: AskPriceUpdatedEvent): void {
  let entity = new AskPriceUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAsksV1ExchangeExecuted(
  event: AsksV1ExchangeExecutedEvent
): void {
  let entity = new AsksV1ExchangeExecuted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.userA = event.params.userA
  entity.userB = event.params.userB
  entity.a_tokenContract = event.params.a.tokenContract
  entity.a_tokenId = event.params.a.tokenId
  entity.a_amount = event.params.a.amount
  entity.b_tokenContract = event.params.b.tokenContract
  entity.b_tokenId = event.params.b.tokenId
  entity.b_amount = event.params.b.amount
  entity.save()
}

export function handleAsksV1RoyaltyPayout(
  event: AsksV1RoyaltyPayoutEvent
): void {
  let entity = new AsksV1RoyaltyPayout(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount
  entity.save()
}
