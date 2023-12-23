import { defineStore } from 'pinia'

export default defineStore('gameState', {
  state: () => ({
    roomId:null,
    title: "untitled",
    templateId:null,
    assets:[],
    backgrounds: [],
    characterId:null,
    plotPoints: [],
    scene: [],
    variables: [],
    cursorPosition: {
      path:null,
      index:0
    }
  }),
  getters: {
    currentPlotPoint(state) {
      // returns the first incomplete plot point from the plot points array
      return state.plotPoints.find(plotPoint => !plotPoint.completed)
    },
    assetsMap(state) {
      // limits recursion
      const map = {
        characters: {},
        backgrounds: {},
        sounds: {},
        music: {}
      };
      state.assets.forEach(asset => {
        switch(asset.type) {
          case "character":
            map.characters[asset.id] = asset
            break;
          case 'background':
            map.backgrounds[asset.id] = asset
            break;
          case 'sound':
            map.sounds[asset.id] = asset
            break;
          case 'music':
            map.music[asset.id] = asset
            break;
        } 
      })
      return map
    },
  },
  actions: {
    createText() {

    },
    createDialog() {

    },
    selectChoice() {

    }
  },
})
