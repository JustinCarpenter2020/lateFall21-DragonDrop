import { AppState } from "../AppState"

class ItemsService{
  prepToMove(item, oldRoomId){
    item.oldRoomId = oldRoomId
    AppState.itemToMove = item
  }

  moveItem(roomId){
    let oldRoom = AppState.rooms.find(r => r.id === AppState.itemToMove.oldRoomId)
    let newRoom = AppState.rooms.find(r => r.id === roomId)
    if(newRoom.name === 'Sleeping Quarters' && AppState.itemToMove.type == 'villager'){
      oldRoom.items = oldRoom.items.filter(i => i.type !== 'villager')
    } else{
      oldRoom.items = oldRoom.items.filter(i => i.id !== AppState.itemToMove.id)
      newRoom.items.push(AppState.itemToMove)
    }
  }
}



export const itemsService = new ItemsService()
