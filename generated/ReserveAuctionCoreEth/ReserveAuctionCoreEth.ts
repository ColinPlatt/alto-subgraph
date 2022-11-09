// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ReserveAuctionCoreEthAuctionBid extends ethereum.Event {
  get params(): ReserveAuctionCoreEthAuctionBid__Params {
    return new ReserveAuctionCoreEthAuctionBid__Params(this);
  }
}

export class ReserveAuctionCoreEthAuctionBid__Params {
  _event: ReserveAuctionCoreEthAuctionBid;

  constructor(event: ReserveAuctionCoreEthAuctionBid) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get firstBid(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get extended(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }

  get auction(): ReserveAuctionCoreEthAuctionBidAuctionStruct {
    return changetype<ReserveAuctionCoreEthAuctionBidAuctionStruct>(
      this._event.parameters[4].value.toTuple()
    );
  }
}

export class ReserveAuctionCoreEthAuctionBidAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuctionCoreEthAuctionCanceled extends ethereum.Event {
  get params(): ReserveAuctionCoreEthAuctionCanceled__Params {
    return new ReserveAuctionCoreEthAuctionCanceled__Params(this);
  }
}

export class ReserveAuctionCoreEthAuctionCanceled__Params {
  _event: ReserveAuctionCoreEthAuctionCanceled;

