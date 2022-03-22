// buscar links salvos
export async function getLinksSaved(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// salvar os links no localStorage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSaved(key);

  // condição para não duplicar links no storage
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("esse link já existe");
    return;
  }

  // adicionar novo link ao storage
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("link salvo com sucesso");
}

// delete links salvos
export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });

  localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));

  return myLinks;
}
