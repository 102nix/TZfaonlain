export type ValueStateType = {
  id: null | number
  title: string
  address: string
  type: string
  price: null | number	
}

export type ArrayStateType = null | Array<ValueStateType> 

export type ArrayAPIType = {
  config?: {url: string, method: string, headers: any, transformRequest: any, transformResponse: any}
  data: ArrayStateType
  headers?: {'content-type': string}
  request?: any
  status?: number
  statusText?: string
}
