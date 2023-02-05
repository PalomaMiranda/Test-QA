Cypress.Commands.add("ignoreLoopLimitExceeded", () => {
    Cypress.on("uncaught:exception", (err) => !err.message.includes("ResizeObserver loop limit exceeded"));
  });
  
  Cypress.Commands.add("ignoreCannotReadId", () => {
    Cypress.on("uncaught:exception", (err) => !err.message.includes("Cannot read properties of null (reading 'id')"));
  });
  