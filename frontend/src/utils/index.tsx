export const upperCaseFirstChar = (str: string): string => str[0].toUpperCase() + str.substr(1);

export const isProduction = process.env.NODE_ENV === 'production';
