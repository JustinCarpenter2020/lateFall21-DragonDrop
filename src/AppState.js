import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

tempItem: {},

  rooms: [
    {id: 1, name: "Treasure Room", items: [{id: 1, name: 'Chest',type: 'treasure', image: 'src/assets/img/treasure2.png.png' }], backgroundImage: 'https://www.khuxwiki.com/w/images/e/e5/Cave_of_Wonders_-_Treasure_Room_%282%29_KHX.png'},

  {id: 2, name: "Sleeping Quarters", items: [], backgroundImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5008c241263635.579f73a622fe3.gif'},

  {id: 3, name: "Cave Entrance", items: [], backgroundImage: 'https://i.pinimg.com/originals/c9/e8/ef/c9e8efca356e9fd2263493d78ab3737d.gif'},

  {id: 4, name: "Village", items: [{id:2, name: "timmy", type: "villager", image: 'src/assets/img/village4.png.png'}, {id:3, name: 'The 2 time', type: 'hero', image: 'src/assets/img/hero.jpg.png'}], backgroundImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4fd999f-a506-427e-a1af-09f59785bcf2/d9d2jhf-6d6de4c4-4c75-4025-89df-19645c8340b4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0ZmQ5OTlmLWE1MDYtNDI3ZS1hMWFmLTA5ZjU5Nzg1YmNmMlwvZDlkMmpoZi02ZDZkZTRjNC00Yzc1LTQwMjUtODlkZi0xOTY0NWM4MzQwYjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.E75eLb9Zj-4hf-VZVTDbttciXtqDaLkHAk2bOHgHl9U'}
]


})





