export const extractClassesStyles = (
  className: string,
  ...params: string[]
) => {
  const regex = new RegExp(
    `(\\w+-)?((?<!\\w)(${params.join("|")}))((-\\w+)+)?`,
    "gi",
  );

  const result_searched = className.match(regex)?.join(" ") ?? "";

  const result_retired = className
    .split(" ")
    .reduce((ac, value) => {
      if (result_searched.includes(value)) return ac;
      ac.push(value);
      return ac;
    }, [] as string[])
    .join(" ");

  return {
    result_searched,
    result_retired,
  };
};
