export const filterImage = (theme) => `/assets/icons/filter-${
    theme.type === "dark" ? "dark" : "light"
}.png`;
export const closeFilterImage = (theme) => `/assets/icons/close-${
    theme.type === "dark" ? "dark" : "light"
}.png`;

// Table Pagination Icons
export const tablePaginationNextOne = (theme) => `/assets/icons/next-one-${
    theme.type === "dark" ? "dark" : "light"
}.png`
export const tablePaginationNextAll = (theme) => `/assets/icons/next-all-${
    theme.type === "dark" ? "dark" : "light"
}.png`
export const tablePaginationBackOne = (theme) => `/assets/icons/back-one-${
    theme.type === "dark" ? "dark" : "light"
}.png`
export const tablePaginationBackAll = (theme) => `/assets/icons/back-all-${
    theme.type === "dark" ? "dark" : "light"
}.png`