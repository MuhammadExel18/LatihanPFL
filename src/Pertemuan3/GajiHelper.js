export const hitungPotongan = (gaji) => gaji * 0.05;
export const hitungGajiBersih = (gaji) => gaji - (gaji * 0.05);

export const formatRupiah = (angka) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
};