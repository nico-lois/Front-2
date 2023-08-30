document.getElementById("btnLogout").addEventListener("click", function () {
  // Lógica para cerrar sesión
  logout();
});

// function logout() {
//   console.log("SALIRRRRR");
//   // Eliminar los datos de sesión del local storage
//   localStorage.clear(); // Reemplaza con la clave que usas para almacenar los datos de sesión

//   // Redirigir al usuario a la página de inicio de sesión o a la página principal
//   window.location.href = "login.html"; // Reemplaza con la ruta de tu página de inicio de sesión
// }

function logout() {
  console.log("SALIRRRRR");
  // Guardar el estado actual del modo oscuro antes de eliminar otros datos de sesión
  var modoOscuroGuardado = localStorage.getItem("modoOscuro");

  // Eliminar los datos de sesión del local storage
  localStorage.clear(); // Reemplaza con la clave que usas para almacenar los datos de sesión

  // Restaurar el estado del modo oscuro en el localStorage
  localStorage.setItem("modoOscuro", modoOscuroGuardado);

  // Redirigir al usuario a la página de inicio de sesión o a la página principal
  window.location.href = "login.html"; // Reemplaza con la ruta de tu página de inicio de sesión
}
