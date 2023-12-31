import normalizers from '../classes/Normalizers.js'

let unusefulWordsForName = [
    "Celular",
    "Liberado",
    "Libre",
    "Cuotas",
    "Sin",
    "Interes",
    "Original",
    "Nuevo",
    "Modelo",
    "\\*1\\*",
  ];

//configuration for each field of the JSON object to normalize
var configuration = {
    name: new normalizers.CleanNormalizer(unusefulWordsForName),
    price:  new normalizers.MonetaryAmountNormalizer(),
    processor: new normalizers.ProcessorNormalizer("Snapdragon", "processor"),
    batery: new normalizers.BatteryNormalizer("battery"),
    os: new normalizers.OSNormalizer(["Android", "IOS"],"operativeSystem"),
    camera: new normalizers.MainCameraNormalizer("mainCamera"),

};

export default configuration;