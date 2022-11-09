import {
  Ask as AskEvent
} from "../generated/AsksV1/AsksV1"
import {
  AskCanceled,
  AskCreated,
  AskFilled,
  AskPriceUpdated,
} from "../generated/schema"

export function handleAsk(event: AskEvent): void {
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