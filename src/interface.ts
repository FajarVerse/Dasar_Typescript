// Type interface dan readonly properties
export interface Dosen {
  id: number;
  nama: string;
  matkul: string;
  alamat?: string;
  readonly noPhone: string;
}
