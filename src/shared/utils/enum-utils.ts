export type Options = {
  filter: boolean;
};

export class EnumUtil {
  static toArray<T>(o: { [s: string]: T } | ArrayLike<T>, opts?: Options): T[] {
    return Object.values(o).filter(
      (oo) => typeof oo !== "string" || !opts?.filter
    );
  }
}
