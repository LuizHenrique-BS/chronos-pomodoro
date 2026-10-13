// Funcao que recebe o estado atual e uma acao, e retorna o novo estado

import type { TaskStateModel } from "../../models/TaskStateModel";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {
  switch(action.type){
    case TaskActionTypes.START_TASK: {
      return state;
    }
  }

  return state;
}