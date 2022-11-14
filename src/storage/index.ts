import Cookie from "./cookie"
import LocalStroage from "./local"
import SessionStorage from "./session"

export default {
  local: LocalStroage,
  session: SessionStorage,
  cookie: Cookie,
}