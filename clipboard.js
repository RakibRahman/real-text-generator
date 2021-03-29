const copyArea = document.getElementById("output");
const copyBTN = document.getElementById("copyBTN");
const resetBTN = document.getElementById("resetBTN");

const copyText = () => {
  const inputData = copyArea.innerText.trim();

  if (inputData) {
    navigator.clipboard
      .writeText(inputData)
      .then(() => {
        // inputData.innerText = "";
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your text has been copied to clipboard",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }
};
copyBTN.addEventListener("click", copyText);

const resetText = () => {
  output.innerText = "";
  copyReset.style.display = "none";
};
resetBTN.addEventListener("click", resetText);
