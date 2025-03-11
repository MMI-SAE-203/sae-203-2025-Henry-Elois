import {
  getFilmsSortedByDate,
  getActiviteSortedByDate,
  getAllParticipantsSortedByName,
  oneID,
  activitebyID,
  getParticipantByID,
  getActivitybyAnimatorID,
  allActiviteByAnimateurName,
  addFilm,
  addActivite,
  addInvite,
  updateFilmById,
  updateActiviteById,
  updateInviteById,
} from "./backend.mjs";

/*
try {
  const Onerecord = await getFilmsSortedByDate();
  console.table(Onerecord);
} catch (e) {
  console.error(e);
}

try {
  const Onerecord = await getActiviteSortedByDate();
  console.table(Onerecord);
} catch (e) {
  console.error(e);
}

try {
  const participants = await getAllParticipantsSortedByName();
  console.table(participants);
} catch (e) {
  console.error(e);
}

try {
  const film = await oneID("922dm4718cf1rhm");
  console.table(film);
} catch (e) {
  console.error(e);
}

try {
  const Activite = await activitebyID("8mzuny5p5b87ru8");
  console.table(Activite);
} catch (e) {
  console.error(e);
}


try {
  const participants = await getParticipantByID("mf85z6hur7kn9hn");
  console.table(participants);
} catch (e) {
  console.error(e);
}


try {
    const activities = await getActivitybyAnimatorID("5js0g2o684qe1rw");
    console.log(activities);
}
catch (e) {
    console.error(e);
}



try {
  const allRecord = await allActiviteByAnimateurName("Morel");
  console.table(allRecord);
} catch (e) {
  console.error(e);
}


try {
const newFilm = {
  "nom":"la course à la mort",
  "date_projection":"2022-12-12", 
  "duree": "20min", 
  "annee_sortie": 2025,
  "langue":"français",
  "genre": "documentaire",
  "description_film": "La course à la mort est un film documentaire français réalisé par Jean-Louis Son",
"acteurs_film": "Jean-Louis Son, Jean-Pierre Morel",
"bande_annonce": "https://www.youtube.com/watch?v=7GqClqvlObY",
};
  await addFilm(newFilm);
} catch (e) {
  console.error(e);
}


try {
  const newActivite = {
    activite: "course",
    date : "2022-12-12",
    lieu : "Paris",
    type_dactivite : "défi",
  };
  await addActivite(newActivite);
} catch (e) {
  console.error(e);
}


try {
  const newInvite = {
    nom: "Thierry",
    prenom: "Bryan",
    role: "realisateur",
  };
  await addInvite(newInvite);
} catch (e) {
  console.error(e);
}



   const data = {
     nom: "la course à la vie",
     duree : "25min",
     annee_sortie: 2026,
   };
   await updateFilmById("e17v8yuh44w04qq", data);


   const data = {
     activite: "course dans la rue",
     lieu : "Belfort",
   };
   await updateActiviteById("e6p3c6jq9c451i5", data);



   const data = {
     nom: "Tourrion",
     prenom: "Benjamin",
   };
   await updateInviteById("5sz18120w4qb36b", data);
*/

