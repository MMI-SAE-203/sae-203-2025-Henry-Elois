import PocketBase from "pocketbase";
const pb = new PocketBase("https://cavatrailer.eloishenry.fr");

export { pb };

//tous les films

export async function getAllFilms(collection = "Film") {
  try {
    return await pb.collection(collection).getFullList();
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
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

//toutes les activités

export async function getAllActivites(collection = "Activite") {
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
  const Onerecord = await pb.collection("Activite").getOne(id, {
    expand: "Invite",
  });
  return Onerecord;
}

// activite et film par id

export async function getInviteWithFilmsAndActivities(inviteId) {
  try {
    const invite = await pb.collection("Invite").getOne(inviteId, {
      expand: "Film, Activite",
    });
    return invite;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des films et activités de l'invité :",
      error
    );
    return null;
  }
}

// invité par id
export async function invitebyID(id) {
  const Onerecord = await pb
    .collection("Invite")
    .getOne(id, { expand: "Film, Activite" });
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

//filtrage des dates

export async function getNextEvents(
  page = 1,
  perPage = 7,
  collection = "Film"
) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const { items, totalItems } = await pb
      .collection(collection)
      .getList(page, perPage, {
        filter: `date >= "${today.toISOString()}"`,
        sort: "+date",
      });

    return {
      events: items,
      totalItems,
    };
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des prochains événements :",
      error
    );
    return { events: [], totalItems: 0 };
  }
}

//filtrage par genre de film

export async function filterByGenre(genre) {
  try {
    let filterQuery = "";
    if (genre) {
      filterQuery = `genre = '${genre}'`;
    }
    let data = await pb.collection("Film").getFullList({
      sort: "-created",
      filter: filterQuery,
    });
    data = data.map((Film) => {
      maison.imageUrl = pb.files.getURL(Film, Film.affiche);
      return Film;
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en filtrant la liste des maisons par genre",
      error
    );
    return [];
  }
}
