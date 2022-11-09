import { ethereum } from "@graphprotocol/graph-ts"
import {
  AskCanceled as AskCanceledEvent,
  AskCreated as AskCreatedEvent,
  AskFilled as AskFilledEvent,
  AskPriceUpdated as AskPriceUpdatedEvent
} from "../generated/AsksV1/AsksV1"
import {
  Ask,
  AskEvent
} from "../generated/schema"


export function handleAskCreated(event: AskCreatedEvent): void {
  let entity = new Ask(
    event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString()
  )
  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = true
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskCanceled(event: AskCanceledEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  
  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = false
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskPriceUpdated(event: AskPriceUpdatedEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  
  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = true
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}

export function handleAskFilled(event: AskFilledEvent): void {
  let entity = Ask.load(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  
  if (entity == null) {
    entity = new Ask(event.params.tokenContract.toHex() + "-" + event.params.tokenId.toString())
  }

  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_live = false
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}
