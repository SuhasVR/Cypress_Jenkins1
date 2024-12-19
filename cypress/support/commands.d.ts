declare namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Custom command to verify a downloaded file.
       * @example
       * cy.verifyDownload('file.txt');
       */
      verifyDownload(fileName: string): void;
    }
  }

  