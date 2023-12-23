
enum ComponentType {
  text="textComponent",
  dialog="dialogComponent",
  background="backgroundComponent",
  option="optionComponent",
  choice="choiceComponent",
  assignment="assignmentComponent",
  switch="switchComponent",
  branch="branchComponent",
  outfit="outfitComponent",
  sound="soundComponent",
  music="musicComponent",
  note="noteComponent",
  jump="jumpComponent"
}

interface Component {
  id:string;
  room_id:string;
  chapter_id:string;
  scene_id:string;
  path?:string;
  order:string;
  type:ComponentType;
}

interface TextComponent extends Component {
  text:string;
  type:ComponentType.text;
}

interface DialogComponent extends Component {
  dialog:string;
  expression_transition?:string;
  character_id?:string;
  type:ComponentType.dialog
}

interface BackgroundComponent extends Component {
  background_id:string;
  transition?:string
  type:ComponentType.background
}

interface OptionComponent extends Component {
  type:ComponentType.option;
  display_text:string
}

interface ChoiceComponent extends Component {
  type:ComponentType.choice;
  path:string;
}

interface AssignmentComponent extends Component {
  type:ComponentType.assignment;
  variable_id?:string;
  option_id?:string;
  var_type?:string
}

interface SwitchComponent extends Component {
  type:ComponentType.switch;
  path:string;
  variable_id?:string;
}

interface BranchCondition {
  type:string;
  option_id:string;
}

interface BranchComponent extends Component {
  type:ComponentType.branch;
  path:string;
  conditions:[BranchCondition]
}

interface MusicComponent extends Component {
  type:ComponentType.music;
  asset_id:string;
  transition?:string;
}

interface SoundComponent extends Component {
  type:ComponentType.sound;
  asset_id:string;
}

interface NoteComponent extends Component {
  type:ComponentType.note;
  note:string;
}

interface OutfitComponent extends Component {
  type:ComponentType.outfit;
  character_id:string;
  outfit_id:string;
}

interface JumpTransition {
  destination:string;
}

interface JumpComponent extends Component {
  type:ComponentType.jump;
  jump_transition:JumpTransition
}