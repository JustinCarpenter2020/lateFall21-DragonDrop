import { AppState } from "../AppState"

class ItemsService{
  prepToMove(item, oldRoomId){
    item.oldRoomId = oldRoomId
    AppState.tempItem = item
    console.log(AppState.tempItem, oldRoomId)
  }

  moveItem(newRoomId){
    let temp = AppState.tempItem
    console.log(temp)
    // NOTE this is where you might send a put request if you had server
    let newRoom = AppState.rooms.find(r => r.id == newRoomId)

    let oldRoom = AppState.rooms.find(r => r.id == temp.oldRoomId)
    if(newRoom.name == "Sleeping Quarters" && temp.type== 'villager'){
      oldRoom.items = oldRoom.items.filter(i => i.type !== 'villager')
    } else {
      oldRoom.items = oldRoom.items.filter(i => i.id !== temp.id)
      newRoom.items.push(temp)
    }
  }


}



export const itemsService = new ItemsService()
