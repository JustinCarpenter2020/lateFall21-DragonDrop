import { AppState } from "../AppState"

class ItemsService{
  prepToMove(item, oldRoomId){
    item.oldRoomId = oldRoomId
    AppState.itemToMove = item
  }

  moveItem(roomId){
    let oldRoomIndex = AppState.rooms.findIndex(r => r.id === AppState.itemToMove.oldRoomId)
    let newRoom = AppState.rooms.find(r => r.id === roomId)
    AppState.rooms[oldRoomIndex].items = AppState.rooms[oldRoomIndex].items.filter(i => i.id !== AppState.itemToMove.id)
    newRoom.items.push(AppState.itemToMove)
  }
}



export const itemsService = new ItemsService()
