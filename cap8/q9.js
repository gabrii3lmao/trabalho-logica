
export function converterMedidas() {
  import("convert").then(convert => {
    const dias = Number(prompt("Dias:"));
    const diasMin = convert(dias, "days").to("minutes");

    const gb = Number(prompt("Gigabytes:"));
    const gbBytes = convert(gb, "gigabytes").to("bytes");

    console.log("Dias → minutos:", diasMin);
    console.log("GB → bytes:", gbBytes);
  });

  return "Conversões realizadas.";
}