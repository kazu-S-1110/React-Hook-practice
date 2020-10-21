//typeがストリングのままだとエラーを吐かないけど正常に動作しないことありのため、変数に格納する。そうすることでタイポによるエラーが検出されるので修正がしやするなる。typeは一箇所にまとめて記述するのが通例

export const DELETE_EVENT = "DELETE_EVENT"
export const CREATE_EVENT = "CREATE_EVENT"
export const DELETE_ALL_EVENT = "DELETE_ALL_EVENT"

export const ADD_OPERATION_LOG = "ADD_OPERATION_LOG"
export const DELETE_ALL_OPERATION_LOGS = "DELETE_ALL_OPERATION_LOGS"
