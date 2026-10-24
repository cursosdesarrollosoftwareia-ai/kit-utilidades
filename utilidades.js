export function aplicarDescuento(precio, porcentaje) {
  if (!(porcentaje >= 0 && porcentaje <= 100)) {
    throw new RangeError("El porcentaje debe estar entre 0 y 100");
  }

  const precioFinal = precio * (1 - porcentaje / 100);
  return Math.round((precioFinal + Number.EPSILON) * 100) / 100;

//este comentario es para probar el commit

}