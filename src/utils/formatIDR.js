export default function formatToIDR(value) {
    const number = parseInt(value, 10);
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  }