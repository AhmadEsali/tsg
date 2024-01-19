const breakPoints: { [key: string]: number } = {
  huge: 1200,
  large: 1024,
  medium: 768,
  small: 480,
};

type breakPointsTypes = 'huge' | 'large' | 'medium' | 'small';
export const media = (n: breakPointsTypes) => {
  const breakPointsArray = Object.keys(breakPoints).map((size) => [size, breakPoints[size]]);

  const [result] = breakPointsArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (max-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
