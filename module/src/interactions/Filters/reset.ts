import { Command } from "../../abstract/QuickCommand";export default class Reset extends Command{get name(){return"resetfilters"}get description(){return"Clears all filters"}get aliases(){return["clearfilters","reset"]}get category(){return"Filters"}get checks(){return{voice:true,dispatcher:true,channel:true}}async run({ctx:e}){e.dispatcher.player.clearFilters(),e.successMessage("All filters have been cleared!")}}