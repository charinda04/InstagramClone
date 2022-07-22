const delayAsync = async (timeout: number): Promise<void> => {
  await new Promise(resolve => setTimeout(() => resolve, timeout));
};

export { delayAsync };
