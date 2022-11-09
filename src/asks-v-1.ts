import {
  AskCanceled as AskCanceledEvent,
  AskCreated as AskCreatedEvent,
  AskFilled as AskFilledEvent,
  AskPriceUpdated as AskPriceUpdatedEvent
} from "../generated/AsksV1/AsksV1"
import {
  AskEvent
} from "../generated/schema"

export function handleAsk(event: AskEvent): void {
  let entity = AskEvent.load(event.params.uuid.toHex())

  if (entity == null) {
    entity = new Attestation(event.params.uuid.toHex())
  }






  entity.tokenContract = event.params.tokenContract
  entity.tokenId = event.params.tokenId
  entity.ask_seller = event.params.ask.seller
  entity.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient
  entity.ask_askCurrency = event.params.ask.askCurrency
  entity.ask_findersFeeBps = event.params.ask.findersFeeBps
  entity.ask_askPrice = event.params.ask.askPrice
  entity.save()
}