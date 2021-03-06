import CRUDExtend from '../extends/crud'

class PromotionsEndpoint extends CRUDExtend {
  constructor(endpoint) {
    super(endpoint)

    this.endpoint = 'promotions'
  }

  Attributes() {
    return this.request.send(`${this.endpoint}/attributes`, 'GET')
  }

  Codes(promotionId) {
    return this.request.send(`${this.endpoint}/${promotionId}/codes`, 'GET')
  }

  AddCodes(promotionId, codes) {
    return this.request.send(`${this.endpoint}/${promotionId}/codes`, 'POST', {
      type: 'promotion_codes',
      codes
    })
  }

  DeleteCode(promotionId, codeId) {
    return this.request.send(
      `${this.endpoint}/${promotionId}/codes/${codeId}`,
      'DELETE'
    )
  }

  DeleteCodes(promotionId, codes) {
    return this.request.send(
      `${this.endpoint}/${promotionId}/codes`,
      'DELETE',
      {
        type: 'promotion_codes',
        codes
      }
    )
  }
}

export default PromotionsEndpoint
