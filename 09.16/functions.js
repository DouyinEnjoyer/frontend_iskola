function $(id) {
  return document.getElementById(id);
}

function rangeRGB() {
  const r = $("red-range").value;
  const g = $("green-range").value;
  const b = $("blue-range").value;

  $("rgb-box").style.backgroundColor = `rgb(${r},${g},${b})`;
}

$("red-range").addEventListener("change", rangeRGB);
$("green-range").addEventListener("change", rangeRGB);
$("blue-range").addEventListener("change", rangeRGB);