  constructor(event: ReserveAuctionCoreEthAuctionCanceled) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get auction(): ReserveAuctionCoreEthAuctionCanceledAuctionStruct {
    return changetype<ReserveAuctionCoreEthAuctionCanceledAuctionStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ReserveAuctionCoreEthAuctionCanceledAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuctionCoreEthAuctionCreated extends ethereum.Event {
  get params(): ReserveAuctionCoreEthAuctionCreated__Params {
    return new ReserveAuctionCoreEthAuctionCreated__Params(this);
  }
}

export class ReserveAuctionCoreEthAuctionCreated__Params {
  _event: ReserveAuctionCoreEthAuctionCreated;

  constructor(event: ReserveAuctionCoreEthAuctionCreated) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get auction(): ReserveAuctionCoreEthAuctionCreatedAuctionStruct {
    return changetype<ReserveAuctionCoreEthAuctionCreatedAuctionStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ReserveAuctionCoreEthAuctionCreatedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuctionCoreEthAuctionEnded extends ethereum.Event {
  get params(): ReserveAuctionCoreEthAuctionEnded__Params {
    return new ReserveAuctionCoreEthAuctionEnded__Params(this);
  }
}

export class ReserveAuctionCoreEthAuctionEnded__Params {
  _event: ReserveAuctionCoreEthAuctionEnded;

  constructor(event: ReserveAuctionCoreEthAuctionEnded) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get auction(): ReserveAuctionCoreEthAuctionEndedAuctionStruct {
    return changetype<ReserveAuctionCoreEthAuctionEndedAuctionStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ReserveAuctionCoreEthAuctionEndedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuctionCoreEthAuctionReservePriceUpdated extends ethereum.Event {
  get params(): ReserveAuctionCoreEthAuctionReservePriceUpdated__Params {
    return new ReserveAuctionCoreEthAuctionReservePriceUpdated__Params(this);
  }
}

export class ReserveAuctionCoreEthAuctionReservePriceUpdated__Params {
  _event: ReserveAuctionCoreEthAuctionReservePriceUpdated;

  constructor(event: ReserveAuctionCoreEthAuctionReservePriceUpdated) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get auction(): ReserveAuctionCoreEthAuctionReservePriceUpdatedAuctionStruct {
    return changetype<
      ReserveAuctionCoreEthAuctionReservePriceUpdatedAuctionStruct
    >(this._event.parameters[2].value.toTuple());
  }
}

export class ReserveAuctionCoreEthAuctionReservePriceUpdatedAuctionStruct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get reservePrice(): BigInt {
    return this[1].toBigInt();
  }

  get sellerFundsRecipient(): Address {
    return this[2].toAddress();
  }

  get highestBid(): BigInt {
    return this[3].toBigInt();
  }

  get highestBidder(): Address {
    return this[4].toAddress();
  }

  get duration(): BigInt {
    return this[5].toBigInt();
  }

  get startTime(): BigInt {
    return this[6].toBigInt();
  }

  get firstBidTime(): BigInt {
    return this[7].toBigInt();
  }
}

export class ReserveAuctionCoreEthRoyaltyPayout extends ethereum.Event {
  get params(): ReserveAuctionCoreEthRoyaltyPayout__Params {
    return new ReserveAuctionCoreEthRoyaltyPayout__Params(this);
  }
}

export class ReserveAuctionCoreEthRoyaltyPayout__Params {
  _event: ReserveAuctionCoreEthRoyaltyPayout;

  constructor(event: ReserveAuctionCoreEthRoyaltyPayout) {
    this._event = event;
  }

  get tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ReserveAuctionCoreEth__auctionForNFTResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: Address;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: Address,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }

  getSeller(): Address {
    return this.value0;
  }

  getReservePrice(): BigInt {
    return this.value1;
  }

  getSellerFundsRecipient(): Address {
    return this.value2;
  }

  getHighestBid(): BigInt {
    return this.value3;
  }

  getHighestBidder(): Address {
    return this.value4;
  }

  getDuration(): BigInt {
    return this.value5;
  }

  getStartTime(): BigInt {
    return this.value6;
  }

  getFirstBidTime(): BigInt {
    return this.value7;
  }
}

export class ReserveAuctionCoreEth extends ethereum.SmartContract {
  static bind(address: Address): ReserveAuctionCoreEth {
    return new ReserveAuctionCoreEth("ReserveAuctionCoreEth", address);
  }

  auctionForNFT(
    param0: Address,
    param1: BigInt
  ): ReserveAuctionCoreEth__auctionForNFTResult {
    let result = super.call(
      "auctionForNFT",
      "auctionForNFT(address,uint256):(address,uint96,address,uint96,address,uint32,uint32,uint32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new ReserveAuctionCoreEth__auctionForNFTResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddress(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt()
    );
  }

  try_auctionForNFT(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<ReserveAuctionCoreEth__auctionForNFTResult> {
    let result = super.tryCall(
      "auctionForNFT",
      "auctionForNFT(address,uint256):(address,uint96,address,uint96,address,uint32,uint32,uint32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ReserveAuctionCoreEth__auctionForNFTResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddress(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt()
      )
    );
  }

  erc721TransferHelper(): Address {
    let result = super.call(
      "erc721TransferHelper",
      "erc721TransferHelper():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_erc721TransferHelper(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "erc721TransferHelper",
      "erc721TransferHelper():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  registrar(): Address {
    let result = super.call("registrar", "registrar():(address)", []);

    return result[0].toAddress();
  }

  try_registrar(): ethereum.CallResult<Address> {
    let result = super.tryCall("registrar", "registrar():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(_interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _erc721TransferHelper(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _royaltyEngine(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _protocolFeeSettings(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _weth(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class _handleRoyaltyEnginePayoutCall extends ethereum.Call {
  get inputs(): _handleRoyaltyEnginePayoutCall__Inputs {
    return new _handleRoyaltyEnginePayoutCall__Inputs(this);
  }

  get outputs(): _handleRoyaltyEnginePayoutCall__Outputs {
    return new _handleRoyaltyEnginePayoutCall__Outputs(this);
  }
}

export class _handleRoyaltyEnginePayoutCall__Inputs {
  _call: _handleRoyaltyEnginePayoutCall;

  constructor(call: _handleRoyaltyEnginePayoutCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _payoutCurrency(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class _handleRoyaltyEnginePayoutCall__Outputs {
  _call: _handleRoyaltyEnginePayoutCall;

  constructor(call: _handleRoyaltyEnginePayoutCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _duration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _sellerFundsRecipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }
}

export class CreateBidCall extends ethereum.Call {
  get inputs(): CreateBidCall__Inputs {
    return new CreateBidCall__Inputs(this);
  }

  get outputs(): CreateBidCall__Outputs {
    return new CreateBidCall__Outputs(this);
  }
}

export class CreateBidCall__Inputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateBidCall__Outputs {
  _call: CreateBidCall;

  constructor(call: CreateBidCall) {
    this._call = call;
  }
}

export class SetAuctionReservePriceCall extends ethereum.Call {
  get inputs(): SetAuctionReservePriceCall__Inputs {
    return new SetAuctionReservePriceCall__Inputs(this);
  }

  get outputs(): SetAuctionReservePriceCall__Outputs {
    return new SetAuctionReservePriceCall__Outputs(this);
  }
}

export class SetAuctionReservePriceCall__Inputs {
  _call: SetAuctionReservePriceCall;

  constructor(call: SetAuctionReservePriceCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetAuctionReservePriceCall__Outputs {
  _call: SetAuctionReservePriceCall;

  constructor(call: SetAuctionReservePriceCall) {
    this._call = call;
  }
}

export class SetRoyaltyEngineAddressCall extends ethereum.Call {
  get inputs(): SetRoyaltyEngineAddressCall__Inputs {
    return new SetRoyaltyEngineAddressCall__Inputs(this);
  }

  get outputs(): SetRoyaltyEngineAddressCall__Outputs {
    return new SetRoyaltyEngineAddressCall__Outputs(this);
  }
}

export class SetRoyaltyEngineAddressCall__Inputs {
  _call: SetRoyaltyEngineAddressCall;

  constructor(call: SetRoyaltyEngineAddressCall) {
    this._call = call;
  }

  get _royaltyEngine(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRoyaltyEngineAddressCall__Outputs {
  _call: SetRoyaltyEngineAddressCall;

  constructor(call: SetRoyaltyEngineAddressCall) {
    this._call = call;
  }
}

export class SettleAuctionCall extends ethereum.Call {
  get inputs(): SettleAuctionCall__Inputs {
    return new SettleAuctionCall__Inputs(this);
  }

  get outputs(): SettleAuctionCall__Outputs {
    return new SettleAuctionCall__Outputs(this);
  }
}

export class SettleAuctionCall__Inputs {
  _call: SettleAuctionCall;

  constructor(call: SettleAuctionCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SettleAuctionCall__Outputs {
  _call: SettleAuctionCall;

  constructor(call: SettleAuctionCall) {
    this._call = call;
  }
}