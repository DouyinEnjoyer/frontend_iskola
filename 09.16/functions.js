function $(id) {
  return document.getElementById(id);
}
function eljaras(id, mod, funkcio) {
  return $(id).addEventListener(mod, funkcio);
}

function rangeRGB() {
  const r = $("red-range").value;
  const g = $("green-range").value;
  const b = $("blue-range").value;
  const alpha = $("alpha-range").value;

  $("red-value").value = r;
  $("green-value").value = g;
  $("blue-value").value = b;
  $("alpha-value").value = alpha;

  $("rgb-box").style.backgroundColor = `rgba(${r},${g},${b},${alpha})`;
}
function rangeRGBAOnEnter() {
  const red = $("red-value").value;
  const green = $("green-value").value;
  const blue = $("blue-value").value;
  const alpha = $("alpha-value").value;

  $("red-range").value = red;
  $("green-range").value = green;
  $("blue-range").value = blue;
  $("alpha-range").value = alpha;

  $("rgb-box").style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
}

$("red-range").addEventListener("input", rangeRGB);
$("green-range").addEventListener("input", rangeRGB);
$("blue-range").addEventListener("input", rangeRGB);
$("alpha-range").addEventListener("input", rangeRGB);

eljaras("red-value", "input", rangeRGBAOnEnter);
$("green-value").addEventListener("input", rangeRGBAOnEnter);
$("blue-value").addEventListener("input", rangeRGBAOnEnter);
$("alpha-value").addEventListener("input", rangeRGBAOnEnter);
