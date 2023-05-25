export const getPercentageProgressBar = (funded: number, goal: number) => {
  const rate = funded / goal;
  return funded === 0 //Percent completed goal
    ? 0
    : Math.floor(rate * 10000) / 100;
};

export const getFontStyles = (fontStyles: [string]) => {
  let fontStyleProperties = {};
  if (fontStyles.includes('italic'))
    fontStyleProperties['fontStyle'] = 'italic';
  if (fontStyles.includes('bold')) fontStyleProperties['fontWeight'] = 'bold';
  return fontStyleProperties;
};

export const getCampagin = async (productId: string) => {
  const data = await fetch(
    `https://fundpop-staging.fly.dev/api/proxy-no-authen/campaigns/${productId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((data) => {
      if (data?.campaign) return data;
      return null;
    })
    .catch((err) => {
      console.log('Fail to fetch campaign: ', err);
      return null;
    });
  return data;
};
