// Type data Enum(tipe data nilainya sudah fix (string | number))
export enum mhsType {
  REGULER = "reguler",
  KARYAWAN = "karyawan",
}

export type mhs = {
  nim: string;
  name: string;
  type: mhsType;
};
