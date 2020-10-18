export const ASCENDING = {
    value: "Ascending",
    isAscending: () => true,
    isDescending: () => false,
    isRelevance: () => false,
    comparator: (a,b) => {
        return b.price < a.price ?  1
            : b.price > a.price ? -1
                : 0;
    }
}
export const DESCENDING = {
    value: "Descending",
    isAscending: () => false,
    isDescending: () => true,
    isRelevance: () => false,
    comparator: (a,b) => {
        return b.price > a.price ? 1
            : b.price < a.price ? -1
                : 0;
    }
}
export const RELEVANCE = {
    value: "Relevance",
    isAscending: () => false,
    isDescending: () => false,
    isRelevance: () => true,
    comparator: () => {
        return 0;
    }
}