# Doodle

## Binômes
 - Abbah ANOH
 - Laeba TALAT
 - Corinne DANHO
 
 ## Routes mapping
| Front Route | API Route  | Description |
|-------------|------------|:-----------:|
|/            | /api/doodle|Lors de la soumission du formulaire les données sont envoyées à  ``/api/doodle``. Voir la methode DoodleResource#store |
| profile/:email | /api/users/:email | Page de profile d'un utilisateur, elle recupère principalement toutes les réunions créées par ce derniers. Voir UserResource#show. |
| meetings/:id | /api/meetings/:id | Page de details d'une réunion. On arrive sur cette page en cliquant sur le titre d'une réunion depuis la page de profile. Elle présente les informations détaillées d'une réunion. Voir MeetingResource#show. |
| 
