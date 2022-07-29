export const FIAT_MONEY = ['USD', 'CZK', 'EUR', 'GBP', 'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD'];

export const getCommission = () => {
  const pairs: { [x: string]: number } = {};

  FIAT_MONEY.forEach((m) => {
    FIAT_MONEY.forEach((mp) => {
      if (m !== mp) {
        const random = Math.floor(Math.random() * 5) || 1;

        const name = `${m}/${mp}`;

        pairs[name] = random;
      }
    });
  });

  return pairs;
}

export const getRates = () => {
  const pairs: { [x: string]: number } = {};

  FIAT_MONEY.forEach((m) => {
    FIAT_MONEY.forEach((mp) => {
      if (m !== mp) {
        let random = Math.floor(Math.random() * 100);

        if (random < 10) random = 10;

        const name = `${m}/${mp}`;

        pairs[name] = random;
      }
    });
  });

  return pairs;
}