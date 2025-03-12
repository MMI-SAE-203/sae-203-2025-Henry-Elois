import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export { pb };

//tous les films

export async function getAllFilms(collection = "Film") {
  try {
    return await pb.collection(collection).getFullList();
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    film.imgUrl = pb.files.getURL(film, film.affiche);
    return [];
  }
}

//tous les invites

export async function getAllInvites(collection = "Invite") {
  try {
    return await pb.collection(collection).getFullList();
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}

//trier les films par date

export async function getFilmsSortedByDate() {
  const films = await pb.collection("Film").getFullList({
    sort: "date_projection",
  });
  return films;
}

//activité par date de projection

export async function getActiviteSortedByDate() {
  const activite = await pb.collection("Activite").getFullList({
    sort: "date",
  });
  return activite;
}

//acteurs et réalisateurs par ordre alphabétique

export async function getAllParticipantsSortedByName() {
  const participants = await pb.collection("Invite").getFullList({
    filter: 'role="realisateur" || role="acteur"',
    sort: "nom",
  });
  return participants;
}

//films par id

export async function oneID(id) {
  const Onerecord = await pb.collection("Film").getOne(id);
  return Onerecord;
}

//activité par id

export async function activitebyID(id) {
  const Onerecord = await pb.collection("Activite").getOne(id);
  return Onerecord;
}

//acteur et réalisateur par id

export async function getParticipantByID(id) {
  const participant = await pb.collection("Invite").getOne(id, {
    filter: 'role="realisateur" || role="acteur"',
  });
  return participant;
}

// Animateur par id

export async function getActivitybyAnimatorID(animatorId) {
  const Records = await pb
    .collection("Activite")
    .getFullList({ filter: `Invite = "${animatorId}"` });
  return Records;
}

// Animateur par nom

export async function allActiviteByAnimateurName(nom) {
  const allRecord = await pb.collection("Activite").getFullList({
    filter: `Invite.nom = '${nom}'`,
    expand: "Invite",
  });
  return allRecord;
}

//ajouter un film

export async function addFilm(newFilm) {
  await pb.collection("Film").create(newFilm);
}

//ajouter une activité

export async function addActivite(newActivite) {
  await pb.collection("Activite").create(newActivite);
}

//ajouter un acteur ou réalisateur

export async function addInvite(newInvite) {
  const Records = await pb.collection("Invite").create(newInvite);
  return Records;
}

//modifier un film

export async function updateFilmById(id, data) {
  await pb.collection("Film").update(id, data);
}

//modifier une activite

export async function updateActiviteById(id, data) {
  await pb.collection("Activite").update(id, data);
}

//modifier un acteur ou réalisateur

export async function updateInviteById(id, data) {
  await pb.collection("Invite").update(id, data);
}

//invite par role 

export async function getInvitesByRole(roleFilter) {
  const invitesQuery = pb.collection("Invite").getFullList({
    filter: roleFilter ? `role~${roleFilter}` : "",
  });

  return invitesQuery;
}

