// Fonction pour télécharger le fichier
export const uploadFile = async (file: string | Blob) => {
  const url = "http://localhost:1337/upload";

  const formData = new FormData();
  formData.append("files", file); // 'file' est le fichier à télécharger

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data[0]; // Retourner le premier fichier téléchargé (dans le cas où plusieurs fichiers sont téléchargés)
  } catch (error) {
    console.error("Erreur:", error);
  }
};
