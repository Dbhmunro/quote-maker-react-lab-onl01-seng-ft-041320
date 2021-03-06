// TODO: Create action creators as defined in tests

// const ADD_QUOTE = 'ADD_QUOTE'
// const REMOVE_QUOTE = 'REMOVE_QUOTE'
// const UPVOTE_QUOTE = 'UPVOTE_QUOTE'
// const DOWNVOTE_QUOTE = 'DOWNVOTE_QUOTE'

export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quote
    }
}
  
export const removeQuote = quoteId => {
    return {
        type: 'REMOVE_QUOTE',
        quoteId
    }
}

export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
        type: 'DOWNVOTE_QUOTE',
        quoteId
    }
}