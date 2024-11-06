# Documentation d'Utilisation du Composant Table

## Introduction

Ce composant `Table` est conçu pour afficher des données sous forme de tableau, avec des fonctionnalités de tri, de filtrage et de pagination. Vous pouvez également ajouter des actions personnalisées par ligne, et formater les cellules pour afficher différents types de données, y compris des liens, des images, des booléens, etc.

### Comment Utiliser le Composant Table

**Importation :**

Tout d'abord, importez le composant Table dans votre fichier React où vous souhaitez l'utiliser

```
import Table from './Table';
```

**Les Données:**
Le composant Table prend en entrée un tableau de données (ex. userData) et une définition de colonnes (userColumns).

```
const userData = [
	{
		id: 1,
		name: "Alice",
		email: "alice@example.com",
		age: 30,
		joined: new Date(2023, 11, 1),
		interests: ["Coding", "Music", "Travel"],
		website: "https://alice.dev",
		isAdmin: true,
		picture: "https://via.placeholder.com/50",
	},
	// Ajoutez plus d'utilisateurs ici
];
```

**Définir les Colonnes**
Les colonnes sont définies comme un tableau d'objets, chaque objet représentant une colonne. Vous pouvez inclure une fonction de formatage des cellules pour afficher des types de données spécifiques, comme des dates, des liens, ou des images.

```
const userColumns = [
	{ header: "ID", accessor: "id", sortable: true },
	{ header: "Nom", accessor: "name", sortable: true },
	{ header: "Email", accessor: "email" },
	{ header: "Âge", accessor: "age", sortable: true },
	{
		header: "Date d'adhésion",
		accessor: "joined",
		CellFormatter: ({ value }) => new Date(value).toLocaleDateString(),
	},
	{
		header: "Intérêts",
		accessor: "interests",
		CellFormatter: ({ value }) => value.join(", "),
	},
	{
		header: "Site web",
		accessor: "website",
		CellFormatter: ({ value }) =>
			value ? <a href={value} target="_blank" rel="noopener noreferrer">Lien</a> : "—",
	},
	{
		header: "Admin",
		accessor: "isAdmin",
		CellFormatter: ({ value }) => (value ? "Oui" : "Non"),
	},
	{
		header: "Photo",
		accessor: "picture",
		CellFormatter: ({ value }) => (
			<img src={value} alt="User" style={{ width: 50, height: 50, borderRadius: "50%" }} />
		),
	},
];
```

**Utiliser le Composant Table:**
Ensuite, utilisez le composant Table dans votre application, en passant les données et les colonnes comme propriétés.

```

const App = () => {
	return (
		<div>
			<h1>Liste des Utilisateurs</h1>
			<Table
				data={userData}
				columns={userColumns}
				sortable={true}  // Tri activé
				filterable={true}  // Filtrage activé
				pagination={true}  // Pagination activée
				rowsPerPage={5}  // Nombre de lignes par page
				loading={false}  // Si les données sont en cours de chargement
				actions={[
					{
						label: "Voir Détails",
						onClick: (id) => alert(`Voir les détails de l'utilisateur ${id}`)
					},
				]}
				onRowSelect={(selectedRows) => console.log("Lignes sélectionnées :", selectedRows)}
			/>
		</div>
	);
};

```



## Options du Composant

data : Un tableau de données à afficher.
columns : La définition des colonnes, avec un nom, un champ (accessor) et, si nécessaire, un formatteur de cellules.
sortable : Activer/désactiver le tri (booléen).
filterable : Activer/désactiver le filtrage (booléen).
pagination : Activer/désactiver la pagination (booléen).
rowsPerPage : Nombre de lignes affichées par page (numérique).
loading : Si les données sont en cours de chargement (booléen).
actions : Un tableau d'actions personnalisées par ligne.
onRowSelect : Une fonction déclenchée lors de la sélection
