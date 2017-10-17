const initialState = {
  data: [
    {
      id: 1,
      name: 'Something',
      description: 'Yeah stuff'
    },
    {
      id: 2,
      name: 'Something Else',
      description: 'Yeah stuff'
    },
    {
      id: 3,
      name: 'Something Else Else',
      description: 'Yeah stuff'
    },
    {
      id: 4,
      name: 'Something Even More Else',
      description: 'Yeah stuff'
    }
  ]
}

export default (state = initialState, action) => {
  return state
}
