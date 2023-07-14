// Fonction pour télécharger le fichier
export const uploadFile = async (file: string | Blob) => {
  const url = "http://localhost:1337/api/upload";

  const jwt = localStorage.getItem("jwt");

  const formData = new FormData();
  const response = await fetch(file as string);
  const blob = await response.blob();
  formData.append("files", blob);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body: formData,
    });

    const data = await response.json();
    return data[0]; // Retourner le premier fichier téléchargé (dans le cas où plusieurs fichiers sont téléchargés)
  } catch (error) {
    console.error("Erreur:", error);
  }
};
